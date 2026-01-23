import { client } from "@/sanity/lib/client";
import { landingPageQuery } from "@/sanity/queries";
import Hero from "@/components/Hero/Hero";
import FAQSection from "@/components/FAQ";
import Section2 from "@/components/Section2";
import SponsorsSection from "@/components/SponscoreSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestemonialSection";
import ComparisonSection from "@/components/ComparisonSection";
import ArticleSection from "@/components/ArticleSection";
import HeroCarousel from "@/components/HeroCarousel";
import Image from "next/image";
import PromoSection from "@/components/PromoSection";
import MarketingSection from "@/components/MarketingSection";

export default async function LandingPage() {
  const data = await client.fetch(landingPageQuery);

  if (!data) return null; // ⛑️ safety net

  return (
    <main>
      {data.hero && (
        <div className="relative">
          <Image
            src="/wft-bg.jpg"
            alt="bg-image"
            fill
            className="absolute object-fill"
            priority
          />

          <Hero data={data.hero} />

          {data.heroCarousel && (
            <HeroCarousel data={data.heroCarousel} />
          )}
        </div>
      )}

      {data.sponsors && (
        <SponsorsSection data={data.sponsors} />
      )}

      {data.section2 && (
        <Section2 data={data.section2} />
      )}

      {Array.isArray(data.featureSections) &&
        data.featureSections.map((section: any, index: number) => (
          section ? <FeatureSection key={index} data={section} /> : null
        ))}

      {data.testimonialsSection && (
        <TestimonialsSection data={data.testimonialsSection} />
      )}

      {data.comparisonSection && (
        <ComparisonSection data={data.comparisonSection} />
      )}

      {data.faqSection && (
        <FAQSection data={data.faqSection} />
      )}

      {data.marketingSection && (
        <MarketingSection data={data.marketingSection} />
      )}

      {data.promoSection && (
        <PromoSection data={data.promoSection} />
      )}

      {data.articleSection && (
        <ArticleSection data={data.articleSection} />
      )}
    </main>
  );
}
