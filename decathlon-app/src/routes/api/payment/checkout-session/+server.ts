import { stripe } from '$lib/payment';
import { json } from '@sveltejs/kit';


/** @type {import('./$types').RequestHandler} */
export async function GET({request}: any) {
	const { sessionId } = request.query;
	const session = await stripe.checkout.sessions.retrieve(sessionId);
	json(session);
}
