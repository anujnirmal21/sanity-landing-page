import PageBuilder from "@/components/PageBuilder";
import { client } from "@/sanity/lib/client";
import { landingPageQuery } from "@/sanity/queries/landingPageQuery";


export default async function LandingPage() {
  const data = await client.fetch(landingPageQuery);

  return (
    <main>
      <PageBuilder sections={data?.pageBuilder || []} />
    </main>
  );
}
