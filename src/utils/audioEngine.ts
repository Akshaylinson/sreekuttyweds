/**
 * Web Audio API based traditional Indian wedding synthesizer.
 * Provides rich, serene ambient Raga melodies (Tanpura + Plucked Veena / Flute notes)
 * without needing external MP3 dependencies. 
 */

class WeddingAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private melodyIndex: number = 0;

  // Auspicious Raga Mohanam / Kalyani frequencies (Hz) in C#
  // Sa, Ri, Ga, Pa, Dha (pentatonic joyful harmony)
  private readonly notes = [
    277.18, // C#4 (Sa)
    311.13, // D#4 (Ri)
    349.23, // F4  (Ga)
    415.30, // G#4 (Pa)
    466.16, // A#4 (Dha)
    554.37, // C#5 (High Sa)
    466.16, // A#4 (Dha)
    415.30, // G#4 (Pa)
    349.23, // F4  (Ga)
    311.13, // D#4 (Ri)
    415.30, // G#4 (Pa)
    554.37, // C#5 (High Sa)
    622.25, // D#5 (High Ri)
    554.37, // C#5
    466.16, // A#4
    415.30, // G#4
    349.23, // F4
    277.18, // C#4
  ];

  public init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch {
      // AudioContext not supported
    }
  }

  public async start(): Promise<boolean> {
    this.init();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isPlaying) return true;
    this.isPlaying = true;

    // Start Tanpura drone
    this.startDrone();

    // Start Melody loop
    this.playNextNote();
    return true;
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain) return;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    // Fundamental Sa (C#3) and Pa (G#3)
    const baseFreqs = [138.59, 207.65, 277.18];

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle warm chorus vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.2, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.droneGain);
      osc.start();
    });
  }

  private playNextNote = () => {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const freq = this.notes[this.melodyIndex % this.notes.length];
    this.melodyIndex++;

    const now = this.ctx.currentTime;

    // Create warm plucked instrument timbre (Veena / Flute blend)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    // Sub-harmonic / overtone for warm acoustic richness
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Envelope: soft gentle attack, resonant long bell-like decay
    const duration = 2.4;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.16, now + 0.12);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Low pass filter for soft organic temple acoustic feel
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(2.0, now);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(filter);
    filter.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);

    // Play next note with rhythmic variation
    const delays = [1100, 1400, 800, 1600, 2200, 1200];
    const nextDelay = delays[this.melodyIndex % delays.length];

    this.timerId = window.setTimeout(this.playNextNote, nextDelay);
  };

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      const targetGain = muted ? 0 : 0.28;
      this.masterGain.gain.setValueAtTime(targetGain, this.ctx.currentTime);
    }
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }
}

export const weddingAudio = new WeddingAudioEngine();
