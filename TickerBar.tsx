"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/lib/content";

/**
 * TickerBar Component
 * 
 * Scrolling text bar displaying key messages.
 * Features:
 * - Continuous horizontal scroll animation
 * - Bilingual text
 * - Bulletpoint separator
 * - Brutalist styling
 * - Accessible (aria-label)
 * - Mobile responsive (smaller text on mobile)
 * 
 * Per il Blueprint:
 * "The 'Ticker' Bar: Testo scorrevole nel footer o sotto la Hero 
 * con i tuoi 'Hammer' (ZERO AMBIGUITÀ • MASSIMA EFFICIENZA)."
 * 
 * Visual:
 * ┌─────────────────────────────────────────────┐
 * │ ZERO AMBIGUITÀ • MASSIMA EFFICIENZA • ...   │ ← Scrolling
 * └─────────────────────────────────────────────┘
 */

export default function TickerBar() {
  const { t } = useLanguage();
  const tickerText = t(CONTENT.footer.ticker);

  return (
    <div
      className="w-full overflow-hidden bg-black border-y-4 border-black py-3 md:py-4"
      role="status"
      aria-label="Scrolling message ticker"
    >
      {/* Scrolling Text Container */}
      <div className="relative">
        {/* Text - Repeats for seamless loop */}
        <div className="inline-flex gap-8 md:gap-12 animate-ticker whitespace-nowrap">
          {/* First copy */}
          <span className="text-brutalist-safety font-mono font-black text-sm md:text-base tracking-widest uppercase px-4">
            {tickerText}
          </span>

          {/* Second copy (for seamless loop) */}
          <span className="text-brutalist-safety font-mono font-black text-sm md:text-base tracking-widest uppercase px-4">
            {tickerText}
          </span>

          {/* Third copy (for very long screens) */}
          <span className="text-brutalist-safety font-mono font-black text-sm md:text-base tracking-widest uppercase px-4">
            {tickerText}
          </span>
        </div>
      </div>

      {/* Gradient Fade Effect (optional visual enhancement) */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
}
