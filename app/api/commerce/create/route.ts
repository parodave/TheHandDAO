// app/api/commerce/create/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Commerce from 'coinbase-commerce-node'
const { Client, resources } = Commerce
const { Charge } = resources
Client.init(process.env.COMMERCE_API_KEY as string)

export async function POST(req: NextRequest) {
  const { name = 'The Hand — Membership', amount = 999 } = await req.json()
  const charge = await Charge.create({
    name,
    pricing_type: 'fixed_price',
    local_price: { amount: String(amount), currency: 'USD' },
  })
  return NextResponse.json({ hosted_url: charge.hosted_url, code: charge.code })
}

