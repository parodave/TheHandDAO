// app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

export async function POST(req: NextRequest) {
  const { amount = 999, name = 'The Hand — Membership' } = await req.json()
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name },
          unit_amount: Math.round(Number(amount) * 100),
        },
        quantity: 1,
      },
    ],
    success_url: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL!,
    cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL!,
  })
  return NextResponse.json({ url: session.url })
}

