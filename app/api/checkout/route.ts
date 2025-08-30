import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function POST(req: Request) {
  try {
    const { qty, wallet, locale } = await req.json();
    if (!qty || qty < 1 || qty > 999) return NextResponse.json({ error: "qty invalide" }, { status: 400 });
    if (!wallet) return NextResponse.json({ error: "wallet requis" }, { status: 400 });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
    const successUrl = `${siteUrl}/${locale || "fr"}/dashboard?paid=1`;
    const cancelUrl = `${siteUrl}/${locale || "fr"}/dashboard?canceled=1`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: { name: "The Hand — Membership NFT" },
          unit_amount: 99900,
        },
        quantity: qty,
      }],
      metadata: { wallet, qty: String(qty) },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ url: session.url });
  } catch (e:any) {
    return NextResponse.json({ error: e.message || "stripe error" }, { status: 500 });
  }
}
