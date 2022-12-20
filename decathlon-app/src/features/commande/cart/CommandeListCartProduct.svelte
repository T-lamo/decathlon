<script lang="ts">
	import type { Product } from '$lib/models';
	import { cart_store } from '$lib/store/cart-store';
	import { onDestroy } from 'svelte';
	import CommandeCart from './CommandeCart.svelte';
	
	let list_product: Product[] = [];
	const unsubscribe=cart_store.subscribe((data)=>list_product=data)
	
	onDestroy(unsubscribe)
</script>

<div class="container">

	<ul class="container">
		{#each list_product as item }
			<li>
				<CommandeCart product={item}/>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
