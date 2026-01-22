export const testimonialsSectionSchema = {
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "object",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        {
          name: "line1",
          title: "Line 1",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "line2",
          title: "Line 2",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    {
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      fields: [
        {
          name: "vipul",
          title: "Row 1 – Vipul",
          type: "object",
          fields: [
            { name: "image", type: "image", options: { hotspot: true } },
            { name: "name", type: "string" },
            { name: "companyLogoText", type: "string" },
            { name: "review", type: "text" },
            { name: "authorName", type: "string" },
            { name: "authorRole", type: "string" },
          ],
        },

        {
          name: "benny",
          title: "Row 2 – Benny",
          type: "object",
          fields: [
            { name: "image", type: "image", options: { hotspot: true } },
            { name: "name", type: "string" },
            { name: "companyLogoText", type: "string" },
            { name: "review", type: "text" },
            { name: "authorName", type: "string" },
            { name: "authorRole", type: "string" },
          ],
        },

        {
          name: "leah",
          title: "Row 3 – Leah (Small)",
          type: "object",
          fields: [
            { name: "image", type: "image", options: { hotspot: true } },
            { name: "name", type: "string" },
            { name: "companyLogoText", type: "string" },
          ],
        },

        {
          name: "nikki",
          title: "Row 3 – Nikki (Small)",
          type: "object",
          fields: [
            { name: "image", type: "image", options: { hotspot: true } },
            { name: "name", type: "string" },
            { name: "companyLogoText", type: "string" },
          ],
        },
      ],
    },
  ],
};
