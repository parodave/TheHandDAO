import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { mintNftMock } from "@/lib/web3/contracts";
import { writeContract } from "wagmi/actions";
import { abi as erc721Abi } from "@/lib/web3/erc721mintable_abi";

export const config = { api: { bodyParser: false } } as any;

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

  let event: Stripe.Event;
  const buf = await req.arrayBuffer();
  try {
    event = stripe.webhooks.constructEvent(Buffer.from(buf), sig!, secret);
  } catch (err:any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const qty = Number(session.metadata?.qty || 0);
    // Option A: mock
    if (!process.env.NEXT_PUBLIC_NFT_ADDRESS) {
      await mintNftMock(qty);
    } else {
      // Option B: TODO — exécuter le mint serveur avec un relayer (à câbler selon ton infra)
      await mintNftMock(qty);
    }
  }

  return NextResponse.json({ received: true });
}
