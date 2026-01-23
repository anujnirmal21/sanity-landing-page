export const marketingSectionSchema = {
  name: "marketingSection",
  title: "Marketing Section",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "url",
          title: "Button URL",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "illustration",
      title: "Illustration",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Marketing Section",
      };
    },
  },
};
