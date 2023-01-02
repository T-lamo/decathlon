import type { Product } from '$lib/models';
import { get, writable } from 'svelte/store';
import { store_products } from './product';
import { get_product_category, sort_product_on_segmentation_value } from './utils-store';
function create_search_store() {
	const { subscribe, set, update } = writable<Product[]>([]);
	return {
		subscribe,
		getby_segmentation: (segmentation: string): Product[] => {
			return sort_product_on_segmentation_value(get(store_products), segmentation);
		},
		getby_category: (label_cat: string): Product[] => {
			console.log("category cat", label_cat);
			if (label_cat == "Promotions") {
				return get(store_products).filter((data)=> data.in_sales == true);
			}
			const category = get_product_category(label_cat);
			return get(store_products).filter((data) => data.productCategoryId == category.id);
		},
		getby_cat_seg: ( label_cat: string,segmentation: string): Product[] => {
			let cat_product: Product[]=get(store_products);
			if(label_cat!="all"){
				const category = get_product_category(label_cat);
				cat_product=cat_product.filter((data) => data.productCategoryId == category.id)

			}
			return sort_product_on_segmentation_value(cat_product, segmentation);
		}
		
	};
}

export const search_store = create_search_store();
