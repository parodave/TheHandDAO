import { NextResponse } from "next/server";
export async function POST() {
  const res = NextResponse.json({ ok:true });
  res.cookies.set("member", "", { httpOnly:true, sameSite:"lax", secure:true, path:"/", maxAge:0 });
  return res;
}
