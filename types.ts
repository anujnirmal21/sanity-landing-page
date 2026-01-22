export type HeaderProps = {
  data: {
    logo: {
      asset: {
        url: string;
      };
      alt?: string;
    };
    navigation: {
      label: string;
      href: string;
      hasDropdown?: boolean;
    }[];
    actions: {
      label: string;
      href: string;
      variant: 'link' | 'primary';
    }[];
  };
};

export type Section2CMS = {
  headline?: string;
  subheadline?: string;
  paragraphs?: string[];
  cta?: {
    label?: string;
    href?: string;
  };
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export type TestimonialData = {
  header: {
    line1: string;
    line2: string;
  };
  testimonials: {
    vipul: {
      image: string;
      name: string;
      companyLogoText: string;
      review: string;
      authorName: string;
      authorRole: string;
    };
    benny: {
      image: string;
      name: string;
      companyLogoText: string;
      review: string;
      authorName: string;
      authorRole: string;
    };
    leah: { image: string; name: string; companyLogoText: string };
    nikki: { image: string; name: string; companyLogoText: string };
  };
};


export type ChartItem = {
  label: string;
  value: number | string;
  score: number;
  isHighlight?: boolean;
};

export type ComparisonSectionData = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  chartTitle: string;
  chartData: ChartItem[];
  inkImageSrc: string;
};

export type ComparisonSectionProps = {
  data: ComparisonSectionData;
};
