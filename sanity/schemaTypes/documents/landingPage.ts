export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",

  fields: [
    {
      name: "pageBuilder",
      title: "Page Sections",
      description: "Drag & reorder sections to build the landing page",
      type: "array",
      validation: (Rule: any) =>
        Rule.min(1).error("At least one section is required"),

      of: [
        { type: "heroSection" },
        { type: "heroCarousel" },
        { type: "sponsorsSection" },
        { type: "featureSection" },
        { type: "testimonialsSection" },
        { type: "comparisonSection" },
        { type: "faqSection" },
        { type: "marketingSection" },
        { type: "promoSection" },
        { type: "articleSection" },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Landing Page",
        subtitle: "Flexible page builder layout",
      };
    },
  },
};
