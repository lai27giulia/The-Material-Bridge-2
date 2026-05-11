"use client";

import { useAudio } from "@/context/AudioContext";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, VolumeX } from "lucide-react";

/**
 * AudioEngine Component
 * 
 * Master audio control with mute toggle and volume slider.
 * Features:
 * - Mute/unmute toggle
 * - Volume slider (0-100%)
 * - Status indicator (muted/active)
 * - Persistent state (localStorage)
 * - Audio description
 * - Keyboard accessible
 * 
 * Visual:
 * ┌─────────────────────────────┐
 * │ 🔊 AUDIO ENGINE             │
 * │ Status: MUTED / ACTIVE      │
 * │                              │
 * │ [Toggle] [Volume Slider]    │
 * └─────────────────────────────┘
 */

export default function AudioEngine() {
  const { isMuted, volume, toggleMute, setVolume } = useAudio();
  const { t } = useLanguage();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const volumePercentage = Math.round(volume * 100);

  return (
    <section
      className="w-full border-4 border-black bg-brutalist-dirty"
      aria-label="Audio engine control"
    >
      {/* Section Header */}
      <div className="border-b-4 border-black p-6 md:p-8 bg-white">
        <div className="flex items-center gap-3 mb-2">
          {isMuted ? (
            <VolumeX size={28} strokeWidth={3} />
          ) : (
            <Volume2 size={28} strokeWidth={3} />
          )}
          <h2 className="text-3xl md:text-4xl font-black">
            {t({
              es: "Motor de Audio Industrial",
              en: "Industrial Audio Engine",
            })}
          </h2>
        </div>
        <p className="text-lg font-bold text-brutalist-steel">
          {t({
            es: "Control de retroalimentación sonora atmosférica",
            en: "Atmospheric sound feedback control",
          })}
        </p>
      </div>

      {/* Main Content */}
      <div className="border-b-4 border-black p-6 md:p-8 bg-white">
        {/* Status Card */}
        <div className="mb-8 border-4 border-black p-6 bg-brutalist-dirty">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-black">
              {t({
                es: "Estado",
                en: "Status",
              })}
            </h3>
            <span
              className={`
                px-4 py-2 font-mono font-bold text-sm border-2 border-black
                ${
                  isMuted
                    ? "bg-black text-brutalist-safety"
                    : "bg-brutalist-safety text-black"
                }
              `}
            >
              {isMuted
                ? t({ es: "SILENCIADO", en: "MUTED" })
                : t({ es: "ACTIVO", en: "ACTIVE" })}
            </span>
          </div>

          <p className="font-bold leading-relaxed">
            {isMuted
              ? t({
                  es: "Los sonidos de retroalimentación están desactivados. El sitio seguirá siendo totalmente funcional sin audio.",
                  en: "Feedback sounds are disabled. The site remains fully functional without audio.",
                })
              : t({
                  es: "Los sonidos de retroalimentación están activados. Escucharás clics metálicos y zumbidos industriales en la interacción.",
                  en: "Feedback sounds are enabled. You'll hear metallic clicks and industrial hums on interaction.",
                })}
          </p>
        </div>

        {/* Mute Toggle Button */}
        <div className="mb-8">
          <button
            onClick={toggleMute}
            className={`
              w-full px-6 py-4 md:py-6 font-black text-lg md:text-xl
              border-4 border-black transition-all duration-200
              shadow-brutal hover:shadow-brutal-lg
              active:transform active:translate-y-1 active:shadow-none
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              flex items-center justify-center gap-3
              ${
                isMuted
                  ? "bg-black text-brutalist-safety hover:bg-brutalist-steel"
                  : "bg-brutalist-safety text-black hover:bg-brutalist-steel hover:text-white"
              }
            `}
            aria-pressed={!isMuted}
          >
            {isMuted ? (
              <>
                <VolumeX size={24} strokeWidth={3} />
                <span>{t({ es: "ACTIVAR AUDIO", en: "ENABLE AUDIO" })}</span>
              </>
            ) : (
              <>
                <Volume2 size={24} strokeWidth={3} />
                <span>{t({ es: "DESACTIVAR AUDIO", en: "DISABLE AUDIO" })}</span>
              </>
            )}
          </button>
        </div>

        {/* Volume Slider */}
        {!isMuted && (
          <div className="mb-8 border-4 border-black p-6 bg-brutalist-dirty">
            <div className="flex items-center justify-between mb-4">
              <label
                htmlFor="volume-slider"
                className="text-lg font-black"
              >
                {t({
                  es: "Volumen",
                  en: "Volume",
                })}
              </label>
              <span className="font-mono font-bold text-brutalist-safety">
                {volumePercentage}%
              </span>
            </div>

            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className={`
                w-full h-4 bg-black border-4 border-black rounded-none
                appearance-none cursor-pointer accent-brutalist-safety
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              `}
              aria-label="Volume control"
              aria-valuenow={volumePercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />

            {/* Volume Indicator */}
            <div className="mt-4 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`
                    flex-1 h-2 border-2 border-black
                    ${
                      i < Math.ceil(volume * 5)
                        ? "bg-brutalist-safety"
                        : "bg-white"
                    }
                  `}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Information Box */}
        <div className="border-4 border-black border-dashed p-6 bg-white">
          <h4 className="font-mono font-bold text-sm uppercase mb-3 text-brutalist-steel">
            {t({
              es: "Información de Audio",
              en: "Audio Information",
            })}
          </h4>
          <ul className="space-y-2 text-sm md:text-base font-bold leading-relaxed">
            <li>
              • <span className="text-brutalist-safety">Click Metálico:</span>{" "}
              {t({
                es: "Se reproduce al hacer clic en botones",
                en: "Plays on button clicks",
              })}
            </li>
            <li>
              • <span className="text-brutalist-safety">Zumbido Hidráulico:</span>{" "}
              {t({
                es: "Se reproduce al pasar el ratón sobre elementos interactivos",
                en: "Plays on hover over interactive elements",
              })}
            </li>
            <li>
              •{" "}
              <span className="text-brutalist-safety">
                {t({
                  es: "Ambiente Industrial:",
                  en: "Industrial Ambient:",
                })}
              </span>{" "}
              {t({
                es: "Disponible bajo demanda",
                en: "Available on demand",
              })}
            </li>
          </ul>

          {/* Privacy Note */}
          <div className="mt-4 pt-4 border-t-4 border-black">
            <p className="text-xs md:text-sm font-bold text-brutalist-steel">
              {t({
                es: "Los sonidos no se transmiten a servidores. Se reproducen localmente en tu navegador.",
                en: "Sounds are not transmitted to servers. They play locally in your browser.",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t-4 border-black p-4 md:p-6 bg-black text-brutalist-safety font-mono text-sm">
        <p>
          {t({
            es: "💡 Sugerencia: Activa el audio para una experiencia más inmersiva.",
            en: "💡 Tip: Enable audio for a more immersive experience.",
          })}
        </p>
      </div>
    </section>
  );
}
