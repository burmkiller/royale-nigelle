"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "./ui/button";

const stats = [
  { value: "hero.stat.clients" as const, label: "hero.stat.clientsLabel" as const },
  { value: "hero.stat.experience" as const, label: "hero.stat.experienceLabel" as const },
  { value: "hero.stat.programs" as const, label: "hero.stat.programsLabel" as const },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary-dark/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t("hero.title")}
          <br />
          <span className="gradient-text">{t("hero.titleHighlight")}</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button href="#contact" size="lg">
            {t("hero.cta.book")}
          </Button>
          <Button href="#services" variant="outline" size="lg">
            {t("hero.cta.discover")}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">
                {t(stat.value)}
              </div>
              <div className="text-sm text-silver mt-1">{t(stat.label)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
