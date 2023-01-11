import type { IProduct } from '$lib/interfaces';
import type { Product } from '$lib/models';
import { products, segmentations, user_init_position } from '$lib/recommendation/data';
import { Profiling } from '$lib/recommendation/model';
import { writable } from 'svelte/store';

export const store_products = writable<Product[]>(products);
//export const clic_products = writable<Product[]>([]);
export const store_profiling = writable<Profiling>(new Profiling({axes:segmentations,all_products:products}))
export const store_product_propostion = writable<IProduct[]>();
export const store_cart_recaputilatif=writable<{price:number, qty:number}>({price:0, qty:0})
export const store_search_engine_result = writable<Product[]>([]);
export const store_recommend_product = writable<{ prod: IProduct; dist: number }[]>([]);
export const store_user_position = writable<{segmentation:string,value:number}[]>(user_init_position());
