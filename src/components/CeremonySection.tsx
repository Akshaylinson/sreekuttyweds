import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, NilavilakkuIcon, CornerOrnament } from './DecorativeElements';
import { MapPin, Clock, Calendar as CalendarIcon, ExternalLink, Navigation } from 'lucide-react';

export const CeremonySection: React.FC = () => {
  const ceremony = weddingData.ceremony;

  return (
    <section id="ceremony" className="py-16 px-4 sm:px-6 relative bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE0] to-[#FAF7F2]">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/40 text-center overflow-hidden"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 paper-pattern opacity-25 pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-3 left-3 w-6 h-6 text-[#D4AF37]/70" />
          <CornerOrnament position="top-right" className="absolute top-3 right-3 w-6 h-6 text-[#D4AF37]/70" />

          {/* Top Tag & Sacred Symbol */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#9E751D] mb-1">
              <NilavilakkuIcon className="w-5 h-5 text-[#B88924]" />
              <span className="font-malayalam text-xs text-[#8C6819] font-medium tracking-wider">
                {ceremony.malayalamTitle}
              </span>
              <NilavilakkuIcon className="w-5 h-5 text-[#B88924]" />
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2D1B10] font-bold tracking-wide">
              {ceremony.title}
            </h2>

            <GoldDivider className="my-3" />
          </div>

          {/* Date & Time Highlights */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF5EB] border border-[#D4AF37]/25 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FAF1DF] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <CalendarIcon className="w-5 h-5 text-[#B88924]" />
              </div>
              <div>
                <p className="text-[11px] font-serif-title uppercase tracking-widest text-[#8C6314]">Date & Day</p>
                <p className="font-serif-title text-sm font-semibold text-[#2D1B10]">{ceremony.date}</p>
                <p className="text-xs text-[#70523C]">{ceremony.day}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF5EB] border border-[#D4AF37]/25 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FAF1DF] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#B88924]" />
              </div>
              <div>
                <p className="text-[11px] font-serif-title uppercase tracking-widest text-[#8C6314]">Muhurtham Time</p>
                <p className="font-serif-title text-sm font-semibold text-[#2D1B10]">{ceremony.muhurtham}</p>
                <p className="text-xs text-[#70523C]">Morning</p>
              </div>
            </div>
          </div>

          {/* Venue Card */}
          <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F2E6] border border-[#D4AF37]/40 shadow-sm text-center my-4">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF0DC] text-[#B88924] mb-2 border border-[#D4AF37]/30">
              <MapPin className="w-4 h-4" />
            </div>

            <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2B190E]">
              {ceremony.venueName}
            </h3>
            
            <p className="font-serif-title text-sm font-medium text-[#8C6314] mt-0.5">
              {ceremony.subVenue}
            </p>

            <p className="font-serif-body text-xs sm:text-sm text-[#694F3B] mt-2 italic max-w-md mx-auto">
              {ceremony.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a
              href={ceremony.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-[#FFFDF9] font-serif-title text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions to Temple</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
