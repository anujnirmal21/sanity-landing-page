export const comparisonSectionSchema = {
  name: "comparisonSection",
  title: "Competition Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "button",
      title: "CTA Button",
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
      name: "statsTitle",
      title: "Stats Title",
      type: "string",
      description: "Title above the leaderboard chart",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "competitors",
      title: "Competitors",
      type: "array",
      validation: (Rule: any) =>
        Rule.min(1).error("At least one competitor is required"),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Competitor Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "score",
              title: "Score",
              type: "string",
              description: "Displayed score (e.g. 92, 4.8x, 98%)",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "barImage",
              title: "Bar Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
