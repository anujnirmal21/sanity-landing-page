import { defineType, defineField } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
