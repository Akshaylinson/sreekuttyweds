import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { WeddingEmblem, GoldDivider } from './DecorativeElements';
import { X, MessageCircle, Copy, Check, Calendar, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareText = `🕊️ *Wedding Invitation* 🕊️\n\nTogether with our families, we cordially invite you to the wedding of\n*${weddingData.brideName} & ${weddingData.groomName}*\n\n📅 *Date:* Sunday, 13 September 2026 (${weddingData.traditionalDate})\n⏰ *Muhurtham:* ${weddingData.ceremony.muhurtham}\n📍 *Ceremony:* ${weddingData.ceremony.venueName}, ${weddingData.ceremony.subVenue}\n🎉 *Reception:* ${weddingData.reception.venueName}\n\n👉 Open the interactive digital invitation here:\n${currentUrl}`;

  const handleWhatsAppShare = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${weddingData.brideName} & ${weddingData.groomName} — Wedding Invitation`,
          text: `Together with our families, we invite you to celebrate the wedding of ${weddingData.brideName} & ${weddingData.groomName} on Sunday, 13 September 2026.`,
          url: currentUrl,
        });
      } catch {
        // Share cancelled
      }
    } else {
      handleWhatsAppShare();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#120B07]/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-2xl text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#694F3B] hover:bg-[#EFE8DA] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <WeddingEmblem className="w-12 h-12 text-[#B88924] mx-auto mb-2" />
          
          <h3 className="font-serif-title text-xl font-bold text-[#2E1C11]">
            Share The Invitation
          </h3>
          
          <p className="font-serif-body text-xs text-[#70523C] mt-1">
            Share {weddingData.brideName} & {weddingData.groomName}'s digital invitation card with family and friends on WhatsApp.
          </p>

          <GoldDivider className="my-4" />

          {/* Invitation Preview Badge */}
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/30 text-left my-4 shadow-xs">
            <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#B88924] font-semibold block">
              WhatsApp Link Preview
            </span>
            <h4 className="font-serif-title text-sm font-bold text-[#2D1B10] mt-0.5">
              {weddingData.brideName} & {weddingData.groomName} — Wedding Invitation
            </h4>
            <p className="text-xs text-[#7A5B45] font-serif-body mt-1">
              13 September 2026 • Chengaloor Melchurath Temple
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <button
              onClick={handleWhatsAppShare}
              className="w-full py-3 px-5 rounded-full bg-[#25D366] text-white font-serif-title text-xs uppercase tracking-widest font-semibold hover:bg-[#20BD5A] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>

            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                onClick={handleNativeShare}
                className="w-full py-2.5 px-5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/40 text-[#4A3222] font-serif-title text-xs uppercase tracking-widest font-semibold hover:bg-[#EFE8DA] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#B88924]" />
                <span>More Share Options</span>
              </button>
            )}

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-5 rounded-full bg-[#FFFDF9] border border-[#D4AF37]/30 text-[#4A3222] font-serif-title text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF5EC] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700">Link Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#B88924]" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
