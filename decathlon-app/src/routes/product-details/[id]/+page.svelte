<script lang="ts">
	import ProductDetails from '../../../features/boutique/components/product/ProductDetails.svelte';
	import { show_side_bar } from '$lib/store/ui';
	import { onMount } from 'svelte';
	import type { PageData } from '../../$types';
	import { Product } from '$lib/models';
	import { store_profiling, store_search_engine_result } from '$lib/store/product';
	import { Profiling } from '$lib/recommendation/model';
	import { get } from 'svelte/store';
	import { search_engine_store } from '$lib/store/search-engine-store';

	export let data: PageData;
	$: product = new Product({}) 
	onMount(() => {
		search_engine_store.reset();
		//side bar component management
		show_side_bar.update((value) => true);
		//Update item clicked
		// const item: Product=products.filter((product) => product.id==params.id)[0];
	    // console.log("item", item.coordinate?.point)
		
		if('item' in data){
			const id = data.item;
			product = get(store_profiling).all_products.filter((product)=> product.id == id)[0] as Product;
			store_profiling.update((profilling)=>{
				if(profilling.clic_products.filter((p)=> p.id == product.id).length==0){
					profilling.clic_products=[...profilling.clic_products, product];
				}
				return profilling;
			})
		}
		console.log("inside redirection");
	});
</script>

<div class="container">
	<ProductDetails {product} />
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
