import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }: any) => {

	return { item: params.category };
};
export const prerender = false;
