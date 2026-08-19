import React from 'react';

// Royal Traditional Emblem with S & P Monogram & Sacred Lotus
export const WeddingEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = "w-20 h-20 text-[#D4AF37]",
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Outer Circular Filigree */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.8" />
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        
        {/* Cardinal Temple Petals */}
        <path d="M50 4 C53 14 62 14 58 20 C54 18 50 16 50 4Z" fill="currentColor" opacity="0.9" />
        <path d="M50 96 C53 86 62 86 58 80 C54 82 50 84 50 96Z" fill="currentColor" opacity="0.9" />
        <path d="M4 50 C14 53 14 62 20 58 C18 54 16 50 4 50Z" fill="currentColor" opacity="0.9" />
        <path d="M96 50 C86 53 86 62 80 58 C82 54 84 50 96 50Z" fill="currentColor" opacity="0.9" />

        {/* Sacred Lotus Base */}
        <path d="M35 68 C42 62 50 62 50 62 C50 62 58 62 65 68 C58 72 42 72 35 68 Z" fill="currentColor" opacity="0.4" />
        <path d="M40 65 C45 58 50 56 50 56 C50 56 55 58 60 65 C55 67 45 67 40 65 Z" fill="currentColor" opacity="0.7" />

        {/* Intertwined 'S' and 'P' Monogram */}
        <text
          x="44"
          y="49"
          fontFamily="Cinzel, Georgia, serif"
          fontSize="23"
          fontWeight="600"
          fill="currentColor"
          textAnchor="middle"
          className="select-none"
        >
          S
        </text>
        <text
          x="57"
          y="56"
          fontFamily="Cinzel, Georgia, serif"
          fontSize="22"
          fontWeight="600"
          fill="currentColor"
          textAnchor="middle"
          className="select-none"
        >
          P
        </text>
        <text
          x="50"
          y="51"
          fontFamily="Cinzel, Georgia, serif"
          fontSize="14"
          fontWeight="300"
          fill="currentColor"
          opacity="0.8"
          textAnchor="middle"
        >
          &
        </text>

        {/* Auspicious top flame / bindu */}
        <circle cx="50" cy="18" r="2" fill="currentColor" />
        <circle cx="50" cy="82" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

// Traditional Kerala Nilavilakku (Auspicious Bronze Lamp)
export const NilavilakkuIcon: React.FC<{ className?: string }> = ({
  className = "w-10 h-10 text-[#D4AF37]",
}) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Auspicious Glowing Flame */}
      <path
        d="M32 4 C34 9 37 14 37 18 C37 21 34.5 23 32 23 C29.5 23 27 21 27 18 C27 14 30 9 32 4 Z"
        fill="url(#flameGradient)"
        className="animate-pulse"
      />
      <circle cx="32" cy="17" r="2.5" fill="#FFE58F" />

      {/* Top Finial / Crown */}
      <path d="M30 23 L34 23 L33 26 L31 26 Z" fill="#D4AF37" />

      {/* Upper Oil Basin (Thattu) */}
      <ellipse cx="32" cy="27" rx="14" ry="3.5" fill="#B38827" stroke="#D4AF37" strokeWidth="1" />
      <path d="M19 28 C22 33 42 33 45 28 Z" fill="#D4AF37" />

      {/* Pillar Stem / Baluster */}
      <path d="M30 31 L30 46 L34 46 L34 31 Z" fill="#9E751D" />
      <circle cx="32" cy="38" r="3.5" fill="#D4AF37" />
      <ellipse cx="32" cy="46" rx="6" ry="1.8" fill="#B38827" />

      {/* Lower Tier / Base */}
      <path d="M26 47 L38 47 L41 55 L23 55 Z" fill="#B38827" />
      <ellipse cx="32" cy="55" rx="16" ry="4" fill="#D4AF37" stroke="#9E751D" strokeWidth="1" />
      <path d="M16 55 L18 58 L46 58 L48 55 Z" fill="#9E751D" />

      <defs>
        <radialGradient id="flameGradient" cx="32" cy="16" r="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="50%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
      </defs>
    </svg>
  );
};

// Luxury Gold Divider with Floral Centerpiece
export const GoldDivider: React.FC<{ className?: string; title?: string }> = ({
  className = "my-6",
  title,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
      
      {title ? (
        <span className="font-serif-title uppercase tracking-[0.25em] text-xs text-[#9E751D] px-2 whitespace-nowrap">
          {title}
        </span>
      ) : (
        <div className="flex items-center gap-1.5 text-[#D4AF37]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60"></span>
          <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60"></span>
        </div>
      )}

      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
    </div>
  );
};

// Corner Kasavu Floral Filigree for Cards
export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = "w-8 h-8 text-[#D4AF37]/50",
}) => {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${rotation} ${className}`}>
      <path d="M2 38 L2 6 C2 3.8 3.8 2 6 2 L38 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 6 L6 16 C6 16 16 16 16 6 Z" fill="currentColor" opacity="0.35" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      <circle cx="20" cy="5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
};
