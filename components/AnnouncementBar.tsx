type Props = {
  data?: {
    enabled: boolean;
    text: string;
    ctaText: string;
    ctaLink: string;
  };
};

export default function AnnouncementBar({ data }: Props) {
  if (!data?.enabled) return null;

  return (
    <div className="bg-black text-white text-sm text-center py-2">
      {data.text}
      {data.ctaText && (
        <a href={data.ctaLink} className="underline ml-2">
          {data.ctaText}
        </a>
      )}
    </div>
  );
}
