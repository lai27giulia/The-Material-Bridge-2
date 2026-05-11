import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { AudioProvider } from "@/context/AudioContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giulia | Materials Engineer & Industrial UX Researcher",
  description:
    "Futura Ingeniera de Materiales. Transformo complejidad técnica en protocolos operativos intuitivos para eliminar errores, mermas y estrés en producción.",
  keywords: [
    "Materials Engineering",
    "UX Research",
    "Industrial Design",
    "Metallurgy",
    "Process Optimization",
  ],
  authors: [{ name: "Giulia" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://the-material-bridge.vercel.app",
    title: "The Material Bridge | Giulia",
    description: "Materials Engineer & Industrial UX Researcher",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-brutalist-dirty text-brutalist-black">
        <LanguageProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
