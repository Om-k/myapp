import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

// Reuse headers to keep the code clean
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  },
  next: { revalidate: 0.1 }, // Cache for 1 hour
//  cache: 'no-store', // No Cache Dev
};

/**
 * Helper to get full Strapi Media URL
 */
export function getStrapiMedia(url: string | null) {
  // console.log("url",url);
  
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}

// 1. GET ALL SLUGS (For generateStaticParams in [...slug]/page.tsx)
export async function getAllPageSlugs() {
  const url = `${STRAPI_URL}/api/pages?fields[0]=slug`;
  
  const res = await fetch(url, fetchOptions);
  const json = await res.json();
  return json.data || [];
}

// 2. GET SINGLE PAGE BY SLUG (For your 30+ pages)
export async function getPageBySlug(slug: string, locale: string) {
 const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    locale: locale,
    populate: {
      layout_blocks: {
        on: {
          'blocks.hero': {
            populate: '*'
          },
          // 1. Target the Partners block specifically
          'blocks.partners': {
            populate: {
              PartnersList: {
                populate: '*' // This will now get the 'logo' media inside the list
              },
               CommonParameters: {
                populate: '*' // This will now get the 'logo' media inside the list
              },
            }
          },
          // 2. Target your Stats block
          'blocks.expertise-you-can-trust': {
            populate: {
              ExpertiseYouCanTrustList: {
                populate: '*' 
              },
               CommonParameters: {
                populate: '*' // This will now get the 'logo' media inside the list
              },
            }
          },
           'blocks.our-services': {
            populate: {
              Services: {
                populate: '*' // This will now get the 'logo' media inside the list
              },
               CommonParameters: {
                populate: '*' // This will now get the 'logo' media inside the list
              },
            }
          },
          // 3. Target the Heading block
          'shared.heading': {
            populate: '*'
          }
        }
      }
    }
  }, { encodeValuesOnly: true });

  const url = `${STRAPI_URL}/api/pages?${query}`;


  console.log("url",url);
  
  
  // Note: For dynamic pages, we use the same fetchOptions (Auth + Revalidate)
  const res = await fetch(url, fetchOptions);
  const json = await res.json();

  console.log("Page data",json);
  

  

  return json.data?.[0]; 
}

// 3. GET LANDING PAGE (Your specific Homepage logic)
export async function getLandingPage(locale: string) {
  const localeCode = locale ?? "en";
  
  const query = qs.stringify({
    locale: localeCode,
    populate: {
      layout_blocks: {
        populate: "*",
      },
    },
  }, { encodeValuesOnly: true });

  // Use the plural 'landing-pages' if that's how your collection is named
  const url = `${STRAPI_URL}/api/landing-pages?${query}`;

  const res = await fetch(url, fetchOptions);
  const json = await res.json();

  // If it's a Collection Type, return index 0
  return json.data?.[0];
}