"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CONTENT } from "@/lib/content";
import type { Hotspot } from "@/types";

/**
 * CaseStudy Component - "The Transformation"
 * 
 * Interactive before/after visualization with clickable hotspots.
 * Features:
 * - Image with 3 hotspot indicators
 * - Click to reveal problem/solution
 * - Smooth transitions
 * - Audio feedback
 * - Bilingual
 * - Fully responsive
 * 
 * User Flow:
 * 1. User sees image with 3 pulsing hotspot indicators
 * 2. User clicks on a hotspot (Technical, Process, Human)
 * 3. Solution card slides in with animation
 * 4. User can read the problem → solution narrative
 */

interface HotspotUIState {
  activeId: string | null;
  hoveredId: string | null;
}

export default function CaseStudy() {
  const { t } = useLanguage();
  const { playSound } = useAudio();
  const [uiState, setUiState] = useState<HotspotUIState>({
    activeId: null,
    hoveredId: null,
  });

  const caseStudyData = CONTENT.caseStudy;
  const hotspots = caseStudyData.hotspots as Hotspot[];

  const handleHotspotClick = (hotspotId: string) => {
    setUiState((prev) => ({
      ...prev,
      activeId: prev.activeId === hotspotId ? null : hotspotId,
    }));
    playSound("/assets/sounds/click-metallic.mp3");
  };

  const handleHotspotHover = (hotspotId: string | null) => {
    setUiState((prev) => ({
      ...prev,
      hoveredId: hotspotId,
    }));
    if (hotspotId) {
      playSound("/assets/sounds/hydraulic-soft.mp3");
    }
  };

  const activeHotspot = hotspots.find((h) => h.id === uiState.activeId);

  return (
    <section
      className="w-full border-4 border-black bg-brutalist-dirty"
      aria-label="Interactive case study"
    >
      {/* Section Header */}
      <div className="border-b-4 border-black p-6 md:p-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-black mb-2">
          {t(caseStudyData.title)}
        </h2>
        <p className="text-lg font-bold text-brutalist-steel">
          {t(caseStudyData.subtitle)}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b-4 border-black">
        {/* LEFT: Image with Hotspots */}
        <div className="relative border-r-4 border-black bg-black min-h-96 lg:min-h-full flex items-center justify-center p-4 md:p-6 lg:p-8 overflow-hidden">
          {/* Placeholder Image Area */}
          <div className="relative w-full aspect-square md:aspect-auto bg-gradient-to-br from-brutalist-steel to-black rounded-none flex items-center justify-center text-center">
            {/* Image would go here - using placeholder */}
            <div className="text-center">
              <p className="text-brutalist-safety font-mono text-sm md:text-base font-bold mb-4">
                INDUSTRIAL SETUP VISUALIZATION
              </p>
              <p className="text-brutalist-dirty font-mono text-xs md:text-sm opacity-60">
                [Structural welding framework image]
              </p>
              <p className="text-brutalist-dirty font-mono text-xs md:text-sm opacity-40 mt-2">
                {caseStudyData.image_ref}
              </p>
            </div>

            {/* Hotspot Indicators */}
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => handleHotspotClick(hotspot.id)}
                onMouseEnter={() => handleHotspotHover(hotspot.id)}
                onMouseLeave={() => handleHotspotHover(null)}
                className={`
                  absolute w-12 h-12 md:w-16 md:h-16 rounded-none border-4 border-brutalist-safety
                  transition-all duration-200 cursor-pointer group
                  ${
                    uiState.activeId === hotspot.id
                      ? "bg-brutalist-safety scale-110 shadow-brutal-lg"
                      : uiState.hoveredId === hotspot.id
                        ? "bg-brutalist-safety bg-opacity-75 scale-105 shadow-brutal"
                        : "bg-brutalist-safety bg-opacity-50 hover:bg-opacity-75"
                  }
                  ${uiState.activeId !== hotspot.id && "animate-pulse"}
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                `}
                style={{
                  left: hotspot.x,
                  top: hotspot.y,
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={`${t(hotspot.label)} hotspot - Click to reveal solution`}
                aria-pressed={uiState.activeId === hotspot.id}
              >
                {/* Inner dot */}
                <div className="absolute inset-2 border-2 border-black flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Solution Details */}
        <div className="p-6 md:p-8 bg-white border-b-4 border-black md:border-b-0">
          <h3 className="text-xl md:text-2xl font-black mb-6">
            {t({ es: "Descubre los 3 Puntos", en: "Discover the 3 Points" })}
          </h3>

          {/* Hotspot List */}
          <div className="space-y-3 mb-6">
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => handleHotspotClick(hotspot.id)}
                className={`
                  w-full text-left px-4 py-3 border-4 border-black transition-all duration-200
                  font-bold text-base
                  ${
                    uiState.activeId === hotspot.id
                      ? "bg-brutalist-safety text-black shadow-brutal"
                      : "bg-white text-black hover:bg-brutalist-steel hover:text-white"
                  }
                  active:transform active:translate-y-1
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                `}
                aria-expanded={uiState.activeId === hotspot.id}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 border-2 border-current"></div>
                  <span>{t(hotspot.label)}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Solution Reveal */}
          {activeHotspot && (
            <div
              className="border-4 border-black p-6 bg-white shadow-brutal"
              role="region"
              aria-live="polite"
              aria-label={`Solution for ${t(activeHotspot.label)}`}
            >
              <div className="space-y-4">
                {/* Problem */}
                <div className="border-b-4 border-black pb-4">
                  <h4 className="text-sm font-mono font-bold text-brutalist-steel mb-2 uppercase">
                    {t({ es: "Problema", en: "Problem" })}
                  </h4>
                  <p className="text-base font-bold leading-relaxed">
                    {t(activeHotspot.problem)}
                  </p>
                </div>

                {/* Solution */}
                <div className="pt-4">
                  <h4 className="text-sm font-mono font-bold text-brutalist-safety mb-2 uppercase">
                    {t({ es: "Solución", en: "Solution" })}
                  </h4>
                  <p className="text-base font-bold leading-relaxed">
                    {t(activeHotspot.solution)}
                  </p>
                </div>
              </div>

              {/* Type Badge */}
              <div className="mt-4 pt-4 border-t-4 border-black">
                <span
                  className={`
                    inline-block px-3 py-1 font-mono text-xs font-bold uppercase
                    border-2 border-black
                    ${
                      activeHotspot.type === "metallurgical"
                        ? "bg-brutalist-steel text-white"
                        : activeHotspot.type === "workflow"
                          ? "bg-black text-brutalist-safety"
                          : "bg-brutalist-safety text-black"
                    }
                  `}
                >
                  {activeHotspot.type}
                </span>
              </div>
            </div>
          )}

          {!activeHotspot && (
            <div className="border-4 border-black border-dashed p-6 text-center text-brutalist-steel font-mono">
              <p className="text-sm">
                {t({
                  es: "Haz clic en un punto para revelar la solución",
                  en: "Click a point to reveal the solution",
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Stacked View Hint */}
      <div className="lg:hidden border-t-4 border-black p-4 bg-black text-brutalist-safety font-mono text-xs text-center">
        <span className="animate-pulse">
          {t({
            es: "Hotspots en la imagen. Detalles a la derecha.",
            en: "Hotspots above. Details below.",
          })}
        </span>
      </div>
    </section>
  );
}
