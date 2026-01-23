export const sponsorsSectionSchema = {
  name: "sponsorsSection",
  title: "Sponsors Section",
  type: "object",

  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow (Optional)",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "logos",
      title: "Sponsor Logos",
      type: "array",
      validation: (Rule: any) => Rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Company Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              title: "Logo Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "url",
              title: "Company Website",
              type: "url",
              description: "Optional link when logo is clicked",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }: any) {
      return {
        title: title || "Sponsors Section",
        subtitle,
      };
    },
  },
};
