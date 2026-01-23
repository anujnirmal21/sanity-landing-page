export const settingsQuery = `
*[_type == "settings"][0]{
  announcementBar{
    enabled,
    text,
    variant,
    cta{
      label,
      href
    }
  }
}
`;
