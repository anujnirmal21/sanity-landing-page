export default {
  name: "announcementBar",
  title: "Announcement Bar",
  type: "object",

  fields: [
    {
      name: "enabled",
      title: "Enable Announcement Bar",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "text",
      title: "Announcement Text",
      type: "string",
      hidden: ({ parent }: any) => !parent?.enabled,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enabled && !value) {
            return "Text is required when announcement bar is enabled";
          }
          return true;
        }),
    },
    {
      name: "cta",
      title: "CTA (Optional)",
      type: "object",
      hidden: ({ parent }: any) => !parent?.enabled,
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
        },
        {
          name: "href",
          title: "Button Link",
          type: "string",
        },
      ],
    },
    {
      name: "variant",
      title: "Style Variant",
      type: "string",
      initialValue: "default",
      hidden: ({ parent }: any) => !parent?.enabled,
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Success", value: "success" },
          { title: "Warning", value: "warning" },
          { title: "Error", value: "error" },
        ],
        layout: "radio",
      },
    },
  ],

  preview: {
    select: {
      title: "text",
      enabled: "enabled",
    },
    prepare({ title, enabled }: any) {
      return {
        title: enabled ? title || "Announcement Bar" : "Announcement Bar (Disabled)",
        subtitle: enabled ? "Enabled" : "Disabled",
      };
    },
  },
};
