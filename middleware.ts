import { NextResponse } from "next/server";
const locales = ["fr","en"];
const defaultLocale = "fr";
export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
export function middleware(req: Request) {
  const { pathname } = new URL(req.url);
  if (locales.some(l => pathname.startsWith(`/${l}`)) || pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
}
