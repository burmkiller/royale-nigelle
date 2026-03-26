"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import Button from "./ui/button";

interface ServiceTier {
  nameKey: TranslationKey;
  priceKey: TranslationKey;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
  features: TranslationKey[];
  ctaKey: TranslationKey;
  popular?: boolean;
  popularKey?: TranslationKey;
}

const tiers: ServiceTier[] = [
  {
    nameKey: "services.tier1.name",
    priceKey: "services.tier1.price",
    periodKey: "services.tier1.period",
    descriptionKey: "services.tier1.description",
    features: [
      "services.tier1.feature1",
      "services.tier1.feature2",
      "services.tier1.feature3",
      "services.tier1.feature4",
    ],
    ctaKey: "services.tier1.cta",
  },
  {
    nameKey: "services.tier2.name",
    priceKey: "services.tier2.price",
    periodKey: "services.tier2.period",
    descriptionKey: "services.tier2.description",
    features: [
      "services.tier2.feature1",
      "services.tier2.feature2",
      "services.tier2.feature3",
      "services.tier2.feature4",
      "services.tier2.feature5",
    ],
    ctaKey: "services.tier2.cta",
    popular: true,
    popularKey: "services.tier2.popular",
  },
  {
    nameKey: "services.tier3.name",
    priceKey: "services.tier3.price",
    periodKey: "services.tier3.period",
    descriptionKey: "services.tier3.description",
    features: [
      "services.tier3.feature1",
      "services.tier3.feature2",
      "services.tier3.feature3",
      "services.tier3.feature4",
      "services.tier3.feature5",
      "services.tier3.feature6",
    ],
    ctaKey: "services.tier3.cta",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="services.badge"
          title="services.title"
          subtitle="services.subtitle"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <MotionWrapper key={tier.nameKey} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-transform hover:-translate-y-1 ${
                  tier.popular
                    ? "bg-gradient-to-b from-accent/10 to-primary border-2 border-accent glow-accent"
                    : "bg-primary/50 border border-white/10"
                }`}
              >
                {tier.popular && tier.popularKey && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary text-sm font-semibold rounded-full">
                    {t(tier.popularKey)}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-white mb-2">
                  {t(tier.nameKey)}
                </h3>
                <p className="text-silver text-sm mb-6">
                  {t(tier.descriptionKey)}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {t(tier.priceKey)}
                  </span>
                  <span className="text-silver text-sm ml-1">
                    {t(tier.periodKey)}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-silver text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {t(feature)}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {t(tier.ctaKey)}
                </Button>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
