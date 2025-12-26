export function getStrapiMedia(url: string | null) {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("//")) return url;
  
  // Point this to your Strapi backend
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${STRAPI_URL}${url}`;
}