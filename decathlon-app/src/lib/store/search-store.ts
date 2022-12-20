import type { Product } from '$lib/models';
import { get, writable } from 'svelte/store';
import { store_products } from './product';
import { get_product_category } from './utils-store';
function create_search_store(){
    const {subscribe,set,update}=writable<Product[]>([]);
    return {
        subscribe,
        getby_segmentation:(segmentation:string):Product[] => {
            get(store_products).filter(data=>{
                console.log(data.coordinate?.point);
            })
            return get(store_products);
        },
        getby_category: (label_cat: string):Product[] => {
            const category=get_product_category(label_cat);
            return get(store_products).filter(data=>data.productCategoryId==category.id);
        },
        getby_seg_cat: (seg: string, category: string):Product[]=> {
            return get(store_products);

        },
        getby_cat_seg: (category: string, seg: string):Product[]=> {
            return get(store_products);

        },
    }
}

export const search_store = create_search_store();