import { type SchemaTypeDefinition } from "sanity";

// documents
import landingPage from "./documents/landingPage";
import header from "./documents/header";
import footer from "./documents/footer";
import settings from "./documents/settings";

// sections (page builder blocks)
import { heroSectionSchema } from "./sections/heroSection";
import { sponsorsSectionSchema } from "./sections/sponsorsSection";
import { featureSectionSchema } from "./sections/featureSection";
import { comparisonSectionSchema } from "./sections/comparisonSection";
import { heroCarouselSchema } from "./sections/heroCarousel";
import { faqSectionSchema } from "./sections/faqSection";
import { promoSectionSchema } from "./sections/promoSection";
import { articleSectionSchema } from "./sections/articleSection";

import { testimonialsSectionSchema } from "./sections/testimonialSection";
import { marketingSectionSchema } from "./sections/marketingSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    landingPage,
    header,
    footer,
    settings,

    // page builder sections
    heroSectionSchema,
    sponsorsSectionSchema,
    featureSectionSchema,
    testimonialsSectionSchema,
    comparisonSectionSchema,
    heroCarouselSchema,
    faqSectionSchema,
    promoSectionSchema,
    articleSectionSchema,
    marketingSectionSchema,
  ],
};
