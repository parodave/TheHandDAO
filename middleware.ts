import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/member") && !pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  const token = req.cookies.get("hand_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/join", req.url));
  try {
    const p = await verifyToken(token);
    if (pathname.startsWith("/admin") && !p.admin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/join", req.url));
  }
}

export const config = {
  matcher: ["/member/:path*", "/admin/:path*"],
};

