export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",

  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "ctas",
          title: "CTAs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "href", type: "string" },
                {
                  name: "variant",
                  type: "string",
                  options: {
                    list: [
                      { title: "Primary", value: "primary" },
                      { title: "Secondary", value: "secondary" },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "heroCarousel",
      title: "Hero Carousel",
      type: "heroCarousel",
    },

    {
      name: "sponsors",
      title: "Sponsors Section",
      type: "object",
      fields: [
        {
          name: "logos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "image", type: "image", options: { hotspot: true } },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "section2",
      title: "Section 2 – Award / Platform Section",
      type: "object",
      fields: [
        { name: "headline", type: "string" },
        { name: "subheadline", type: "string" },
        {
          name: "paragraphs",
          type: "array",
          of: [{ type: "text" }],
        },
        {
          name: "cta",
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },

    {
      name: "featureSections",
      title: "Feature Sections",
      type: "array",
      of: [{ type: "featureSection" }],
      validation: (Rule: any) => Rule.min(1),
    },
    {
      name: "testimonialsSection",
      title: "Testimonials Section",
      type: "testimonialsSection",
    },
    {
      name: "comparisonSection",
      title: "Comparison Section",
      type: "comparisonSection",
    },
    {
      name: "faqSection",
      title: "FAQ Section",
      type: "faqSection",
    },
    {
      name: "promoSection",
      title: "Promo Section",
      type: "promoSection",
    },
    {
      name: "articleSection",
      title: "Article Section",
      type: "articleSection",
    },
    {
      name: "marketingSection",
      title: "Marketing Section",
      type: "marketingSection",
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Landing Page",
      };
    },
  },
};
