import { PRIVATE_STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import { stripe } from '$lib/payment';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({req} : any) {
	let data;
  let eventType;
  // Check if webhook signing is configured.
  if (PRIVATE_STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    const signature = req.headers["stripe-signature"];
    console.log("inside webhook");
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        PRIVATE_STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return json("res.sendStatus(400)");
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed") {
    console.log(`🔔  Payment received!`);
  }

  return json("ok");
}


