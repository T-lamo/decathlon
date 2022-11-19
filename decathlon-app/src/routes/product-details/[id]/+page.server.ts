//import type { PageServerLoad } from './$types';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/film/$types';
export const load: PageServerLoad = async ({ fetch, params }) => {
	console.log('testt', params);
	const res = await fetch(`/api/film/`, { method: 'POST' });
	const item = await res.json();
	return { item };
};
export const prerender = false;
