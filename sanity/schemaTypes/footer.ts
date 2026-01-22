export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "columns",
      title: "Footer Columns",
      type: "array",
      validation: (Rule: any) => Rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Column Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              validation: (Rule: any) => Rule.min(1),
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Label",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "href",
                      title: "URL",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "description", type: "string" },
        { name: "placeholder", type: "string" },
        { name: "buttonLabel", type: "string" },
      ],
    },

    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    },

    {
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
      ],
    },

    // ✅ UPDATED SOCIALS
    {
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Platform Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "href",
              title: "Profile URL",
              type: "url",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "icon",
              title: "Social Icon",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      name: "credit",
      title: "Template Credit",
      type: "object",
      fields: [
        { name: "text", type: "string" },
        {
          name: "links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "href", type: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Global Site Footer",
      };
    },
  },
};
