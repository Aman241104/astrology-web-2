"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Handle RTL for Urdu
    if (language === "ur") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ur";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (path: string): any => {
    const keys = path.split(".");
    let result: any = translations[language];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // Fallback to English if key missing in current language
        let fallback: any = translations["en"];
        for (const fKey of keys) {
          if (fallback && fallback[fKey]) {
            fallback = fallback[fKey];
          } else {
            return path; // Return path as last resort
          }
        }
        return fallback;
      }
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
