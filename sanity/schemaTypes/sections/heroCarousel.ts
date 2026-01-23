export const heroCarouselSchema = {
  name: "heroCarousel",
  title: "Hero Carousel",
  type: "object",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
    },
    {
      name: "items",
      title: "Carousel Items",
      type: "array",
      validation: (Rule: any) =>
        Rule.min(1).error("At least one carousel item is required"),
      of: [
        {
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
            },
            {
              name: "image",
              title: "Image",
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image File",
                  type: "image",
                  options: { hotspot: true },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Hero Carousel",
      };
    },
  },
};
