<script lang="ts">
	import type { Product } from '$lib/models';
	import { search_store } from '$lib/store/search-store';
	import ListProduct from '../../../../features/boutique/components/product/ListProduct.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div class="container">
	<h1>{capitalize(data.segmentation)}</h1>
	<ListProduct product_list={search_store.getby_cat_seg(data.category, data.segmentation)} />
</div>

<style lang="scss" scoped>
	h1 {
		font-size: 3rem;
	}
</style>
