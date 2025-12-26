// lib/get-landing-page.ts
export async function getLandingPage(locale: string) {
  console.log("Locale",locale);
  
    const localeCode = locale ?? "en"
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/landing-page?locale=${localeCode}&populate[layout_blocks][populate]=*`;
  
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 0.1 }, // Cache for 1 hour
  });

  const json = await res.json();
  // console.log("Gotten data",json);
  
  return json.data; // Returns the first landing page object
}