<script lang="ts">
	import { search_store } from '$lib/store/search-store';
	import ListSegmentation from '../../../features/boutique/components/magasin/segmentation/ListSegmentation.svelte';
	import ListProduct from '../../../features/boutique/components/product/ListProduct.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
</script>
<div class="container">
	<div class="segmentation">
		<h1>Rien que pour vous!</h1>
		<ListSegmentation category={data.item} />
	</div>
	<div class="promotion">
		<h1>Nos produits</h1>
		<ListProduct product_list={search_store.getby_category(data.item)} />
	</div>


</div>
<style lang="scss" scoped></style>