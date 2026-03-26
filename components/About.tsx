"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";

const credentials = [
  "about.credential1" as const,
  "about.credential2" as const,
  "about.credential3" as const,
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="about.badge"
          title="about.title"
          subtitle="about.subtitle"
          light
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <MotionWrapper>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-accent">T</span>
                  </div>
                  <p className="text-white/60 text-sm">Photo de Toufik</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            </div>
          </MotionWrapper>

          {/* Content */}
          <MotionWrapper delay={0.2}>
            <div className="space-y-6">
              <p className="text-primary-light/80 text-lg leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-primary-light/80 text-lg leading-relaxed">
                {t("about.p2")}
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3 pt-4">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t(cred)}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
