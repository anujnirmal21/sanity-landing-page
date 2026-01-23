export const heroSectionSchema = {
  name: "heroSection",
  title: "Hero Section",
  type: "object",

  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    },
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
    },

    {
      name: "ctas",
      title: "Call to Actions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "href",
              title: "Link",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "variant",
              title: "Variant",
              type: "string",
              initialValue: "primary",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
                layout: "radio",
              },
            },
          ],
        },
      ],
    },

    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "alignment",
      title: "Content Alignment",
      type: "string",
      initialValue: "center",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
    },
  },
};
