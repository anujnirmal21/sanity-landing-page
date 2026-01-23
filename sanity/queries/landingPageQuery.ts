export const landingPageQuery = `
*[_type == "landingPage"][0]{
  pageBuilder[]{
    _key,
    _type,

    ...select(
      // ---------------- HERO ----------------
      _type == "heroSection" => {
        eyebrow,
        title,
        description,
        ctas,
        "backgroundImage": backgroundImage.asset->url
      },

      // ---------------- HERO CAROUSEL ----------------
      _type == "heroCarousel" => {
        heading,
        subheading,
        items[]{
          _key,
          title,
          description,
          image {
            asset->{ url },
            alt
          }
        }
      },

      // ---------------- SPONSORS ----------------
      _type == "sponsorsSection" => {
        logos[]{
          _key,
          name,
          image {
            asset->{ url }
          },
          url
        }
      },

      // ---------------- FEATURE ----------------
      _type == "featureSection" => {
        layout,
        tag,
        title,
        tabs,
        cta,
        "imageSrc": image.asset->url
      },

      // ---------------- TESTIMONIALS ----------------
      _type == "testimonialsSection" => {
        header,
        testimonials
      },

      // ---------------- COMPARISON ----------------
      _type == "comparisonSection" => {
        heading,
        description,
        statsTitle,
        button,
        backgroundImage {
          asset->{ url }
        },
        competitors[]{
          _key,
          name,
          score,
          barImage {
            asset->{ url }
          }
        }
      },

      // ---------------- FAQ ----------------
      _type == "faqSection" => {
        eyebrow,
        heading,
        subheading,
        items[]{
          _key,
          question,
          answer
        }
      },

      // ---------------- MARKETING ----------------
      _type == "marketingSection" => {
        title,
        description,
        content,
        cta,
        illustration {
          asset->{ url },
          alt
        }
      },

      // ---------------- PROMO ----------------
      _type == "promoSection" => {
        title,
        cta,
        backgroundImage {
          asset->{ url }
        }
      },

      // ---------------- ARTICLE ----------------
      _type == "articleSection" => {
        headline,
        description,
        stat,
        cta
      }
    )
  }
}
`;
