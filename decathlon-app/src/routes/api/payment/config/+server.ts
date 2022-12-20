import { PRICE, PRIVATE_STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public';
import { json } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15',
  });
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	// const result = await fetch('https://restapi.fr/api/cerimovieautre');
	// const data = await result.json();
	// return json(data);
	const price = await stripe.prices.retrieve(PRICE);
	return json({
	  publicKey: PUBLIC_STRIPE_PUBLISHABLE_KEY,
	  unitAmount: price.unit_amount,
	  currency: price.currency,
	});
}


