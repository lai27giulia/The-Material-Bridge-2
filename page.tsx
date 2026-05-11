"use client";

import Hero from "@/components/Hero";
import LanguageToggle from "@/components/LanguageToggle";
import CaseStudy from "@/components/CaseStudy";
import TechnicalVault from "@/components/TechnicalVault";
import AudioEngine from "@/components/AudioEngine";
import Footer from "@/components/Footer";
import TickerBar from "@/components/TickerBar";
import BrutalCTAWidget from "@/components/BrutalCTAWidget";

/**
 * Main Portfolio Page - "The Material Bridge"
 * 
 * Complete assembly of all components in the correct order:
 * 
 * 1. Hero Section - Main headline & UVP
 * 2. Language Toggle - Navigation
 * 3. Case Study - Interactive transformation showcase
 * 4. Technical Vault - Scientific evidence (password-protected)
 * 5. Audio Engine - Sound feedback control
 * 6. Footer - Privacy & links
 * 7. Ticker Bar - Scrolling message
 * 8. CTA Widget - Fixed LinkedIn call-to-action
 * 
 * All components are:
 * - Fully responsive (mobile-first)
 * - Brutalist designed (4px borders, hard shadows)
 * - Bilingual (ES/EN)
 * - Accessible (ARIA labels, keyboard nav)
 * - Privacy-first (zero cookies)
 */

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="w-full bg-brutalist-dirty">
        {/* Hero Section - "The Hammer" */}
        <Hero />

        {/* Language Toggle Navigation */}
        <div className="sticky top-0 z-40 w-full bg-brutalist-dirty border-b-4 border-black p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <LanguageToggle />
          </div>
        </div>

        {/* Case Study - "The Transformation" */}
        <CaseStudy />

        {/* Technical Vault - "Deep Dive" */}
        <TechnicalVault />

        {/* Audio Engine */}
        <AudioEngine />

        {/* Footer with Colophon */}
        <Footer />

        {/* Ticker Bar */}
        <TickerBar />
      </main>

      {/* Fixed CTA Widget - "The Hook" */}
      <BrutalCTAWidget />
    </>
  );
}
