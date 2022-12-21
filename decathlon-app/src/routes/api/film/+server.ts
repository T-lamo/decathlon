import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const result = await fetch('https://restapi.fr/api/cerimovieautre');
	const data = await result.json();
	return json(data);
}

export async function POST() {
	const result = await fetch('https://restapi.fr/api/cerimovieautre');
	const data = await result.json();
	return json(data);
}
