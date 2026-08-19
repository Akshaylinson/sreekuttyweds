import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { WeddingEmblem, GoldDivider } from './DecorativeElements';
import { Calendar, MapPin, Share2, Heart } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onShare: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onShare }) => {
  const heroImage = weddingData.gallery[0]?.url || "/src/assets/images/couple_hero_portrait_1787138053178.jpg";

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link for 13 September 2026 8:45 AM IST (03:15 UTC) to 1:00 PM IST
    const title = encodeURIComponent(`${weddingData.brideName} & ${weddingData.groomName} Wedding`);
    const details = encodeURIComponent(
      `Wedding Ceremony: ${weddingData.ceremony.venueName} (${weddingData.ceremony.time})\nReception: ${weddingData.reception.venueName}\nContact: ${weddingData.contactNumber}`
    );
    const location = encodeURIComponent(`${weddingData.ceremony.venueName}, ${weddingData.ceremony.subVenue}`);
    const dates = '20260913T031500Z/20260913T073000Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden pt-6 pb-12 px-4">
      {/* Background with soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] -z-10" />

      {/* Decorative top header emblem */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-2 z-10"
      >
        <WeddingEmblem className="w-12 h-12 sm:w-14 sm:h-14 text-[#B88924] mb-1" />
        <span className="font-serif-title uppercase text-[10px] sm:text-xs tracking-[0.3em] text-[#9E751D] font-medium">
          The Wedding Celebration
        </span>
        <span className="font-malayalam text-xs text-[#8C6819] font-medium mt-0.5">
          {weddingData.traditionalDateMalayalam}
        </span>
      </motion.div>

      {/* Main Couple Card & Cinematic Photo Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-sm sm:max-w-md mx-auto my-4 rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#FFFDF9] to-[#F7F2EA] shadow-2xl border border-[#D4AF37]/30"
      >
        {/* Photo Container with soft golden border and slow cinematic zoom */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-inner border border-[#D4AF37]/20 group">
          <img
            src={heroImage}
            alt={`${weddingData.brideName} and ${weddingData.groomName}`}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
          />

          {/* Cinematic Vignette and Gold Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/85 via-transparent to-[#1F140E]/20 pointer-events-none" />

          {/* Floating light particles effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />

          {/* Text on Image Lower Third */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-center text-[#FFFDF9] z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-script text-2xl sm:text-3xl text-[#F5E08B] drop-shadow-md mb-0.5"
            >
              Beginning of Forever
            </motion.p>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-wider drop-shadow-md">
              {weddingData.brideName} & {weddingData.groomName}
            </h2>
            <p className="font-serif-body text-xs sm:text-sm tracking-widest text-[#E6C875] mt-1 drop-shadow">
              {weddingData.weddingDateFormatted} • {weddingData.weddingDay}
            </p>
          </div>
        </div>

        {/* Below photo caption & quote */}
        <div className="text-center pt-4 pb-2 px-2">
          <p className="font-serif-body italic text-sm text-[#614735] leading-relaxed">
            “{weddingData.tagline}”
          </p>
        </div>
      </motion.div>

      {/* Quick Interactive Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-sm flex flex-col items-center gap-3 z-10"
      >
        <div className="grid grid-cols-3 gap-2 w-full">
          <button
            onClick={handleAddToCalendar}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF9] border border-[#D4AF37]/30 text-[#4A3222] shadow-sm hover:border-[#D4AF37] hover:bg-[#FAF6EE] transition-all cursor-pointer text-center"
          >
            <Calendar className="w-4 h-4 text-[#B88924] mb-1" />
            <span className="text-[11px] font-serif-title font-medium tracking-wide">Save Date</span>
          </button>

          <button
            onClick={() => onNavigate('ceremony')}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF9] border border-[#D4AF37]/30 text-[#4A3222] shadow-sm hover:border-[#D4AF37] hover:bg-[#FAF6EE] transition-all cursor-pointer text-center"
          >
            <MapPin className="w-4 h-4 text-[#B88924] mb-1" />
            <span className="text-[11px] font-serif-title font-medium tracking-wide">Venues</span>
          </button>

          <button
            onClick={onShare}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF9] border border-[#D4AF37]/30 text-[#4A3222] shadow-sm hover:border-[#D4AF37] hover:bg-[#FAF6EE] transition-all cursor-pointer text-center"
          >
            <Share2 className="w-4 h-4 text-[#B88924] mb-1" />
            <span className="text-[11px] font-serif-title font-medium tracking-wide">Share</span>
          </button>
        </div>

        <button
          onClick={() => onNavigate('date-reveal')}
          className="flex items-center gap-1.5 text-xs font-serif-title uppercase tracking-[0.2em] text-[#9E751D] hover:text-[#B88924] transition-colors mt-2 cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30 animate-pulse" />
          <span>Scroll to Explore Invitation</span>
          <span className="animate-bounce">↓</span>
        </button>
      </motion.div>
    </section>
  );
};
