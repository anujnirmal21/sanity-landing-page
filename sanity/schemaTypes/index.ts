import { type SchemaTypeDefinition } from "sanity";
import landingPage from "./landingPage";
import header from "./header";
import settings from "./settings";
import { featureSectionSchema } from "./featureSection";
import { testimonialsSectionSchema } from "./testimonials";
import { comparisonSectionSchema } from "./comparisonSection";
import { heroCarouselSchema } from "./heroCarousel";
import { faqSectionSchema } from "./faqSectionSchema";
import { promoSectionSchema } from "./promoSectionSchema";
import { articleSectionSchema } from "./articleSectionSchema";
import footer from "./footer";
import { marketingSchema } from "./marketingSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingPage,
    header,
    footer,
    settings,
    featureSectionSchema,
    testimonialsSectionSchema,
    comparisonSectionSchema,
    heroCarouselSchema,
    faqSectionSchema,
    promoSectionSchema,
    articleSectionSchema,
    marketingSchema,
  ],
};
