<script lang="ts">
	import type { Product } from '$lib/models';
	import { cart_store } from '$lib/store/cart-store';
	

	export let product: Product;
	$: total = product.qty * product.price;
	 
	let image: string =
		'https://images.unsplash.com/photo-1603884574615-7b6ec4198a8c?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwzNDF8fG1vdmllfGVufDB8fHx8MTY2ODY0MjgyMQ&ixlib=rb-4.0.3&w=500&h=1000';
</script>

<div class="container">
	<div class="image" style="background-image: url({product.cover});" />
	<div class="main">
		<h2>{product.name}</h2>
		<div class="line" />
		<div class="description">
			<h3>Description</h3>
			<p>
				{product.desc}
			</p>
		</div>
		<div class="line" />
		<div class="price">
			<span class="btn btn-primary">$ {product.price}</span>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fa-solid fa-minus" on:click={()=>cart_store.decrement_single_qty(product)} />
				<span class="btn btn-primary">{product.qty}</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fa-solid fa-plus" on:click={()=>cart_store.increment_single_qty(product)} />
			</div>
			<span class="btn btn-primary">${total}</span>
		</div>
		<div class="line" />
		<div class="icons">
			<span><i class="fa-solid fa-heart" /></span>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span><i class="fa-solid fa-trash" on:click={()=>cart_store.remove_product(product)} /></span>
				<span><i class="fa-sharp fa-solid fa-pen" /> </span>
			</div>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.container {
		background: var(--gray-1);
		padding: 1rem;
		display: grid;
		grid-template-columns: 200px 1fr;
		height: max-content;
		gap: 1rem;
		.image {
			height: 200px;
			align-self: center;
		}
		.main {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-self: center;
			.price {
				display: flex;
				justify-content: space-between;
				span {
					font-size: 1.5rem;
					padding: 1rem;
				}
			}

			.icons {
				display: flex;
				justify-content: space-between;
			}
		}

		i {
			color: var(--primary-1);
			padding: 1rem;
		}
		i:hover {
			color: var(--primary-2);
		}
	}
</style>
