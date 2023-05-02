import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(request: NextApiRequest, response: NextApiResponse) {
  const priceId = ''
  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelURL = `${process.env.NEXT_URL}/`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelURL
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}