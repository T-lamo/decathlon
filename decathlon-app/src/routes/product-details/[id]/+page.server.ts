import type { PageServerLoad } from './$types';
//import type { PageServerLoad } from '../../../../.svelte-kit-bad/types/src/routes/film/$types';

export const load: PageServerLoad = async ({ fetch, params }: any) => {
	//console.log('testt', params);
	const res = await fetch(`/api/film/`, { method: 'POST' });
	//const item = await res.json();
	console.log('idd',params.id )
	return { item: params.id };
};
export const prerender = false;
