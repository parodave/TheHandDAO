// app/api/commerce/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Commerce from 'coinbase-commerce-node'
const { Webhook } = Commerce

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('x-cc-webhook-signature') || ''
  try {
    const event = Webhook.verifyEventBody(
      rawBody,
      signature,
      process.env.COMMERCE_WEBHOOK_SHARED_SECRET as string
    )
    // TODO: marquer paiement validé (code event.type === 'charge:confirmed')
    return NextResponse.json({ ok: true })
  } catch (e) {
    return new NextResponse('invalid signature', { status: 400 })
  }
}

