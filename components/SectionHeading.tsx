"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import MotionWrapper from "./MotionWrapper";

interface SectionHeadingProps {
  badge?: TranslationKey;
  title: TranslationKey;
  subtitle?: TranslationKey;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <MotionWrapper className="text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
          {t(badge)}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-primary" : "text-white"
        }`}
      >
        {t(title)}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-primary-light/70" : "text-silver"
          }`}
        >
          {t(subtitle)}
        </p>
      )}
    </MotionWrapper>
  );
}
