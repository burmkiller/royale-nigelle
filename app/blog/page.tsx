"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";

interface BlogArticle {
  titleKey: TranslationKey;
  excerptKey: TranslationKey;
  dateKey: TranslationKey;
}

const articles: BlogArticle[] = [
  {
    titleKey: "blog.1.title",
    excerptKey: "blog.1.excerpt",
    dateKey: "blog.1.date",
  },
  {
    titleKey: "blog.2.title",
    excerptKey: "blog.2.excerpt",
    dateKey: "blog.2.date",
  },
  {
    titleKey: "blog.3.title",
    excerptKey: "blog.3.excerpt",
    dateKey: "blog.3.date",
  },
];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="pt-28 pb-24 bg-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
              {t("blog.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-silver">
              {t("blog.subtitle")}
            </p>
          </MotionWrapper>

          <div className="space-y-8">
            {articles.map((article, i) => (
              <MotionWrapper key={article.titleKey} delay={i * 0.1}>
                <article className="bg-primary-light/50 rounded-2xl border border-white/5 overflow-hidden hover:border-accent/30 transition-all">
                  <div className="p-8">
                    <span className="text-xs text-accent font-medium">
                      {t(article.dateKey)}
                    </span>
                    <h2 className="text-2xl font-semibold text-white mt-2 mb-4">
                      {t(article.titleKey)}
                    </h2>
                    <p className="text-silver leading-relaxed">
                      {t(article.excerptKey)}
                    </p>
                    <span className="inline-block mt-4 text-accent text-sm font-medium">
                      {t("blog.readMore")} →
                    </span>
                  </div>
                </article>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
