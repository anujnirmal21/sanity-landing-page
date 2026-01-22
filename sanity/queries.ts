export const settingsQuery = `
*[_type == "settings"][0]{
  announcementBar
}
`;

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
    hasDropdown
  },
  actions[]{
    label,
    href,
    variant
  }
}
`;

export const footerQuery = `
*[_type == "footer"][0]{
  "logo": {
    "src": logo.asset->url,
    "alt": "Footer logo"
  },
  columns[]{
    title,
    links[]{
      label,
      href
    }
  },
  newsletter{
    heading,
    description,
    placeholder,
    buttonLabel
  },
  copyright,
  legalLinks[]{
    label,
    href
  },
  socials[]{
    name,
    href,
    "icon": icon.asset->url
  },
  credit{
    text,
    links[]{
      label,
      href
    }
  }
}
`;


export const heroQuery = `
hero{
  eyebrow,
  title,
  description,
  ctas[]{
    label,
    href,
    variant
  },
  image{
    asset->{
      url
    }
  }
}
`;

export const sponsorsQuery = `
sponsors{
  logos[]{
    name,
    image{
      asset->{
        url
      }
    }
  }
}
`;

export const section2Query = `
section2{
  headline,
  subheadline,
  paragraphs,
  cta{
    label,
    href
  },
  image{
    asset->{
      url
    }
  }
}
`;
export const featureSectionsQuery = `
featureSections[]{
  layout,
  tag{
    text,
    color
  },
  title,
  tabs[]{
    title,
    description
  },
  cta{
    label,
    href
  },
  "imageSrc": image.asset->url
}
`;

export const testimonialsSectionQuery = `
testimonialsSection{
  header{
    line1,
    line2
  },
  testimonials{
    vipul{
      "image": image.asset->url,
      name,
      companyLogoText,
      review,
      authorName,
      authorRole
    },
    benny{
      "image": image.asset->url,
      name,
      companyLogoText,
      review,
      authorName,
      authorRole
    },
    leah{
      "image": image.asset->url,
      name,
      companyLogoText
    },
    nikki{
      "image": image.asset->url,
      name,
      companyLogoText
    }
  }
}
`;

export const comparisonSectionQuery = `
  comparisonSection {
    heading,
    description,
    statsTitle,
    button {
      text,
      url
    },
    backgroundImage {
      asset->{
        _id,
        url
      }
    },
    competitors[] {
      _key,
      name,
      score,
      barImage {
        asset->{
          _id,
          url
        }
      }
    }
  }
`;

export const heroCarouselQuery = `
  heroCarousel {
    heading,
    subheading,
    items[] {
      _key,
      title,
      description,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }
`;

export const faqSectionQuery = `
  faqSection {
    eyebrow,
    heading,
    subheading,
    items[] {
      _key,
      question,
      answer
    }
  }
`

export const promoSectionQuery = `
  promoSection {
    title,
    cta {
      label,
      href
    },
    backgroundImage {
      asset->{
        _id,
        url
      }
    }
  }
`

export const articleSectionQuery = `
  articleSection {
    headline,
    description,
    stat {
      label,
      value,
      context
    },
    cta {
      label,
      href
    }
  }
`
export const marketingSectionQuery = `
marketingSection {
  title,
  description,
  content,
  cta {
    text,
    url
  },
  illustration {
    asset->{
      _id,
      url
    },
    alt
  }
}
`;


export const landingPageQuery = `
*[_type == "landingPage"][0]{
  ${heroQuery},
  ${sponsorsQuery},
  ${section2Query},
  ${featureSectionsQuery},
   ${testimonialsSectionQuery},
   ${comparisonSectionQuery},
   ${heroCarouselQuery},
   ${faqSectionQuery},
   ${promoSectionQuery},
   ${articleSectionQuery},
   ${marketingSectionQuery}
}
`;
