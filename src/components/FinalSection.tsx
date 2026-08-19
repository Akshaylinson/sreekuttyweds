import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { WeddingEmblem, GoldDivider, NilavilakkuIcon } from './DecorativeElements';
import { Heart, Send, Sparkles, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GuestWish {
  id: string;
  name: string;
  message: string;
  date: string;
}

export const FinalSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    const saved = localStorage.getItem('wedding_guest_wishes');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [
      {
        id: '1',
        name: 'Family & Friends',
        message: 'Wishing Sreekutty and Pranav a lifetime of boundless joy, love, and sacred companionship! Looking forward to 13 September 2026.',
        date: 'Today'
      }
    ];
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('wedding_guest_wishes', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const newWish: GuestWish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: 'Just now'
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setIsSubmitting(false);
    setSubmittedSuccess(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FF8B6B', '#F5E08B', '#FFE58F'],
    });

    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  const bgImage = weddingData.gallery[0]?.url;

  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-[#1E140E] text-[#FFFDF9]">
      {/* Background with couple photo and dark gold vignette */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140C08] via-[#1E140E]/90 to-[#1E140E] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        {/* Top Sacred Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <WeddingEmblem className="w-16 h-16 text-[#D4AF37] mb-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-wider text-[#FAF5EB]">
            {weddingData.brideName} & {weddingData.groomName}
          </h2>

          <div className="my-4">
            <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <NilavilakkuIcon className="w-4 h-4 text-[#D4AF37]" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>

          <p className="font-serif-title text-base sm:text-lg text-[#F5E08B] font-medium tracking-wide">
            Thank you for being part of our special day.
          </p>

          <p className="font-serif-body italic text-sm text-stone-300 mt-2 max-w-md mx-auto leading-relaxed">
            “Your presence, heartfelt prayers, and blessings mean the world to us as we step into this beautiful new chapter.”
          </p>
        </motion.div>

        {/* Guest Blessings & Wishes Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-12 bg-[#281B13]/90 rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-2xl backdrop-blur-xs text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageSquareHeart className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif-title text-lg font-semibold text-[#FFFDF9]">
              Send Your Blessings & Wishes
            </h3>
          </div>

          <p className="font-serif-body text-xs text-stone-300 mb-4">
            Leave a loving message for Sreekutty & Pranav for their wedding day.
          </p>

          <form onSubmit={handleSubmitWish} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Your Name (e.g. Ramesh & Family)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[#1B110C] border border-[#D4AF37]/30 text-white placeholder-stone-400 text-sm focus:outline-hidden focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <textarea
                placeholder="Write your heartfelt blessing or congratulatory wish..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1B110C] border border-[#D4AF37]/30 text-white placeholder-stone-400 text-sm focus:outline-hidden focus:border-[#D4AF37] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#B38827] via-[#D4AF37] to-[#B38827] text-white font-serif-title text-xs uppercase tracking-widest font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Wedding Wish</span>
            </button>

            {submittedSuccess && (
              <p className="text-center text-xs text-[#81C784] font-medium animate-pulse mt-2">
                ✓ Thank you! Your warm blessing has been recorded.
              </p>
            )}
          </form>

          {/* List of recent wishes */}
          {wishes.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#D4AF37]/20 space-y-3 max-h-56 overflow-y-auto pr-1">
              {wishes.map((w) => (
                <div key={w.id} className="p-3 rounded-xl bg-[#1C120D] border border-[#D4AF37]/15">
                  <div className="flex items-center justify-between text-xs text-[#D4AF37] font-serif-title">
                    <span className="font-semibold">{w.name}</span>
                    <span className="text-[10px] text-stone-400">{w.date}</span>
                  </div>
                  <p className="font-serif-body text-xs text-stone-200 mt-1 italic">
                    "{w.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Footer Credit & Malayalam Greeting */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/20 text-center w-full">
          <p className="font-malayalam text-xs text-[#D4AF37] mb-1">
            ശുഭവിവാഹ മംഗളാശംസകൾ
          </p>
          <p className="font-serif-title text-[11px] uppercase tracking-[0.25em] text-stone-400">
            {weddingData.weddingDateFormatted} • {weddingData.ceremony.venueName}
          </p>
          <p className="text-[10px] text-stone-500 mt-2 font-serif-body">
            Crafted with love for Sreekutty & Pranav
          </p>
        </div>
      </div>
    </section>
  );
};
