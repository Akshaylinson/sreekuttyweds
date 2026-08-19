import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { WeddingEmblem, GoldDivider, CornerOrnament, NilavilakkuIcon } from './DecorativeElements';

export const InvitationMessageSection: React.FC = () => {
  return (
    <section id="invitation" className="py-16 px-4 sm:px-6 relative bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2]">
      <div className="max-w-xl mx-auto">
        {/* Luxury Royal Stationery Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-7 sm:p-12 shadow-2xl border-2 border-[#D4AF37]/35 text-center overflow-hidden"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 paper-pattern opacity-30 pointer-events-none" />

          {/* Double Gold Inset Border */}
          <div className="absolute inset-3.5 border border-[#D4AF37]/30 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4.5 border border-[#D4AF37]/15 rounded-xl pointer-events-none" />

          {/* Four Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-4 left-4 w-7 h-7 text-[#D4AF37]" />
          <CornerOrnament position="top-right" className="absolute top-4 right-4 w-7 h-7 text-[#D4AF37]" />
          <CornerOrnament position="bottom-left" className="absolute bottom-4 left-4 w-7 h-7 text-[#D4AF37]" />
          <CornerOrnament position="bottom-right" className="absolute bottom-4 right-4 w-7 h-7 text-[#D4AF37]" />

          {/* Card Header */}
          <div className="relative z-10 flex flex-col items-center">
            <WeddingEmblem className="w-14 h-14 sm:w-16 sm:h-16 text-[#B88924] mb-2" />
            
            <p className="font-serif-title uppercase text-xs tracking-[0.3em] text-[#9E751D] font-medium">
              In The Name of The Almighty
            </p>
            
            <h2 className="font-serif-title text-2xl sm:text-3xl text-[#312015] font-semibold mt-2 tracking-wide">
              {weddingData.invitationMessage.heading}
            </h2>

            <GoldDivider className="my-4" />
          </div>

          {/* Invitation Body */}
          <div className="relative z-10 space-y-4 text-[#4A3423] font-serif-body text-base sm:text-lg leading-relaxed sm:leading-loose">
            <p>
              {weddingData.invitationMessage.bodyParagraphs[0]}
            </p>

            {/* Couple Feature Box */}
            <div className="my-6 py-4 px-3 bg-[#FAF5EC]/80 rounded-2xl border border-[#D4AF37]/30">
              <span className="font-serif-title text-2xl sm:text-3xl text-[#2B190E] font-bold tracking-wider block">
                {weddingData.brideName}
              </span>
              <span className="font-script text-2xl sm:text-3xl text-[#B88924] block my-0.5">
                with
              </span>
              <span className="font-serif-title text-2xl sm:text-3xl text-[#2B190E] font-bold tracking-wider block">
                {weddingData.groomName}
              </span>
              <p className="font-serif-body text-xs text-[#7A583A] mt-2 italic">
                (Son of {weddingData.groomParents}, {weddingData.groomHouse})
              </p>
            </div>

            <p>
              {weddingData.invitationMessage.bodyParagraphs[1]}
            </p>

            <p>
              {weddingData.invitationMessage.bodyParagraphs[2]}
            </p>

            {/* Authentic Malayalam Excerpt */}
            <div className="pt-4 mt-6 border-t border-[#D4AF37]/25">
              <div className="flex items-center justify-center gap-2 mb-2 text-[#9E751D]">
                <NilavilakkuIcon className="w-4 h-4 text-[#B88924]" />
                <span className="text-[11px] font-serif-title uppercase tracking-widest text-[#8C6314]">
                  മംഗളകരമായ ക്ഷണം
                </span>
                <NilavilakkuIcon className="w-4 h-4 text-[#B88924]" />
              </div>
              <p className="font-malayalam text-xs sm:text-sm text-[#664C35] leading-relaxed italic bg-[#FBF8F2] p-3 rounded-xl border border-[#D4AF37]/20">
                “{weddingData.invitationMessage.malayalamSnippet}”
              </p>
            </div>

            {/* Closing blessing */}
            <p className="font-serif-body italic text-xs sm:text-sm text-[#8C6314] pt-2">
              {weddingData.invitationMessage.closingBlessing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
