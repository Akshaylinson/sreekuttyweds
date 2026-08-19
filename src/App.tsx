import React, { useState, useEffect } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { InvitationMessageSection } from './components/InvitationMessageSection';
import { DateRevealSection } from './components/DateRevealSection';
import { CountdownSection } from './components/CountdownSection';
import { CeremonySection } from './components/CeremonySection';
import { ReceptionSection } from './components/ReceptionSection';
import { CoupleStorySection } from './components/CoupleStorySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FamilySection } from './components/FamilySection';
import { FinalSection } from './components/FinalSection';
import { FloatingNav } from './components/FloatingNav';
import { FloatingPetals } from './components/FloatingPetals';
import { ShareModal } from './components/ShareModal';
import { weddingData } from './data/weddingData';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    // Check if user has URL hash or parameter
    if (window.location.hash) {
      const section = document.getElementById(window.location.hash.substring(1));
      if (section && hasOpened) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hasOpened]);

  const handleNavigate = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D231E] relative selection:bg-[#E2BA69]/30">
      {/* Interactive Cinematic Opening Envelope */}
      <OpeningEnvelope
        isOpen={hasOpened}
        onOpen={() => setHasOpened(true)}
      />

      {/* Floating ambient petals */}
      {hasOpened && <FloatingPetals />}

      {/* Main Wedding Invitation Body */}
      {hasOpened && (
        <div className="relative w-full max-w-lg mx-auto bg-[#FAF7F2] shadow-2xl min-h-screen pb-20 border-x border-[#D4AF37]/20">
          {/* Subtle Top Gold Banner Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#B38827] via-[#F5D77F] to-[#B38827]" />

          {/* 1. Hero Section */}
          <HeroSection
            onNavigate={handleNavigate}
            onShare={() => setIsShareOpen(true)}
          />

          {/* 2. Invitation Message from Family */}
          <InvitationMessageSection />

          {/* 3. Scratch to Reveal Date Section */}
          <DateRevealSection />

          {/* 4. Live Countdown */}
          <CountdownSection />

          {/* 5. Wedding Ceremony */}
          <CeremonySection />

          {/* 6. Wedding Reception */}
          <ReceptionSection />

          {/* 7. Couple Story / Introduction */}
          <CoupleStorySection />

          {/* 8. Photo Gallery */}
          <GallerySection />

          {/* 9. Location & Travel */}
          <LocationSection />

          {/* 10. Family Blessings & Host Details */}
          <FamilySection />

          {/* 11. Cinematic Closing & Guestbook */}
          <FinalSection />

          {/* Floating Navigation & Audio Controls */}
          <FloatingNav onShare={() => setIsShareOpen(true)} />

          {/* WhatsApp & Social Share Modal */}
          <ShareModal
            isOpen={isShareOpen}
            onClose={() => setIsShareOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
