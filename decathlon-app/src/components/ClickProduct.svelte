<script lang="ts">
	import type { Product } from '$lib/models';
	import { cart_store } from '$lib/store/cart-store';
	import { store_profiling } from '$lib/store/product';
	import Cart from '../features/boutique/components/cart/Cart.svelte';
	
	let list_product:Product[]=[];
	store_profiling.subscribe((data)=>{
        list_product = data.clic_products as Product[];
    })

	
</script>

<div class="container">
	<ul class="container">
		{#each list_product as item}
			<li>
				<Cart product={item}/>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss" scoped>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px 1fr));
		gap: 1rem;
		li:hover {
			background: var(--gray-2);
		}
	}
</style>
