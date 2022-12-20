<script lang="ts">
	import type { Product } from '$lib/models';
	import { cart_store } from '$lib/store/cart-store';
	import { get } from 'svelte/store';
	import Cart from './Cart.svelte';
	
	let list_product:Product[]=[];
	cart_store.subscribe(data=>{
		list_product = data;
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
	<h1>Total: 0$</h1>
</div>

<style lang="scss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px 1fr));
		gap: 1rem;
		li:hover {
			background: var(--gray-2);
		}
	}
</style>
