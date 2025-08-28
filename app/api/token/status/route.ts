import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {
  try {
    // @ts-ignore
    const token = (req as any).cookies?.get?.("hand_token")?.value;
    if (!token) return NextResponse.json({ ok:false });
    const p = await verifyToken(token);
    return NextResponse.json({ ok:true, sub:p.sub, admin: !!p.admin });
  } catch {
    return NextResponse.json({ ok:false });
  }
}

