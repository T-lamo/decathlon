<script lang="ts">
	import type { Product } from '$lib/models';
	import ProductComp from './ProductComp.svelte';
	export let product_list: Product[];
</script>

<ul class="container">
	{#each product_list as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a href="/product-details/{item.id}">
			<li>
				<ProductComp product={item} />
			</li></a
		>
	{/each}
</ul>

<style lang="scss">
	.container {
		gap: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
	}
	li {
		cursor: pointer;
	}
</style>
