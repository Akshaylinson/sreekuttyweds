import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './DecorativeElements';
import { Clock, Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const weddingTime = new Date(weddingData.weddingDateISO).getTime();
    const now = new Date().getTime();
    const difference = weddingTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-14 px-4 relative bg-[#F8F3EA] border-y border-[#D4AF37]/20">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/40 text-[#8C6314] text-xs font-serif-title uppercase tracking-widest mb-2">
            <Clock className="w-3.5 h-3.5 text-[#B88924]" />
            <span>Counting The Blessed Moments</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#2F2117] font-semibold tracking-wide">
            Until We Say “Forever”
          </h2>
          
          <GoldDivider className="my-3" />
        </motion.div>

        {/* Countdown Display */}
        {timeLeft.isPast ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/40 shadow-xl my-6"
          >
            <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 animate-pulse" />
            <h3 className="font-serif-title text-2xl text-[#2B1B12] font-semibold">
              Today is the beginning of their beautiful journey.
            </h3>
            <p className="font-serif-body text-sm text-[#7A5B45] mt-2 italic">
              May their lives be filled with everlasting joy, love, and divine blessings.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 my-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative bg-gradient-to-b from-[#FFFDF9] to-[#F7F1E6] p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/35 shadow-md flex flex-col items-center justify-center min-h-[95px] sm:min-h-[110px]"
              >
                {/* Subtle top gold accent bar */}
                <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
                
                <span className="font-serif-title text-2xl sm:text-4xl font-bold text-[#2B1A0E] tracking-tight">
                  {String(item.value).padStart(2, '0')}
                </span>
                
                <span className="text-[10px] sm:text-xs font-serif-title uppercase tracking-[0.2em] text-[#8C6314] font-medium mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <p className="font-serif-body text-xs sm:text-sm text-[#70523C] tracking-wide">
          {weddingData.weddingDateFormatted} • {weddingData.weddingDay} • {weddingData.ceremony.muhurtham}
        </p>
      </div>
    </section>
  );
};
