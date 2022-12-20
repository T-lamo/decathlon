<script lang="ts">
	import Cart from './../features/boutique/components/cart/Cart.svelte';

	import type { Product } from '$lib/models';
	import { search_engine_store } from '$lib/store/search-engine-store';
	import { onDestroy } from 'svelte';

	$: list_product = [] as Product[];

	search_engine_store.subscribe((value) => {
		list_product = value
	});
</script>

{#if list_product.length > 0}
	<div class="container">
		<ul class="container">
			{#each list_product as item}
				<a href="/product-details/{item.id}">
					<li>
						<Cart product={item} />
					</li>
				</a>
			{/each}
		</ul>
	</div>
{/if}

<style lang="scss">
	.container {
		width: 100%;
		max-height: 500px;
		background: var(--gray-1);
	}
	ul {
		display: flex;
		flex-direction: column;
		li:hover {
			background: var(--gray-2);
		}
		overflow-y: auto;
	}
</style>
