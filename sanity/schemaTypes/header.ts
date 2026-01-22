export default {
  name: 'header',
  title: 'Header',
  type: 'document',

  fields: [
    // --- Logo ---
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },

    // --- Navigation ---
    {
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      validation: (Rule: any) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'hasDropdown',
              title: 'Has Dropdown',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    },

    // --- Actions (Right Side Buttons) ---
    {
      name: 'actions',
      title: 'Header Actions',
      type: 'array',
      validation: (Rule: any) => Rule.max(4),
      of: [
        {
          type: 'object',
          name: 'headerAction',
          title: 'Action Button',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'variant',
              title: 'Variant',
              type: 'string',
              initialValue: 'link',
              options: {
                list: [
                  { title: 'Link', value: 'link' },
                  { title: 'Primary Button', value: 'primary' },
                ],
                layout: 'radio',
              },
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'variant',
            },
          },
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Header',
        subtitle: 'Global site header',
      };
    },
  },
};
