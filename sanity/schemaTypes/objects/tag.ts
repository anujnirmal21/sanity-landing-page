import { defineType, defineField } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "object",

  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "color",
      title: "Color (Hex)",
      type: "string",
      description: "Hex color code (e.g. #FF5733)",
      validation: (Rule) =>
        Rule.regex(/^#([0-9A-F]{3}){1,2}$/i).error("Must be a valid hex color"),
    }),
  ],

  preview: {
    select: {
      title: "text",
      subtitle: "color",
    },
  },
});
