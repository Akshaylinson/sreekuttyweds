import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, WeddingEmblem, NilavilakkuIcon, CornerOrnament } from './DecorativeElements';
import { Phone, MessageCircle, Home, UserCheck } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const family = weddingData.familyBlessings;

  return (
    <section id="family" className="py-16 px-4 sm:px-6 relative bg-[#FAF7F2]">
      <div className="max-w-xl mx-auto text-center">
        {/* Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-7 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/35 text-center overflow-hidden"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 paper-pattern opacity-25 pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-3 left-3 w-6 h-6 text-[#D4AF37]/60" />
          <CornerOrnament position="top-right" className="absolute top-3 right-3 w-6 h-6 text-[#D4AF37]/60" />

          {/* Header */}
          <div className="relative z-10 flex flex-col items-center">
            <WeddingEmblem className="w-12 h-12 text-[#B88924] mb-2" />
            
            <p className="font-serif-title uppercase text-xs tracking-[0.25em] text-[#9E751D]">
              {family.subheading}
            </p>

            <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2E1C11] font-bold tracking-wide mt-1">
              {family.heading}
            </h2>

            <GoldDivider className="my-4" />
          </div>

          {/* Host Family Details */}
          <div className="relative z-10 p-5 rounded-2xl bg-[#FAF5EB] border border-[#D4AF37]/30 my-4 text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF0DC] text-[#B88924] mb-2 border border-[#D4AF37]/30">
              <UserCheck className="w-4 h-4" />
            </div>

            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2D1B10]">
              {family.hostName}
            </h3>

            <p className="font-serif-title text-xs uppercase tracking-widest text-[#8C6314] font-medium mt-1">
              {family.hostRelation}
            </p>

            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#6E4F39] mt-3 font-serif-body">
              <Home className="w-4 h-4 text-[#B88924] shrink-0" />
              <span>{family.houseName}, {family.place}</span>
            </div>
          </div>

          {/* Note */}
          <p className="relative z-10 font-serif-body text-xs text-[#7A5B45] italic my-3">
            {family.note}
          </p>

          {/* Direct Contact Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
            <a
              href={`tel:${weddingData.contactNumber}`}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FFFDF9] border border-[#D4AF37]/50 text-[#3D2819] font-serif-title text-xs uppercase tracking-wider font-semibold hover:border-[#D4AF37] hover:bg-[#FAF6EE] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88924]" />
              <span>Call: {weddingData.contactNumber}</span>
            </a>

            <a
              href={`https://wa.me/${weddingData.contactWhatsApp}?text=${encodeURIComponent(
                `Namaste! Regarding the wedding of ${weddingData.brideName} & ${weddingData.groomName} on 13 September 2026.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] text-white font-serif-title text-xs uppercase tracking-wider font-semibold hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Host</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
