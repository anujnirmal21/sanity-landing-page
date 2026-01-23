import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",

  fields: [
    defineField({
      name: "variant",
      title: "Card Size",
      type: "string",
      initialValue: "large",
      options: {
        list: [
          { title: "Large", value: "large" },
          { title: "Small", value: "small" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Avatar / Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "name",
      title: "Name / Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "companyLogoText",
      title: "Company / Logo Text",
      type: "string",
    }),

    defineField({
      name: "review",
      title: "Review",
      type: "text",
      rows: 4,
      hidden: ({ parent }) => parent?.variant === "small",
    }),

    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      hidden: ({ parent }) => parent?.variant === "small",
    }),

    defineField({
      name: "authorRole",
      title: "Author Role",
      type: "string",
      hidden: ({ parent }) => parent?.variant === "small",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "variant",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle === "small" ? "Small testimonial" : "Large testimonial",
      };
    },
  },
});
