"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/lib/content";
import { Shield, Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component
 * 
 * Bottom section with:
 * - Privacy by Design statement
 * - Social links (GitHub, LinkedIn, Email)
 * - Colophon (tech stack info)
 * - Copyright notice
 * 
 * Features:
 * - Bilingual
 * - Brutalist styling
 * - Accessible links
 * - Technical credits
 */

export default function Footer() {
  const { t } = useLanguage();
  const footerData = CONTENT.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t-4 border-black bg-black text-brutalist-dirty"
      role="contentinfo"
    >
      {/* Privacy Statement */}
      <div className="border-b-4 border-brutalist-steel p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <Shield size={32} strokeWidth={2} className="text-brutalist-safety flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-black mb-2">
              {t({
                es: "Privacidad por Diseño",
                en: "Privacy by Design",
              })}
            </h3>
            <p className="text-base md:text-lg font-bold leading-relaxed">
              {t(footerData.privacy)}
            </p>
          </div>
        </div>

        {/* Privacy Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 pt-6 border-t-4 border-brutalist-steel">
          <div className="border-l-4 border-brutalist-safety pl-4">
            <p className="font-mono text-sm font-bold text-brutalist-safety mb-2">
              ✓ {t({ es: "Sin cookies", en: "No cookies" })}
            </p>
            <p className="text-sm">
              {t({
                es: "No se almacenan datos de seguimiento",
                en: "No tracking data stored",
              })}
            </p>
          </div>

          <div className="border-l-4 border-brutalist-safety pl-4">
            <p className="font-mono text-sm font-bold text-brutalist-safety mb-2">
              ✓ {t({ es: "Sin Analytics", en: "No Analytics" })}
            </p>
            <p className="text-sm">
              {t({
                es: "Sin Google Analytics ni scripts de terceros",
                en: "No GA or third-party scripts",
              })}
            </p>
          </div>

          <div className="border-l-4 border-brutalist-safety pl-4">
            <p className="font-mono text-sm font-bold text-brutalist-safety mb-2">
              ✓ {t({ es: "GDPR", en: "GDPR" })}
            </p>
            <p className="text-sm">
              {t({
                es: "Compliant con regulaciones europeas",
                en: "Compliant with EU regulations",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Social Links & Contact */}
      <div className="border-b-4 border-brutalist-steel p-6 md:p-8">
        <h3 className="text-xl font-black mb-4">
          {t({
            es: "Conecta",
            en: "Connect",
          })}
        </h3>

        <div className="flex flex-wrap gap-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2
              border-4 border-brutalist-safety font-bold
              transition-all duration-200
              hover:bg-brutalist-safety hover:text-black
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brutalist-safety
            `}
          >
            <Linkedin size={18} strokeWidth={2.5} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2
              border-4 border-brutalist-safety font-bold
              transition-all duration-200
              hover:bg-brutalist-safety hover:text-black
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brutalist-safety
            `}
          >
            <Github size={18} strokeWidth={2.5} />
            <span>GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className={`
              flex items-center gap-2 px-4 py-2
              border-4 border-brutalist-safety font-bold
              transition-all duration-200
              hover:bg-brutalist-safety hover:text-black
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brutalist-safety
            `}
          >
            <Mail size={18} strokeWidth={2.5} />
            <span>Email</span>
          </a>

          {/* Privacy Policy */}
          <a
            href="/privacy"
            className={`
              flex items-center gap-2 px-4 py-2
              border-4 border-brutalist-safety font-bold
              transition-all duration-200
              hover:bg-brutalist-safety hover:text-black
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brutalist-safety
            `}
          >
            <Shield size={18} strokeWidth={2.5} />
            <span>{t({ es: "Privacidad", en: "Privacy" })}</span>
          </a>
        </div>
      </div>

      {/* Colophon */}
      <div className="border-b-4 border-brutalist-steel p-6 md:p-8">
        <h3 className="text-xl font-black mb-4">
          {t({
            es: "Créditos Técnicos",
            en: "Technical Credits",
          })}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
          <div>
            <p className="text-brutalist-safety font-bold mb-2">Built with:</p>
            <ul className="space-y-1 text-xs">
              <li>• Next.js 15 (App Router)</li>
              <li>• React 19</li>
              <li>• Tailwind CSS 4</li>
              <li>• Framer Motion</li>
              <li>• TypeScript</li>
              <li>• Lucide React Icons</li>
            </ul>
          </div>

          <div>
            <p className="text-brutalist-safety font-bold mb-2">Deployed on:</p>
            <ul className="space-y-1 text-xs">
              <li>• Vercel Edge Network</li>
              <li>• GitHub (source control)</li>
              <li>• GitHub Actions (CI/CD)</li>
              <li>• Zero-cookie architecture</li>
              <li>• Privacy-first design</li>
              <li>• GDPR compliant</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & License */}
      <div className="p-6 md:p-8 text-center border-t-4 border-brutalist-steel">
        <p className="font-bold text-sm md:text-base mb-2">
          © {currentYear} Giulia - {t({ es: "Ingeniera de Materiales", en: "Materials Engineer" })}
        </p>

        <p className="text-xs font-mono text-brutalist-steel">
          {t({
            es: "Diseño Brutalist Industrial | Sin cookies | Sin tracking | Solo ciencia",
            en: "Industrial Brutalist Design | No cookies | No tracking | Just science",
          })}
        </p>

        {/* Ticker */}
        <div className="mt-6 pt-6 border-t-4 border-brutalist-steel">
          <p className="font-mono text-xs font-bold text-brutalist-safety uppercase tracking-widest overflow-hidden">
            <span className="inline-block animate-ticker whitespace-nowrap">
              {t(footerData.ticker)} • {t(footerData.ticker)} •
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
