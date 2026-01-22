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

  return (
    <main>
      <div className=" relative">
        <Image
          src={"/wft-bg.jpg"}
          alt="bg-image"
          width={100}
          height={100}
          className=" absolute h-full w-full object-fill"
        />
        <Hero data={data.hero} />
        {data.heroCarousel && <HeroCarousel data={data.heroCarousel} />}
      </div>

      <SponsorsSection data={data.sponsors} />
      <Section2 data={data.section2} />
      {data.featureSections?.map((section: any, index: number) => (
        <FeatureSection key={index} data={section} />
      ))}
      <TestimonialsSection data={data.testimonialsSection} />
      <ComparisonSection data={data.comparisonSection} />
      <FAQSection data={data.faqSection} />

      <MarketingSection data={data.marketingSection} />
      <PromoSection data={data.promoSection} />
      <ArticleSection data={data.articleSection} />
    </main>
  );
}
