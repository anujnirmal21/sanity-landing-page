import Hero from "@/components/Hero/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import SponsorsSection from "@/components/SponscoreSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestemonialSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQ";
import MarketingSection from "@/components/MarketingSection";
import PromoSection from "@/components/PromoSection";
import ArticleSection from "@/components/ArticleSection";

type PageBuilderProps = {
  sections?: any[];
};

export default function PageBuilder({ sections = [] }: PageBuilderProps) {
  if (!sections.length) return null;
  
  console.log(
    //@ts-ignore
  sections?._type,
  sections
);


  return (
    <>
      {sections.map((section, index) => {
        const key = section._key || `${section._type}-${index}`;

        switch (section._type) {
          case "heroSection":
            return <Hero key={key} data={section} />;

          case "heroCarousel":
            return <HeroCarousel key={key} data={section} />;

          case "sponsorsSection":
            return <SponsorsSection key={key} data={section} />;

          case "featureSection":
            return <FeatureSection key={key} data={section} />;

          case "testimonialsSection":
            return <TestimonialsSection key={key} data={section} />;

          case "comparisonSection":
            return <ComparisonSection key={key} data={section} />;

          case "faqSection":
            return <FAQSection key={key} data={section} />;

          case "marketingSection":
            return <MarketingSection key={key} data={section} />;

          case "promoSection":
            return <PromoSection key={key} data={section} />;

          case "articleSection":
            return <ArticleSection key={key} data={section} />;

          default:
            // Unknown section type — fail silently
            return null;
        }
      })}
    </>
  );
}
