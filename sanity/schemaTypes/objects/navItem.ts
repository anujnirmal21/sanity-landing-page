import { defineType, defineField } from "sanity";

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "href",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "hasDropdown",
      title: "Has Dropdown",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "children",
      title: "Dropdown Items",
      type: "array",
      of: [{ type: "navItem" }],
      hidden: ({ parent }) => !parent?.hasDropdown,
      validation: (Rule) =>
        Rule.custom((value, context) => {
         //@ts-ignore
          if (context.parent?.hasDropdown && (!value || value.length === 0)) {
            return "Add at least one dropdown item";
          }
          return true;
        }),
    }),
  ],

  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
});
