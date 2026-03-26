"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";

interface Testimonial {
  quoteKey: TranslationKey;
  authorKey: TranslationKey;
  detailKey: TranslationKey;
}

const testimonials: Testimonial[] = [
  {
    quoteKey: "testimonials.1.quote",
    authorKey: "testimonials.1.author",
    detailKey: "testimonials.1.detail",
  },
  {
    quoteKey: "testimonials.2.quote",
    authorKey: "testimonials.2.author",
    detailKey: "testimonials.2.detail",
  },
  {
    quoteKey: "testimonials.3.quote",
    authorKey: "testimonials.3.author",
    detailKey: "testimonials.3.detail",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="testimonials.badge"
          title="testimonials.title"
          subtitle="testimonials.subtitle"
          light
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <MotionWrapper key={item.authorKey} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 h-full flex flex-col">
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-accent/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <p className="text-primary-light/80 leading-relaxed flex-grow mb-6">
                  {t(item.quoteKey)}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-primary/5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">
                      {t(item.authorKey).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">
                      {t(item.authorKey)}
                    </div>
                    <div className="text-primary-light/50 text-xs">
                      {t(item.detailKey)}
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
