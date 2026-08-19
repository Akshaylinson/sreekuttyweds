import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, WeddingEmblem } from './DecorativeElements';

export const CoupleStorySection: React.FC = () => {
  const storyImage = weddingData.gallery[1]?.url || weddingData.gallery[0]?.url;

  return (
    <section id="couple" className="py-16 px-4 sm:px-6 relative bg-[#FAF7F2]">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <WeddingEmblem className="w-12 h-12 text-[#B88924] mx-auto mb-2" />
          <p className="font-serif-title uppercase text-xs tracking-[0.25em] text-[#9E751D]">
            {weddingData.coupleStory.subheading}
          </p>
          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2F2117] font-semibold tracking-wide mt-1">
            {weddingData.brideName} & {weddingData.groomName}
          </h2>
          <GoldDivider className="my-3" />
        </motion.div>

        {/* Couple Image Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/35 my-6 group"
        >
          <img
            src={storyImage}
            alt="Sreekutty and Pranav"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 inset-x-0 p-4 text-center text-[#FFFDF9]">
            <p className="font-serif-body italic text-sm sm:text-base drop-shadow-md text-[#FAF7F2]">
              {weddingData.coupleStory.quote}
            </p>
          </div>
        </motion.div>

        {/* Couple Bio Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-6"
        >
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/30 shadow-sm">
            <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#B88924] font-semibold block">
              The Bride
            </span>
            <h3 className="font-serif-title text-xl font-bold text-[#2D1B10] mt-0.5">
              {weddingData.brideName}
            </h3>
            <p className="font-serif-body text-xs sm:text-sm text-[#694F3B] mt-2 italic leading-relaxed">
              {weddingData.coupleStory.brideBio}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/30 shadow-sm">
            <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#B88924] font-semibold block">
              The Groom
            </span>
            <h3 className="font-serif-title text-xl font-bold text-[#2D1B10] mt-0.5">
              {weddingData.groomName}
            </h3>
            <p className="font-serif-body text-xs sm:text-sm text-[#694F3B] mt-2 italic leading-relaxed">
              {weddingData.coupleStory.groomBio}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
