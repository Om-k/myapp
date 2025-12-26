import { notFound } from "next/navigation";
import { getPageBySlug, getAllPageSlugs } from "@/lib/strapi";
import BlockManager from "@/components/BlockManager";

// PRE-RENDER ALL PAGES (Performance Boost)
export async function generateStaticParams() {
  const pages = await getAllPageSlugs();
  
  return pages.map((page: any) => ({
    slug: page.slug.split("/"),
  }));
}

export default async function DynamicPage({ params }: { params: any }) {
  const { locale, slug } = await params;

  
  
  // Convert array ["services", "it-solutions"] to "services/it-solutions"
  const path = slug.join("/"); 
  // console.log("SlugGotten",slug,path);


  // Fetch data from Strapi using the filter
  const pageData = await getPageBySlug(path, locale);

  if (!pageData) return notFound();

  return (
    <main>
      <BlockManager blocks={pageData.layout_blocks} />
    </main>
  );
}