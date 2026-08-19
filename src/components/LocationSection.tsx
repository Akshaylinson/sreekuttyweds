import React, { useState } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, NilavilakkuIcon } from './DecorativeElements';
import { MapPin, Navigation, ExternalLink, Church, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ceremony' | 'reception'>('ceremony');

  return (
    <section id="location" className="py-16 px-4 sm:px-6 relative bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/35 text-[#8C6314] text-xs font-serif-title uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#B88924]" />
            <span>Venue & Directions</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2F2117] font-semibold tracking-wide">
            Getting to the Venues
          </h2>
          
          <GoldDivider className="my-3" />
          <p className="font-serif-body italic text-sm text-[#70523C] max-w-sm mx-auto">
            Easy navigation to the auspicious temple ceremony and celebratory reception auditorium.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div className="inline-flex p-1.5 rounded-full bg-[#EFE8DA] border border-[#D4AF37]/30 my-6 shadow-inner">
          <button
            onClick={() => setActiveTab('ceremony')}
            className={`px-5 py-2 rounded-full font-serif-title text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              activeTab === 'ceremony'
                ? 'bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-white shadow-md'
                : 'text-[#694F3B] hover:text-[#2D1B10]'
            }`}
          >
            1. Temple Ceremony
          </button>

          <button
            onClick={() => setActiveTab('reception')}
            className={`px-5 py-2 rounded-full font-serif-title text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              activeTab === 'reception'
                ? 'bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-white shadow-md'
                : 'text-[#694F3B] hover:text-[#2D1B10]'
            }`}
          >
            2. Reception Feast
          </button>
        </div>

        {/* Active Venue Details Card */}
        <div className="mt-2">
          {activeTab === 'ceremony' ? (
            <motion.div
              key="ceremony-tab"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/35 text-left"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-serif-title uppercase tracking-widest text-[#B88924] font-semibold">
                    Ceremony Venue
                  </span>
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2D1B10] mt-1">
                    {weddingData.ceremony.venueName}
                  </h3>
                  <p className="font-serif-title text-sm text-[#8C6314] font-medium">
                    {weddingData.ceremony.subVenue}
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF1DF] border border-[#D4AF37]/40 shrink-0">
                  <NilavilakkuIcon className="w-6 h-6 text-[#B88924]" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-2 text-sm font-serif-body text-[#5C402E]">
                <p>
                  <strong className="font-serif-title text-xs uppercase tracking-wider text-[#2D1B10] block">Timings:</strong>
                  8:45 AM – 9:30 AM (Muhurtham)
                </p>
                <p>
                  <strong className="font-serif-title text-xs uppercase tracking-wider text-[#2D1B10] block">Address:</strong>
                  {weddingData.ceremony.fullAddress}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={weddingData.ceremony.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-white font-serif-title text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reception-tab"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/35 text-left"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-serif-title uppercase tracking-widest text-[#B88924] font-semibold">
                    Reception Venue
                  </span>
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2D1B10] mt-1">
                    {weddingData.reception.venueName}
                  </h3>
                  <p className="font-serif-title text-sm text-[#8C6314] font-medium">
                    Celebratory Sadhya Feast
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF1DF] border border-[#D4AF37]/40 shrink-0">
                  <Sparkles className="w-6 h-6 text-[#B88924]" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-2 text-sm font-serif-body text-[#5C402E]">
                <p>
                  <strong className="font-serif-title text-xs uppercase tracking-wider text-[#2D1B10] block">Timings:</strong>
                  Following the Temple Muhurtham
                </p>
                <p>
                  <strong className="font-serif-title text-xs uppercase tracking-wider text-[#2D1B10] block">Address:</strong>
                  {weddingData.reception.fullAddress}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={weddingData.reception.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-white font-serif-title text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
