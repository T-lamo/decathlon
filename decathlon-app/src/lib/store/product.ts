import type { Product } from '$lib/models';
import { products, segmentations } from '$lib/recommendation/data';
import { Profiling } from '$lib/recommendation/model';
import { writable } from 'svelte/store';

export const store_products = writable<Product[]>(products);
//export const clic_products = writable<Product[]>([]);
export const store_profiling = writable<Profiling>(new Profiling({axes:segmentations,all_products:products}))
export const store_product_propostion = writable<{prod: Product, dist:number}[]>();
export const store_cart_recaputilatif=writable<{price:number, qty:number}>({price:0, qty:0})
export const store_search_engine_result = writable<Product[]>([]);

