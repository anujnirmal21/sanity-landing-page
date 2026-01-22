export default {
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "announcementBar",
      title: "Announcement Bar",
      type: "object",
      fields: [
        { name: "enabled", type: "boolean" },
        { name: "text", type: "string" },
        { name: "ctaText", type: "string" },
        { name: "ctaLink", type: "string" },
      ],
    },
  ],
};
