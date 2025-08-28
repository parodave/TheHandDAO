import { NextResponse } from "next/server";
import { issueToken } from "@/lib/jwt";
import { isAdminAddress, isMemberServer } from "@/lib/serverMembership";

export async function POST(req: Request) {
  try {
    const { address } = await req.json() as { address?: string };
    if (!address) return NextResponse.json({ ok:false, error:"no_address" }, { status: 400 });
    const member = await isMemberServer(address);
    if (!member) return NextResponse.json({ ok:false, error:"not_member" }, { status: 403 });
    const admin = isAdminAddress(address);
    const jwt = await issueToken({ sub: address, admin });
    const res = NextResponse.json({ ok:true, admin });
    res.cookies.set("hand_token", jwt, { httpOnly:true, sameSite:"lax", secure:true, path:"/", maxAge:60*60*24 });
    return res;
  } catch {
    return NextResponse.json({ ok:false }, { status: 400 });
  }
}

