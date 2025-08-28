import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    // Log minimal côté serveur (visible dans logs Vercel)
    console.log('JOIN_DAO', body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
