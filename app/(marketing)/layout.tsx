import { client } from "@/sanity/lib/client";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { settingsQuery } from "@/sanity/queries/settingsQuery";
import { headerQuery } from "@/sanity/queries/headerQuery";
import { footerQuery } from "@/sanity/queries/footerQuery";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, header, footer] = await Promise.all([
    client.fetch(settingsQuery),
    client.fetch(headerQuery),
    client.fetch(footerQuery),
  ]);

  return (
    <>
      <AnnouncementBar data={settings?.announcementBar} />
      <Header data={header} />
      {children}
      <Footer data={footer} />
    </>
  );
}
