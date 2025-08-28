import { NextResponse } from "next/server";
import { verifyMessage } from "viem/actions";
import { createPublicClient, http, isAddress, type Hex } from "viem";
import { mainnet } from "viem/chains";

export async function POST(req: Request) {
  try {
    const { address, message, signature } = await req.json();
    if (!isAddress(address) || typeof message!=="string" || typeof signature!=="string") {
      return NextResponse.json({ ok:false, error:"bad_request" }, { status: 400 });
    }
    // Check nonce matches cookie
    const nonceCookie = (await (req as any).cookies?.get?.("siwe_nonce"))?.value || "";
    if (!nonceCookie || !message.includes(nonceCookie)) {
      return NextResponse.json({ ok:false, error:"bad_nonce" }, { status: 400 });
    }

    const client = createPublicClient({ chain: mainnet, transport: http() });
    const ok = await verifyMessage(client, { address, message, signature: signature as Hex });
    if (!ok) return NextResponse.json({ ok:false, error:"verify_failed" }, { status: 401 });

    const res = NextResponse.json({ ok:true });
    // 7 jours
    res.cookies.set("member", "1", { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 60*60*24*7 });
    return res;
  } catch {
    return NextResponse.json({ ok:false }, { status: 400 });
  }
}
