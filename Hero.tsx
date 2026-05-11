"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/lib/content";

/**
 * Hero Component - "The Hammer"
 * 
 * Displays the main value proposition with brutalist typography.
 * Features:
 * - Bilingual headline (ES/EN)
 * - Giant typography (3rem+)
 * - Brutalist grid layout
 * - Hard shadows & thick borders
 * - Fully responsive
 * 
 * Layout:
 * ┌─────────────────────────────────────┐
 * │ TITLE                               │  ← Headline (role)
 * ├─────────────────────────────────────┤
 * │ SUBLINE                             │  ← Subline (focus area)
 * ├─────────────────────────────────────┤
 * │ UVP HAMMER (THE VALUE PROP)         │  ← Main message
 * └─────────────────────────────────────┘
 */
export default function Hero() {
  const { language, t } = useLanguage();
  const heroData = CONTENT.hero;

  return (
    <section
      className="w-full bg-brutalist-dirty border-4 border-black"
      aria-label="Hero section"
    >
      {/* Main Grid Container - Brutal 3-row layout */}
      <div className="w-full border-b-4 border-black">
        {/* ROW 1: TITLE (Role + Specialization) */}
        <div className="border-b-4 border-black p-6 md:p-8 lg:p-12 bg-white">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t(heroData.title)}
          </h1>
        </div>

        {/* ROW 2: SUBLINE (Focus Area) */}
        <div className="border-b-4 border-black p-6 md:p-8 lg:p-12 bg-brutalist-steel text-white">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t(heroData.subline)}
          </h2>
        </div>

        {/* ROW 3: UVP HAMMER (Main Value Proposition) */}
        <div className="border-b-4 border-black p-6 md:p-8 lg:p-12 bg-white">
          <p
            className="text-lg md:text-xl lg:text-2xl font-bold leading-relaxed max-w-4xl"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t(heroData.uvp_hammer)}
          </p>
        </div>

        {/* ROW 4: VISUAL DIVIDER & CTA HINT */}
        <div className="bg-black text-brutalist-safety p-4 md:p-6 font-mono text-sm md:text-base">
          <span className="inline-block animate-pulse">
            ▼ SCROLL PARA DESCUBRIR / SCROLL TO DISCOVER ▼
          </span>
        </div>
      </div>

      {/* Accessibility: Language indicator (hidden visually, visible in screen readers) */}
      <div className="sr-only">
        {language === "es"
          ? "Página en español. Use EN button to switch to English."
          : "Page in English. Use ES button to switch to Spanish."}
      </div>
    </section>
  );
}
