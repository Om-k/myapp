import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'kn','ar'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 2. Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Optional: You could detect user's browser language here, 
    // but for now, we just force the default locale.
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring internal next.js files, static assets, etc.
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
  ],
};