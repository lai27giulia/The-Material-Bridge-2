"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CONTENT } from "@/lib/content";
import { Lock, Unlock } from "lucide-react";

/**
 * TechnicalVault Component - "Deep Dive"
 * 
 * Password-protected section revealing technical/scientific evidence.
 * Features:
 * - Password input (not cryptographic, psychological filter)
 * - Access code: "STAINLESS"
 * - Reveals technical datasets (micrographs, graphs)
 * - Scientific evidence visualization
 * - Bilingual
 * - Audio feedback on unlock
 * 
 * Purpose:
 * Rewards engaged users (technical team, managers) with scientific proof
 * while filtering casual browsers. Creates a sense of exclusivity.
 * 
 * User Flow:
 * 1. User sees locked vault
 * 2. Reads "STAINLESS" hint in content
 * 3. Types password
 * 4. Unlocks and sees scientific evidence
 */

interface VaultState {
  isUnlocked: boolean;
  passwordInput: string;
  showError: boolean;
  attemptCount: number;
}

export default function TechnicalVault() {
  const { t } = useLanguage();
  const { playSound } = useAudio();
  const [vaultState, setVaultState] = useState<VaultState>({
    isUnlocked: false,
    passwordInput: "",
    showError: false,
    attemptCount: 0,
  });

  const vaultData = CONTENT.technicalVault;
  const correctPassword = vaultData.access_code;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVaultState((prev) => ({
      ...prev,
      passwordInput: e.target.value,
      showError: false, // Clear error on new input
    }));
  };

  const handleUnlock = () => {
    if (vaultState.passwordInput === correctPassword) {
      setVaultState((prev) => ({
        ...prev,
        isUnlocked: true,
        showError: false,
      }));
      playSound("/assets/sounds/click-metallic.mp3");
    } else {
      setVaultState((prev) => ({
        ...prev,
        showError: true,
        attemptCount: prev.attemptCount + 1,
      }));
      playSound("/assets/sounds/hydraulic-soft.mp3");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUnlock();
    }
  };

  const handleReset = () => {
    setVaultState({
      isUnlocked: false,
      passwordInput: "",
      showError: false,
      attemptCount: 0,
    });
  };

  return (
    <section
      className="w-full border-4 border-black bg-brutalist-dirty"
      aria-label="Technical vault section"
    >
      {/* Section Header */}
      <div className="border-b-4 border-black p-6 md:p-8 bg-black text-brutalist-safety">
        <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center gap-3">
          <Lock size={32} strokeWidth={3} />
          {t(vaultData.title)}
        </h2>
        <p className="text-base font-bold opacity-90">{t(vaultData.subtitle)}</p>
      </div>

      {!vaultState.isUnlocked ? (
        /* LOCKED STATE */
        <div className="border-b-4 border-black p-6 md:p-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="border-4 border-black p-8 md:p-12 text-center bg-brutalist-dirty">
              {/* Lock Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 md:w-32 md:h-32 border-4 border-black flex items-center justify-center bg-white">
                  <Lock size={64} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4">
                {t({
                  es: "Bóveda Técnica Bloqueada",
                  en: "Technical Vault Locked",
                })}
              </h3>

              <p className="text-lg font-bold mb-6 leading-relaxed">
                {t({
                  es: "Esta sección contiene análisis microestructurales, gráficos de dureza y evidencia científica.",
                  en: "This section contains microstructural analysis, hardness graphs, and scientific evidence.",
                })}
              </p>

              <p className="text-base font-bold text-brutalist-steel mb-8">
                {t({
                  es: "Ingresa el código de acceso (pista: material de referencia en metalurgia):",
                  en: "Enter the access code (hint: reference material in metallurgy):",
                })}
              </p>

              {/* Password Input */}
              <div className="mb-6">
                <input
                  type="password"
                  value={vaultState.passwordInput}
                  onChange={handlePasswordChange}
                  onKeyPress={handleKeyPress}
                  placeholder={t({
                    es: "Código de acceso",
                    en: "Access code",
                  })}
                  className={`
                    w-full px-4 py-3 md:py-4 font-mono text-base md:text-lg font-bold
                    border-4 border-black uppercase text-center tracking-widest
                    placeholder:text-brutalist-steel placeholder:opacity-50
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                    transition-all duration-200
                    ${
                      vaultState.showError
                        ? "bg-red-100 border-red-600"
                        : "bg-white"
                    }
                  `}
                  aria-label="Technical vault password"
                  disabled={vaultState.isUnlocked}
                />
              </div>

              {/* Error Message */}
              {vaultState.showError && (
                <div
                  className="mb-6 p-4 border-4 border-black bg-white text-black font-bold"
                  role="alert"
                >
                  {t({
                    es: "Código incorrecto. Intenta de nuevo.",
                    en: "Incorrect code. Try again.",
                  })}
                  {vaultState.attemptCount > 2 && (
                    <div className="mt-2 text-sm font-mono">
                      {t({
                        es: "💡 Pista: Busca en el contenido anterior...",
                        en: "💡 Hint: Look in the content above...",
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Unlock Button */}
              <button
                onClick={handleUnlock}
                disabled={vaultState.passwordInput.length === 0}
                className={`
                  w-full px-6 py-4 font-black text-lg
                  border-4 border-black transition-all duration-200
                  shadow-brutal hover:shadow-brutal-lg
                  active:transform active:translate-y-1 active:shadow-none
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    vaultState.passwordInput.length > 0
                      ? "bg-brutalist-safety text-black hover:bg-brutalist-steel hover:text-white"
                      : "bg-brutalist-steel text-white"
                  }
                `}
              >
                {t({
                  es: "DESBLOQUEAR BÓVEDA",
                  en: "UNLOCK VAULT",
                })}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* UNLOCKED STATE */
        <div className="p-6 md:p-8 bg-white">
          {/* Unlock Success Message */}
          <div className="mb-8 border-4 border-black p-6 bg-brutalist-safety">
            <div className="flex items-center gap-3 mb-2">
              <Unlock size={24} strokeWidth={3} />
              <h3 className="text-xl font-black">
                {t({
                  es: "¡Bóveda Desbloqueada!",
                  en: "Vault Unlocked!",
                })}
              </h3>
            </div>
            <p className="text-base font-bold">
              {t({
                es: "Acceso concedido a análisis técnico detallado.",
                en: "Access granted to detailed technical analysis.",
              })}
            </p>
          </div>

          {/* Datasets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {vaultData.datasets.map((dataset, index) => (
              <div
                key={index}
                className="border-4 border-black p-6 bg-brutalist-dirty"
              >
                {/* Dataset Header */}
                <h4 className="text-lg font-black mb-4 font-mono uppercase">
                  {dataset.title}
                </h4>

                {/* Dataset Image Placeholder */}
                <div className="mb-4 bg-black h-48 border-4 border-black flex items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brutalist-steel to-black opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-brutalist-safety font-mono text-sm font-bold mb-2">
                      {dataset.file_type === "graph"
                        ? "STRESS-STRAIN CURVE"
                        : "MICROGRAPH ANALYSIS"}
                    </p>
                    <p className="text-brutalist-dirty font-mono text-xs opacity-60">
                      {dataset.image_ref}
                    </p>
                  </div>
                </div>

                {/* Dataset Description */}
                <div className="border-t-4 border-black pt-4">
                  <p className="text-base font-bold leading-relaxed">
                    {t(dataset.description)}
                  </p>
                </div>

                {/* File Type Badge */}
                <div className="mt-4 pt-4 border-t-4 border-black">
                  <span
                    className={`
                      inline-block px-3 py-1 font-mono text-xs font-bold uppercase
                      border-2 border-black
                      ${
                        dataset.file_type === "graph"
                          ? "bg-brutalist-steel text-white"
                          : "bg-black text-brutalist-safety"
                      }
                    `}
                  >
                    {dataset.file_type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lock Button to Re-secure */}
          <button
            onClick={handleReset}
            className={`
              w-full px-6 py-4 font-black text-lg
              border-4 border-black transition-all duration-200
              shadow-brutal hover:shadow-brutal-lg
              active:transform active:translate-y-1 active:shadow-none
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              bg-black text-brutalist-safety hover:bg-brutalist-steel
            `}
          >
            {t({
              es: "CERRAR BÓVEDA",
              en: "LOCK VAULT",
            })}
          </button>

          {/* Note for Technical Users */}
          <div className="mt-6 p-4 border-4 border-black bg-white font-mono text-sm">
            <p className="font-bold mb-2">
              {t({
                es: "Nota Técnica:",
                en: "Technical Note:",
              })}
            </p>
            <p className="leading-relaxed">
              {t({
                es: "Los análisis se basan en metalografía óptica y pruebas de microdureza Vickers en la zona termicamente afectada (HAZ) de soldaduras estructurales.",
                en: "Analyses based on optical metallography and Vickers microhardness testing in the heat-affected zone (HAZ) of structural welds.",
              })}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
