"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="w-full min-h-screen bg-brutalist-dirty flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full border-4 border-black p-8 md:p-12 bg-white">
        {/* Error Code */}
        <div className="text-center mb-8 border-b-4 border-black pb-8">
          <h1 className="text-9xl md:text-[150px] font-black text-brutalist-safety mb-4">
            404
          </h1>
          <p className="text-2xl md:text-4xl font-black">
            {t({
              es: "Página No Encontrada",
              en: "Page Not Found",
            })}
          </p>
        </div>

        {/* Message */}
        <div className="mb-8">
          <p className="text-lg font-bold leading-relaxed mb-4">
            {t({
              es: "La página que estás buscando no existe en este sitio.",
              en: "The page you're looking for doesn't exist on this site.",
            })}
          </p>
          <p className="text-base font-bold text-brutalist-steel">
            {t({
              es: "Posibles razones:",
              en: "Possible reasons:",
            })}
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-base font-bold">
              • {t({
                es: "URL incorrecta o mal escrita",
                en: "Incorrect or misspelled URL",
              })}
            </li>
            <li className="text-base font-bold">
              • {t({
                es: "La página fue movida o eliminada",
                en: "The page was moved or deleted",
              })}
            </li>
            <li className="text-base font-bold">
              • {t({
                es: "Enlace roto desde un sitio externo",
                en: "Broken link from external site",
              })}
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/"
            className={`
              flex-1 px-6 py-4 font-black text-lg text-center
              border-4 border-black transition-all duration-200
              shadow-brutal hover:shadow-brutal-lg
              active:transform active:translate-y-1 active:shadow-none
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              bg-brutalist-safety text-black hover:bg-brutalist-steel hover:text-white
            `}
          >
            {t({
              es: "Volver al Portafolio",
              en: "Back to Portfolio",
            })}
          </Link>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 px-6 py-4 font-black text-lg text-center
              border-4 border-black transition-all duration-200
              shadow-brutal hover:shadow-brutal-lg
              active:transform active:translate-y-1 active:shadow-none
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              bg-black text-brutalist-safety hover:bg-brutalist-steel
            `}
          >
            {t({
              es: "Contáctame",
              en: "Contact Me",
            })}
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-8 border-t-4 border-black text-center">
          <p className="font-mono text-sm text-brutalist-steel">
            {t({
              es: "Error 404 | Página no encontrada",
              en: "Error 404 | Page not found",
            })}
          </p>
        </div>
      </div>
    </main>
  );
}
