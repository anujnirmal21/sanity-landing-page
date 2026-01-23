export const headerQuery = `
*[_type == "header"][0]{
  logo{
    asset->{
      url
    }
  },
  navigation[]{
    label,
    href,
    hasDropdown,
    children[]{
      label,
      href
    }
  },
  actions[]{
    label,
    href,
    variant
  }
}
`;
