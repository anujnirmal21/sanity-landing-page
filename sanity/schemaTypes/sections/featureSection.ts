export const featureSectionSchema = {
  name: "featureSection",
  title: "Feature Section",
  type: "object",
  fields: [
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Split", value: "split" },
          { title: "Stacked", value: "stacked" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "tag",
      title: "Tag",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "color",
          title: "Color (Hex)",
          type: "string",
          validation: (Rule: any) =>
            Rule.regex(/^#([0-9A-F]{3}){1,2}$/i),
        },
      ],
    },

    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "tabs",
      title: "Tabs",
      type: "array",
      validation: (Rule: any) => Rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "description", type: "text", validation: (Rule: any) => Rule.required() },
          ],
        },
      ],
    },

    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", validation: (Rule: any) => Rule.required() },
        { name: "href", type: "string", validation: (Rule: any) => Rule.required() },
      ],
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
