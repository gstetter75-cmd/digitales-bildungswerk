import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return new Response(
      JSON.stringify({ error: 'Stripe is not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const stripe = new Stripe(stripeKey);

  try {
    const body = await request.json();
    const { slug, title, preis } = body;

    if (!slug || !title || !preis) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: title,
              description: `Kursanmeldung: ${title}`,
            },
            unit_amount: Math.round(preis * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/kurse/${slug}?success=true`,
      cancel_url: `${origin}/kurse/${slug}?cancelled=true`,
      metadata: { kurs_slug: slug },
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
