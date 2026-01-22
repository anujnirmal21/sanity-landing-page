export const promoSectionSchema = {
  name: "promoSection",
  title: "Promo Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "href",
          title: "Button Link",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
