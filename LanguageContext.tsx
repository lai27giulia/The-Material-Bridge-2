"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, LanguageContextType, BilingualString } from "@/types";
import { DEFAULT_LANGUAGE } from "@/lib/constants";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Auto-detect language from browser
    const browserLang = navigator.language.split("-")[0];
    const supportedLangs: Language[] = ["en", "es"];
    const detectedLang: Language = supportedLangs.includes(browserLang as Language)
      ? (browserLang as Language)
      : DEFAULT_LANGUAGE;

    // Check localStorage for previous preference
    const savedLang = localStorage.getItem("preferred-language") as Language | null;
    const initialLang = savedLang || detectedLang;

    setLanguageState(initialLang);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", lang);
    }
  };

  const t = (obj: BilingualString): string => {
    return obj[language] || obj[DEFAULT_LANGUAGE];
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
