import { client } from "@/sanity/lib/client";
import { settingsQuery, headerQuery, footerQuery } from "@/sanity/queries";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch(settingsQuery);
  const header = await client.fetch(headerQuery);
  const footer = await client.fetch(footerQuery)

  return (
    <>
      <AnnouncementBar data={settings?.announcementBar} />
      <Header data={header} />
      {children}
      <Footer data={footer} />
    </>
  );
}
