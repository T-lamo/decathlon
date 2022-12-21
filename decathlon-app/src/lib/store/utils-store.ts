import type { Product, ProductCategory } from '$lib/models';
import { categories } from '$lib/recommendation/data';

export function get_product_category(label: string): ProductCategory {
	return categories.filter((data) => data.label == label)[0];
}


export function get_product_on_segmentation_value(arr: Product[], seg: string): Product[] {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return arr.filter((produit)=>(produit.coordinate!.point.get(seg)!)>=5);
	
}
export function sort_product_on_segmentation_value(arr: Product[], seg: string): Product[] {
	return get_product_on_segmentation_value(arr,seg).sort(function (a, b) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return b.coordinate!.point.get(seg)! - a.coordinate!.point.get(seg)!;
	});
}
