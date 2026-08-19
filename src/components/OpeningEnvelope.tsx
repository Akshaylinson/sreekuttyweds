import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { WeddingEmblem, NilavilakkuIcon } from './DecorativeElements';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audioEngine';

interface OpeningEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = async () => {
    if (isOpening) return;
    setIsOpening(true);

    // Initialize & start serene ambient traditional audio on user gesture
    try {
      await weddingAudio.start();
    } catch {
      // Audio autoplay handled gracefully
    }

    // Trigger subtle golden petals & floral confetti burst
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5E08B', '#FFE58F', '#FFFDF9', '#FF9F43', '#FF6B6B'],
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.8,
      ticks: 200,
    });

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A120E] p-4 sm:p-6 overflow-hidden"
        >
          {/* Subtle luxury textured backdrop with soft gold vignette */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#4A2E1B_0%,#1A120E_70%)] pointer-events-none" />
          
          {/* Subtle glowing ambient particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#E6A052]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Invitation Card Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`relative w-full max-w-md bg-[#FAF7F2] rounded-2xl shadow-2xl p-7 sm:p-10 border-2 border-[#D4AF37]/40 text-center flex flex-col items-center justify-between min-h-[580px] sm:min-h-[620px] transition-all duration-700 ${
              isOpening ? 'scale-105 opacity-90 filter blur-[0.5px]' : ''
            }`}
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 rounded-2xl paper-pattern pointer-events-none opacity-40" />

            {/* Elegant Double Gold Inner Border */}
            <div className="absolute inset-3 border border-[#D4AF37]/40 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-lg pointer-events-none" />

            {/* Corner Filigree Accents */}
            <div className="absolute top-5 left-5 text-[#D4AF37]/60 text-xs">✤</div>
            <div className="absolute top-5 right-5 text-[#D4AF37]/60 text-xs">✤</div>
            <div className="absolute bottom-5 left-5 text-[#D4AF37]/60 text-xs">✤</div>
            <div className="absolute bottom-5 right-5 text-[#D4AF37]/60 text-xs">✤</div>

            {/* Top Emblem & Nilavilakku Section */}
            <div className="relative z-10 flex flex-col items-center pt-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-2"
              >
                <WeddingEmblem className="w-16 h-16 sm:w-20 sm:h-20 text-[#B88924]" />
              </motion.div>
              
              <div className="flex items-center gap-2 mb-3 text-[#9E751D]">
                <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
                <span className="font-malayalam text-xs text-[#8C6819] font-medium tracking-widest">
                  {weddingData.traditionalDateMalayalam}
                </span>
                <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
              </div>

              <p className="font-serif-body italic text-[#70523C] text-sm sm:text-base tracking-wide">
                Together with their families
              </p>
            </div>

            {/* Couple Names - Luxury Typography */}
            <div className="relative z-10 my-auto py-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="font-serif-title text-3xl sm:text-4xl tracking-wider text-[#352317] font-semibold">
                  {weddingData.brideName}
                </h1>
                
                <div className="flex items-center justify-center my-2">
                  <span className="font-script text-3xl sm:text-4xl text-[#B88924] px-4 font-normal">
                    &
                  </span>
                </div>

                <h1 className="font-serif-title text-3xl sm:text-4xl tracking-wider text-[#352317] font-semibold">
                  {weddingData.groomName}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-4"
              >
                <p className="font-serif-body text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6819]">
                  Invite you to celebrate their wedding
                </p>
                <p className="font-serif-title text-xs tracking-widest text-[#5C402E] mt-1 font-medium">
                  {weddingData.weddingDateFormatted} • {weddingData.weddingDay}
                </p>
              </motion.div>
            </div>

            {/* Bottom Open Action */}
            <div className="relative z-10 w-full flex flex-col items-center pb-2">
              {/* Golden Wax Seal / Open Button */}
              <motion.button
                onClick={handleOpenInvitation}
                disabled={isOpening}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative w-full max-w-xs py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-[#FAF7F2] font-serif-title text-sm tracking-[0.2em] font-semibold uppercase shadow-lg shadow-[#B38827]/30 transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpening ? 'opacity-90 animate-pulse' : 'hover:shadow-xl hover:shadow-[#D4AF37]/40'
                }`}
              >
                {/* Light sweep animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <NilavilakkuIcon className="w-4 h-4 text-[#FFF275]" />
                  {isOpening ? 'Opening Invitation...' : 'Open Invitation'}
                  <span className="text-xs transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>

              <p className="text-[11px] text-[#9E751D]/80 mt-3 font-serif-body italic tracking-wider flex items-center gap-1.5">
                <span>✦</span> Tap to experience the sacred celebration <span>✦</span>
              </p>
            </div>

            {/* Light sweep overlay during opening */}
            {isOpening && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none z-30"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
