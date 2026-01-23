export const faqSectionSchema = {
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "FAQ",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
    },
    {
      name: "items",
      title: "FAQ Items",
      type: "array",
      validation: (Rule: any) =>
        Rule.min(1).error("At least one FAQ item is required"),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
