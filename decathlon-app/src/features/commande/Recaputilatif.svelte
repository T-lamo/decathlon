<script lang="ts">
	import type { Product } from "$lib/models";
	import { cart_store } from "$lib/store/cart-store";
	import { onDestroy } from "svelte";

	let recap: { price: number; qty: number }={price:0, qty:0};

	const unsubscribe_cart_store=cart_store.subscribe((data)=>{
              recap= data.reduce<{ price: number; qty: number }>(
                    (previous: { price: number; qty: number }, curr: Product) => {
                        previous.price += curr.price * curr.qty;
                        previous.qty += curr.qty;
                        return previous;
                    },
                    { price: 0, qty: 0 }
                );
            })
	onDestroy(unsubscribe_cart_store);
</script>

<div class="container">
	<h1>Récaputilatif</h1>
	<div class="line" />
	<div class="main">
		<div class="info">
			<span> Sous total: {recap.qty} articles</span>
			<span> ${recap.price}</span>
		</div>
		<span>Frais de livraison: Calcule à l'étape suivant</span>
		  		

	</div>

	<div class="line" />
	<button class="btn btn-primary">Passer la commande</button>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background: var(--gray-1);
		min-height: 200px;
		padding: 1rem;
		.main {
			flex-grow: 1;
			padding: 1rem;
			font-size: 1rem;
			.info {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
