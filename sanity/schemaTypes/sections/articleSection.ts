export const articleSectionSchema = {
  name: "articleSection",
  title: "Article Section",
  type: "object",
  fields: [
    {
      name: "headline",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "stat",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "value", type: "string" },
        { name: "context", type: "string" },
      ],
    },
    {
      name: "cta",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    },
  ],
};
