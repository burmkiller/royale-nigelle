"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 p-0.5">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
          language === "fr"
            ? "bg-accent text-primary"
            : "text-white/60 hover:text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
          language === "en"
            ? "bg-accent text-primary"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
