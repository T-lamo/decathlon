//import type { PageServerLoad } from './$types';
import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/film/$types';
export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`/api/film_db/`);
	const item = await res.json();
	return { item };
};
export const prerender = false;
