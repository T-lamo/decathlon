<script lang="ts">
	import type { Product } from '$lib/models';
	import { cart_store } from '$lib/store/cart-store';

	export let product: Product;
</script>

<div class="items">
	<div class="image" style="background-image: url({product.cover});" />
	<div class="items-details">
		{#if product.name.length > 25}
			<p class="p-name">{product.name.slice(0, 25)}...</p>
		{:else}
			<p class="p-name">{product.name.slice(0, 24)}</p>
		{/if}

		<div class="price">
			{#if product.in_sales}
				<div class="promotion">
					<span class="old_price">{product.price}$</span>
					<span class="reduction">({product.sales_qty}%)</span>
				</div>
			{/if}
			<span class="p-prix">{product.get_product_price()}$</span>
		</div>
		<p>En stock: 10</p>
		<div class="line-separator" />
	</div>
	<div class="icons">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i
			class="fa-solid fa-cart-shopping"
			on:click|preventDefault={() => cart_store.add_product(product)}
		/>
	</div>
</div>

<style lang="scss" scoped>
	.items {
		display: flex;
		flex-flow: column;
		background: white;
		border: 1px solid #ddd;
		height: 350px;
		p {
			padding: 0.4px !important;
			margin: 0px !important;
		}

		.image {
			background-size: cover;
			background-position: center;
			min-height: 200px !important;
		}

		.p-name {
			font-weight: 600;
		}
		.items-details {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			align-items: center;
			color: #666;
			min-height: 80px;
			.price {
				display: flex;
				flex-direction: column;
				align-items: center;
				.promotion {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				.old_price {
					text-decoration: line-through;
					padding-right: 2rem;
				}
				.reduction {
					color: red;
				}
				.p-prix {
					font-weight: 400;
					font-size: medium;
				}
			}
		}

		.icons {
			display: flex;
			justify-content: end;
			padding: 0.2rem;
			i {
				color: var(--primary-1);
			}
			i:hover {
				color: var(--primary-2);
			}
		}
	}
</style>
