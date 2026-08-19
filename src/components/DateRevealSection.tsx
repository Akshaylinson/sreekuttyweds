import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, NilavilakkuIcon } from './DecorativeElements';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DateRevealSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  // Trigger celebration effects upon reaching threshold
  const triggerRevealSuccess = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);

    // Multi-stage flower petal and gold confetti burst
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#F5E08B', '#FFE58F', '#FF8B6B', '#FFD166', '#FFFFFF'],
      scalar: 1.2,
      gravity: 0.7,
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.6 },
        colors: ['#D4AF37', '#FF9F43', '#FFFFFF'],
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.6 },
        colors: ['#D4AF37', '#FF9F43', '#FFFFFF'],
      });
    }, 250);
  }, [isRevealed]);

  // Initialize Canvas Scratch Layer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width * 2; // high-dpi
    canvas.height = height * 2;
    ctx.scale(2, 2);

    // Create luxurious golden metallic scratch layer
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#B88924');
    gradient.addColorStop(0.3, '#E6C875');
    gradient.addColorStop(0.6, '#A6791E');
    gradient.addColorStop(0.85, '#F5E08B');
    gradient.addColorStop(1, '#8C6314');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add gold dust texture dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 350; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Text on scratch surface
    ctx.fillStyle = '#2A1A0F';
    ctx.font = 'bold 13px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ SCRATCH OR SWIPE TO REVEAL ✦', width / 2, height / 2 - 12);

    ctx.fillStyle = '#4A3222';
    ctx.font = 'italic 12px "Playfair Display", serif';
    ctx.fillText('Something auspicious awaits...', width / 2, height / 2 + 12);

    // Border line inside scratch foil
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, width - 20, height - 20);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas, isRevealed]);

  // Scratch handler
  const scratchAt = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratched percentage roughly
    checkScratched();
  };

  const checkScratched = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparentCount = 0;
      const totalPixels = data.length / 4;
      const step = 32; // Sample every 32nd pixel for performance

      for (let i = 3; i < data.length; i += step * 4) {
        if (data[i] === 0) {
          transparentCount++;
        }
      }

      const percent = Math.min(100, Math.round((transparentCount / (totalPixels / step)) * 100));
      setScratchedPercent(percent);

      if (percent >= 35 && !isRevealed) {
        triggerRevealSuccess();
      }
    } catch {
      // Fallback
    }
  };

  // Touch & Mouse Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDrawing(true);
    if (e.touches[0]) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e.touches[0]) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  const handleManualReveal = () => {
    triggerRevealSuccess();
  };

  const handleReset = () => {
    setIsRevealed(false);
    setScratchedPercent(0);
    setTimeout(() => {
      initCanvas();
    }, 100);
  };

  return (
    <section id="date-reveal" className="py-14 px-4 relative flex flex-col items-center bg-[#FAF7F2]">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBD8AD]/30 border border-[#D4AF37]/30 text-[#8C6314] text-xs font-serif-title uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B88924]" />
            <span>Auspicious Muhurtham</span>
          </div>
          
          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2F2117] font-semibold tracking-wide">
            Reveal The Sacred Date
          </h2>
          <GoldDivider className="my-3" />
          <p className="font-serif-body italic text-[#6B4E38] text-sm max-w-xs mx-auto">
            Swipe or scratch the golden foil below to uncover the blessed day of our union.
          </p>
        </motion.div>

        {/* Scratch Card Outer Wrapper */}
        <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F2EBDC] p-6 flex flex-col items-center justify-center">
          {/* Revealed Content underneath */}
          <div className="relative z-0 text-center flex flex-col items-center justify-center h-full w-full">
            <div className="flex items-center justify-center gap-2 mb-1">
              <NilavilakkuIcon className="w-5 h-5 text-[#B88924]" />
              <span className="font-malayalam text-xs text-[#8C6819] font-medium tracking-wider">
                {weddingData.traditionalDateMalayalam}
              </span>
              <NilavilakkuIcon className="w-5 h-5 text-[#B88924]" />
            </div>

            {/* Date Numbers */}
            <div className="my-1">
              <span className="font-serif-title text-5xl sm:text-6xl font-bold tracking-tight text-[#2B1B12] block">
                13
              </span>
              <span className="font-serif-title text-xl sm:text-2xl tracking-[0.25em] text-[#B88924] font-semibold uppercase block mt-1">
                SEPTEMBER 2026
              </span>
            </div>

            {/* Day and Muhurtham info */}
            <div className="mt-1 pt-1 border-t border-[#D4AF37]/30 w-4/5 mx-auto">
              <p className="font-serif-title text-sm tracking-widest text-[#4A3222] font-semibold uppercase">
                SUNDAY
              </p>
              <p className="font-serif-body text-xs text-[#7A5B45] mt-0.5">
                Muhurtham: {weddingData.ceremony.muhurtham}
              </p>
            </div>

            {isRevealed && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Date Revealed!</span>
              </motion.div>
            )}
          </div>

          {/* Scratch Canvas Overlay */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="absolute inset-0 w-full h-full z-10 cursor-pointer touch-none-select transition-opacity duration-500"
            />
          )}
        </div>

        {/* Action button controls under card */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {!isRevealed ? (
            <button
              onClick={handleManualReveal}
              className="py-2 px-4 rounded-full bg-[#FAF6EE] border border-[#D4AF37]/50 text-[#8C6314] text-xs font-serif-title tracking-wider uppercase shadow-sm hover:bg-[#EBD8AD]/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88924]" />
              <span>Tap to Reveal Instantly</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="py-1.5 px-3 rounded-full text-[#7A5B45] text-xs font-serif-body flex items-center gap-1 hover:text-[#2B1B12] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Cover & Scratch Again</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
