"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import Button from "./ui/button";

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

export default function BlogPreview() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="blog.badge"
          title="blog.title"
          subtitle="blog.subtitle"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, i) => (
            <MotionWrapper key={article.titleKey} delay={i * 0.15}>
              <a
                href="/blog"
                className="group block bg-primary-light/50 rounded-2xl border border-white/5 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>

                <div className="p-6">
                  <span className="text-xs text-accent font-medium">
                    {t(article.dateKey)}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-accent transition-colors">
                    {t(article.titleKey)}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed line-clamp-3">
                    {t(article.excerptKey)}
                  </p>
                  <span className="inline-block mt-4 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {t("blog.readMore")} →
                  </span>
                </div>
              </a>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper className="text-center" delay={0.4}>
          <Button href="/blog" variant="outline">
            {t("blog.viewAll")}
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
