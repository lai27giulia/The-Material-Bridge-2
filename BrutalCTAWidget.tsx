"use client";

import { useAudio } from "@/context/AudioContext";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT, LINKEDIN_PROFILE } from "@/lib/content";
import { MessageCircle } from "lucide-react";

/**
 * BrutalCTAWidget Component - "The Hook"
 * 
 * Fixed position corner widget that encourages LinkedIn connection.
 * Features:
 * - Fixed position (bottom-right by default)
 * - Blink animation to draw attention
 * - Brutal styling (thick border, hard shadow)
 * - Audio feedback on click
 * - Bilingual messaging
 * - Smooth scroll to top on click
 * - Mobile responsive positioning
 * 
 * Per il Blueprint:
 * "Box fisso in basso a destra (o sinistra) con bordo spesso e animazione 
 * 'blink' o 'glitch'."
 * 
 * User Journey:
 * User scrolls → Sees blinking CTA widget → Clicks → Opens LinkedIn in new tab
 */

export default function BrutalCTAWidget() {
  const { t } = useLanguage();
  const { playSound } = useAudio();
  const ctaData = CONTENT.cta_widget;

  const handleCTAClick = () => {
    // Play audio feedback
    playSound("/assets/sounds/click-metallic.mp3");

    // Smooth scroll to top (optional: shows they should connect)
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Open LinkedIn in new tab after a slight delay
    setTimeout(() => {
      window.open(LINKEDIN_PROFILE, "_blank", "noopener,noreferrer");
    }, 300);
  };

  return (
    <>
      {/* Fixed CTA Widget */}
      <div
        className={`
          fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
          w-auto pointer-events-auto
        `}
        role="region"
        aria-label="LinkedIn connection call-to-action"
      >
        <button
          onClick={handleCTAClick}
          className={`
            flex flex-col items-center justify-center
            px-4 md:px-6 py-4 md:py-6 min-w-max
            bg-brutalist-safety text-black
            border-4 md:border-brutal border-black
            font-black text-sm md:text-base
            shadow-brutal hover:shadow-brutal-lg
            transition-all duration-200
            animate-blink
            hover:animate-none
            active:transform active:translate-y-1 active:shadow-none
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
            gap-2
            cursor-pointer
          `}
          aria-label={t(ctaData.text)}
          title={t(ctaData.subtext)}
        >
          {/* Icon */}
          <MessageCircle size={20} strokeWidth={3} />

          {/* Text */}
          <span className="text-center leading-tight">{t(ctaData.text)}</span>
        </button>
      </div>

      {/* Accessibility: Hidden description */}
      <div className="sr-only">
        {t(ctaData.subtext)}. {t({ es: "Se abre en una nueva pestaña", en: "Opens in a new tab" })}
      </div>
    </>
  );
}
