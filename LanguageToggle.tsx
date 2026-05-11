"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";

/**
 * LanguageToggle Component
 * 
 * Brutalist button group to switch between ES and EN.
 * Features:
 * - Two-button group (ES / EN)
 * - Active state styling
 * - Audio feedback on click
 * - Keyboard accessible (tab & enter)
 * - Mobile responsive
 * 
 * Visual:
 * ┌──────────────┬──────────────┐
 * │     ES       │     EN       │  ← Toggle buttons
 * └──────────────┴──────────────┘
 *  Active: safety orange background
 *  Inactive: white background
 */
export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { playSound } = useAudio();

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
    // Optional: Play audio feedback
    playSound("/assets/sounds/click-metallic.mp3");
  };

  return (
    <nav
      className="flex gap-0 border-4 border-black shadow-brutal"
      aria-label="Language selector"
    >
      {/* Spanish Button */}
      <button
        onClick={() => handleLanguageChange("es")}
        className={`
          flex-1 px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg
          border-r-4 border-black transition-all duration-150
          ${
            language === "es"
              ? "bg-brutalist-safety text-black"
              : "bg-white text-black hover:bg-brutalist-steel hover:text-white"
          }
          active:transform active:translate-y-1 active:shadow-none
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
        `}
        aria-pressed={language === "es"}
        aria-label="Switch to Spanish (Español)"
      >
        ES
      </button>

      {/* English Button */}
      <button
        onClick={() => handleLanguageChange("en")}
        className={`
          flex-1 px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg
          transition-all duration-150
          ${
            language === "en"
              ? "bg-brutalist-safety text-black"
              : "bg-white text-black hover:bg-brutalist-steel hover:text-white"
          }
          active:transform active:translate-y-1 active:shadow-none
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
        `}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>
    </nav>
  );
}
