import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './DecorativeElements';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = weddingData.gallery;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImageIndex(null);
    if (e.key === 'ArrowLeft') handlePrev(e as unknown as React.MouseEvent);
    if (e.key === 'ArrowRight') handleNext(e as unknown as React.MouseEvent);
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 relative bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/35 text-[#8C6314] text-xs font-serif-title uppercase tracking-widest mb-2">
            <Camera className="w-3.5 h-3.5 text-[#B88924]" />
            <span>Memories & Moments</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2F2117] font-semibold tracking-wide">
            Wedding Photo Gallery
          </h2>
          
          <GoldDivider className="my-3" />
          <p className="font-serif-body italic text-sm text-[#70523C] max-w-sm mx-auto">
            Capturing the joyous harmony and sacred traditions leading to our special day.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30 bg-[#FFFDF9] cursor-pointer"
            >
              <div className="aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with caption & expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/80 via-transparent to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#FAF7F2]">
                <div className="flex items-center justify-between">
                  <p className="font-serif-body text-xs sm:text-sm italic drop-shadow-md pr-2">
                    {item.caption}
                  </p>
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              className="fixed inset-0 z-50 bg-[#120B07]/95 backdrop-blur-md flex items-center justify-center p-4 focus:outline-hidden select-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <motion.div
                key={selectedImageIndex}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl max-h-[85vh] flex flex-col items-center justify-center"
              >
                <img
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].alt}
                  className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-[#D4AF37]/30"
                />
                
                <div className="mt-3 text-center text-[#FAF7F2] max-w-md px-4">
                  <p className="font-serif-body text-sm sm:text-base italic text-[#F5E08B]">
                    {images[selectedImageIndex].caption}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {selectedImageIndex + 1} of {images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
