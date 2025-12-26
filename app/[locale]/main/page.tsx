import { getLandingPage } from "@/lib/get-landing-page";
import Hero from "@/components/blocks/Hero";
import Stats from "@/components/blocks/Stats";

// 1. Update the type definition: params is now a Promise
export default async function Page({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  
  // 2. Await the params before using them
  const { locale } = await params;

  // 3. Now you can use the locale variable safely
  const pageData = await getLandingPage(locale);

  if (!pageData) return <div>Content not found</div>;

  return (
    <main>
      {pageData.layout_blocks.map((block: any) => {
        switch (block.__component) {
          case "blocks.hero":
            return <Hero key={block.id} data={block} />;
          case "blocks.expertise-you-can-trust":
            return <Stats key={block.id} data={block} />;
          default:
            return null;
        }
      })}
    </main>
  );
}