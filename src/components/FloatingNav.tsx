import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingAudio } from '../utils/audioEngine';
import { Volume2, VolumeX, Music, Menu, X, Home, Heart, Calendar, MapPin, Camera, Users, Share2 } from 'lucide-react';

interface FloatingNavProps {
  onShare: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ onShare }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(weddingAudio.getPlayingState());
      setIsMuted(weddingAudio.getMutedState());
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    const state = weddingAudio.toggle();
    setIsPlaying(state);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMute = !isMuted;
    weddingAudio.setMute(nextMute);
    setIsMuted(nextMute);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero', icon: Home },
    { label: 'Invitation', id: 'invitation', icon: Heart },
    { label: 'Auspicious Date', id: 'date-reveal', icon: Calendar },
    { label: 'Ceremony', id: 'ceremony', icon: MapPin },
    { label: 'Reception', id: 'reception', icon: MapPin },
    { label: 'Photo Gallery', id: 'gallery', icon: Camera },
    { label: 'Venues & Travel', id: 'location', icon: MapPin },
    { label: 'Family Blessings', id: 'family', icon: Users },
  ];

  return (
    <>
      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-5 inset-x-0 z-40 flex items-center justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-2 p-1.5 rounded-full bg-[#231711]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl pointer-events-auto"
        >
          {/* Audio Player Pill */}
          <button
            onClick={toggleAudio}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#352319] hover:bg-[#452E20] border border-[#D4AF37]/30 text-[#F5E08B] text-xs font-serif-title transition-all cursor-pointer"
            title={isPlaying ? "Pause wedding music" : "Play wedding music"}
          >
            <div className="flex items-center gap-1">
              {isPlaying && !isMuted ? (
                <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                  <span className="w-0.5 bg-[#D4AF37] animate-[bounce_0.8s_infinite] h-full rounded-full" />
                  <span className="w-0.5 bg-[#D4AF37] animate-[bounce_1.1s_infinite] h-2/3 rounded-full" />
                  <span className="w-0.5 bg-[#D4AF37] animate-[bounce_0.6s_infinite] h-4/5 rounded-full" />
                </div>
              ) : (
                <Music className="w-3.5 h-3.5 text-[#D4AF37]" />
              )}
            </div>

            <span className="text-[11px] uppercase tracking-wider font-medium hidden xs:inline">
              {isPlaying ? 'Music On' : 'Play Music'}
            </span>

            {isPlaying && (
              <span
                onClick={toggleMute}
                className="p-1 -mr-1 rounded-full hover:bg-white/10 text-stone-300"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-[#D4AF37]" />}
              </span>
            )}
          </button>

          {/* Quick Share Button */}
          <button
            onClick={onShare}
            className="p-2 rounded-full bg-[#352319] hover:bg-[#452E20] border border-[#D4AF37]/30 text-[#F5E08B] transition-all cursor-pointer"
            title="Share Wedding Invitation"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Navigation Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-[#1E120B] text-xs font-serif-title font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-all cursor-pointer"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="text-[11px]">Menu</span>
          </button>
        </motion.div>
      </div>

      {/* Slide-Up Navigation Sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-50 bg-[#120B07]/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#FAF7F2] rounded-3xl p-6 border-2 border-[#D4AF37]/40 shadow-2xl text-center relative"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#694F3B] hover:bg-[#EFE8DA] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif-title text-base uppercase tracking-widest text-[#9E751D] font-bold mb-4">
                Invitation Index
              </h3>

              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="flex items-center gap-2 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/30 text-[#4A3222] hover:bg-[#F5EFE4] hover:border-[#D4AF37] transition-all text-left cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-[#B88924] shrink-0" />
                      <span className="font-serif-title text-xs font-semibold">{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
