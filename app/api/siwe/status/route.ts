import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const member = (req as any).cookies?.get?.("member")?.value === "1";
  return NextResponse.json({ member });
}
