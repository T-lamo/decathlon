import type { Product } from '$lib/models';
import { search_engine } from '$lib/search-engine/algolia';
import { get, writable } from 'svelte/store';
import { store_dark_screen } from './ui';

function create_search_engine_store() {
	const { subscribe, set } = writable<Product[]>([]);
	return {
		subscribe,
		search: (text: string) => {
			search_engine(text).then((data: any) => {
				if (data.length > 0 && text.length > 0) {
					set(data);
					store_dark_screen.set(true);
				} else {
					store_dark_screen.set(false);
					set([]);
				}
			});
		},
		reset: () => {
			store_dark_screen.set(false);
			set([]);
		}
	};
}

export const search_engine_store = create_search_engine_store();
