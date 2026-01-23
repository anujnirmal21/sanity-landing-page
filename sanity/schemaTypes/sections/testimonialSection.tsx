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
      type: "array",
      validation: (Rule: any) => Rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "variant",
              title: "Card Size",
              type: "string",
              initialValue: "large",
              options: {
                list: [
                  { title: "Large", value: "large" },
                  { title: "Small", value: "small" },
                ],
                layout: "radio",
              },
            },
            {
              name: "image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "companyLogoText",
              type: "string",
            },
            {
              name: "review",
              type: "text",
              hidden: ({ parent }: any) => parent?.variant === "small",
            },
            {
              name: "authorName",
              type: "string",
              hidden: ({ parent }: any) => parent?.variant === "small",
            },
            {
              name: "authorRole",
              type: "string",
              hidden: ({ parent }: any) => parent?.variant === "small",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Testimonials Section",
      };
    },
  },
};
