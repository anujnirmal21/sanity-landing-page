import { defineType, defineField } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "Main stat value (e.g. 98%, 4.9x, 10k+)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "context",
      title: "Context",
      type: "string",
      description: "Optional supporting text",
    }),
  ],

  preview: {
    select: {
      title: "value",
      subtitle: "label",
    },
  },
});
