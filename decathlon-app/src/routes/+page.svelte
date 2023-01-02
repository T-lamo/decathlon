<script lang="ts">
	import ProductDetails from './../features/boutique/components/product/ProductDetails.svelte';
	import ListSegmentation from './../features/boutique/components/magasin/segmentation/ListSegmentation.svelte';
	import ListCartProduct from './../features/boutique/components/cart/ListCartProduct.svelte';
	import ListProduct from '../features/boutique/components/product/ListProduct.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import ListComments from '../features/boutique/components/product/comments/ListComments.svelte';
	import Sidebar from './../components/Sidebar.svelte';
	import { onMount } from 'svelte';
	import CartProduct from './../features/boutique/components/cart/CartProduct.svelte';
	import { show_side_bar } from '$lib/store/ui';
	import { covers, decathlon_products } from '$lib/recommendation/data';
	import { decathlon_profiling } from '$lib/recommendation';
	import { make_product_proposition } from '$lib/recommendation/utils';
	import {  store_products } from '$lib/store/product';
	import { algolia_insert } from '$lib/search-engine/algolia';
	import { seed20ProductCover } from '$lib/data/seed';
	import { get } from 'svelte/store';
	

	onMount(async () => {
		show_side_bar.update((value) => true);
		store_products.set(decathlon_products); 
		// console.log("decathlon product",decathlon_products);
		// console.log("profiling", decathlon_profiling);
		// console.log("decathlon proposition",make_product_proposition(decathlon_profiling,2))
		// algolia_insert(decathlon_products);
		
		//seed20ProductCover("covers")
		
		// ;
		
	});

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<div class="main-cart">
		<div class="main">
			<div class="segmentation">
				<h1>Rien que pour vous!</h1>
				<ListSegmentation category="all"/>
			</div>

			<div class="promotion">
				<h1>Nos promotions</h1>
				<ListProduct product_list={get(store_products).filter(product=>product.in_sales==true)} />
			</div>

			<div class="promotion">
				<h1>Nos produits</h1>
				<ListProduct product_list={get(store_products).filter(product=>product.in_sales==false)} />
			</div>

<!-- 			
			<div class="proposition">
				<h1>Ce que nous vous proposons!</h1>

				<ListProduct product_list={[]}/>
			</div> -->
		</div>
		<div class="cart hide-xl-lg-md-sm-xs">
			<CartProduct />
		</div>
	</div>

	<!-- <div class="comments">
		<ListComments></ListComments>
	</div> -->
</section>

<style lang="scss" scoped>
	@use './../lib/css/base.scss';
	@use './../lib/css/mixin.scss' as mixin;

	.container {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 1401px) {
			.main-cart {
				display: grid;
				grid-template-areas: 'm c';
				grid-template-columns: 1fr 250px;
				gap: 1rem;

				.main {
					grid-area: m;
				}
				.cart {
					grid-area: c;
					background: var(--gray-1);
					padding: 1rem;
					height: max-content;
				}
			}
		}

		@media screen and (max-width: 1400px) {
			.main-cart {
				display: grid;
				grid-template-areas: 'm';
				grid-template-columns: 1fr;
				gap: 1rem;

				.main {
					grid-area: m;
				}
			}
		}
	}
</style>
