import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

interface CheckoutItem {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: NextRequest) {
  const { items } = (await req.json()) as { items: CheckoutItem[] };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${req.nextUrl.origin}/cart?success=true`,
    cancel_url: `${req.nextUrl.origin}/cart?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
