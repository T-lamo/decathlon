import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }: any) => {

	return { segmentation: params.segmentation, category: params.category };
};
export const prerender = false;
