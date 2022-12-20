import type { Product } from '$lib/models';
import { writable } from 'svelte/store';
function create_cart_store() {
	const { subscribe, set, update } = writable<Product[]>([]);

	return {
		subscribe,
		add_product: (product: Product) =>
			update((cart_product) => {
				cart_product.push(product);
				return cart_product;
			}),

		remove_product: (product: Product) =>
			update((cart_product) => {
				const index = cart_product.indexOf(product);
				cart_product.splice(index, 1);
				return cart_product;
			}),

		increment_single_qty: (product: Product) =>
			update((cart_product) => {
				return cart_product.map((value, index, arr) => {
					if (value.id == product.id) {
						arr[index].qty += 1;
					}
					return arr[index];
				});
			}),
		decrement_single_qty: (product: Product) =>
			update((cart_product) => {
				return cart_product.map((value, index, arr) => {
					if (value.id == product.id) {
						if (arr[index].qty > 1) {
							arr[index].qty -= 1;
						}
					}
					return arr[index];
				});
			})
	};
}

export const cart_store = create_cart_store();
