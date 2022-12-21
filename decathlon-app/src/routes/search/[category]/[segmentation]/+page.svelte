<script lang="ts">
	import type { Product } from '$lib/models';
	import { search_store } from '$lib/store/search-store';
	import ListProduct from '../../../../features/boutique/components/product/ListProduct.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container">
	<ListProduct product_list={search_store.getby_cat_seg(data.category,data.segmentation)} />
</div>

<style lang="scss" scoped></style>
