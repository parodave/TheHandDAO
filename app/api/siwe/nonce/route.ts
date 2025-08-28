import { NextResponse } from "next/server";
function rand(n = 16) {
  return Array.from(crypto.getRandomValues(new Uint8Array(n)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
export async function GET() {
  const nonce = rand(16);
  const res = NextResponse.json({ nonce });
  res.cookies.set("siwe_nonce", nonce, { httpOnly: true, sameSite: "lax", secure: true, path: "/" });
  return res;
}
