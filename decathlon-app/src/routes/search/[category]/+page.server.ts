import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }: any) => {
	const res = await fetch(`/api/film/`, { method: 'POST' });
	//const item = await res.json();
	return { item: params.id };
};
export const prerender = false;
