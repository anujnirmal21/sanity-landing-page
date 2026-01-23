import { defineMigration } from "sanity/migrate";

export default defineMigration({
  title: "Move legacy landingPage fields into pageBuilder",

  migrate: {
    document(doc) {
      if (doc._type !== "landingPage") return;

      const landingPage = doc as any;

      // Prevent double migration
      if (
        Array.isArray(landingPage.pageBuilder) &&
        landingPage.pageBuilder.length > 0
      ) {
        return;
      }

      const pageBuilder: any[] = [];

      // HERO
      if (landingPage.hero) {
        pageBuilder.push({
          _type: "heroSection",
          _key: `hero-${Date.now()}`,
          eyebrow: landingPage.hero.eyebrow,
          title: landingPage.hero.title,
          description: landingPage.hero.description,
          ctas: landingPage.hero.ctas,
        });
      }

      // FEATURE SECTIONS
      if (Array.isArray(landingPage.featureSections)) {
        landingPage.featureSections.forEach((feature: any, index: number) => {
          pageBuilder.push({
            _type: "featureSection",
            _key: `feature-${index}-${Date.now()}`,
            ...feature,
          });
        });
      }

      // HERO CAROUSEL
      if (landingPage.heroCarousel) {
        pageBuilder.push({
          _type: "heroCarousel",
          _key: `heroCarousel-${Date.now()}`,
          ...landingPage.heroCarousel,
        });
      }

      // SPONSORS
      if (landingPage.sponsors) {
        pageBuilder.push({
          _type: "sponsorsSection",
          _key: `sponsors-${Date.now()}`,
          ...landingPage.sponsors,
        });
      }

      // SECTION 2
      if (landingPage.section2) {
        pageBuilder.push({
          _type: "section2",
          _key: `section2-${Date.now()}`,
          ...landingPage.section2,
        });
      }

      // TESTIMONIALS
      if (landingPage.testimonialsSection) {
        pageBuilder.push({
          _type: "testimonialsSection",
          _key: `testimonials-${Date.now()}`,
          ...landingPage.testimonialsSection,
        });
      }

      // COMPARISON
      if (landingPage.comparisonSection) {
        pageBuilder.push({
          _type: "comparisonSection",
          _key: `comparison-${Date.now()}`,
          ...landingPage.comparisonSection,
        });
      }

      // FAQ
      if (landingPage.faqSection) {
        pageBuilder.push({
          _type: "faqSection",
          _key: `faq-${Date.now()}`,
          ...landingPage.faqSection,
        });
      }

      // MARKETING
      if (landingPage.marketingSection) {
        pageBuilder.push({
          _type: "marketingSection",
          _key: `marketing-${Date.now()}`,
          ...landingPage.marketingSection,
        });
      }

      // PROMO
      if (landingPage.promoSection) {
        pageBuilder.push({
          _type: "promoSection",
          _key: `promo-${Date.now()}`,
          ...landingPage.promoSection,
        });
      }

      // ARTICLE
      if (landingPage.articleSection) {
        pageBuilder.push({
          _type: "articleSection",
          _key: `article-${Date.now()}`,
          ...landingPage.articleSection,
        });
      }

      if (pageBuilder.length === 0) return;

      // ✅ THIS IS THE FIX
      return {
        patch: {
          id: doc._id,
          set: {
            pageBuilder,
          },
        },
      };
    },
  },
});
