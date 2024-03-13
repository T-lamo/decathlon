<script lang="ts">
	import { show_panel_recommend } from './../lib/store/ui';
	import type { Product } from '$lib/models';
	//import { search_engine } from '$lib/search-engine/algolia';
	import { cart_store } from '$lib/store/cart-store';
	//import { store_search_engine_result } from '$lib/store/product';
	//import { search_engine_store } from '$lib/store/search-engine-store';
	import { show_side_bar, store_dark_screen } from '$lib/store/ui';
	import { onDestroy } from 'svelte';
	import { search_engine_store } from '$lib/store/search-engine-store';

	$: product_qty = 0;
	$: toogle = false;
	function toggle_sidbar() {
		show_side_bar.update((value) => !value);
	}
	const unsubscribe_cart_store = cart_store.subscribe((data) => {
		product_qty = data.length;
	});

	let search_value = '';

	$: search_engine_store.search(search_value);

	function close_window() {
		show_panel_recommend.set(!toogle);
		toogle = !toogle;
	}
	onDestroy(unsubscribe_cart_store);
</script>

<div class="container">
	<div class="header">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- hide-xl-lg -->
		<ul class="hamberger hide-xl-lg" on:click|stopPropagation={toggle_sidbar}>
			<li>
				<i class="fa-solid fa-bars hamberger" />
			</li>
		</ul>

		<h2 class="logo">
			<a class="logo-txt" href="/"> Decathlon</a>
		</h2>
		<form class="search hide-xs">
			<i class="fa-solid fa-magnifying-glass" />
			<input bind:value={search_value} type="text" placeholder="Recherche" />
		</form>
		<ul>
			<li>
				<a href="/cart">
					<div class="cart_qty">
						<i class="fa-solid fa-cart-shopping" />
						<span class="qty">{product_qty}</span>
					</div>
				</a>
			</li>
			<li>
				<i class="fa-solid fa-user" />
			</li>
			<li>
				<a href="/places">
					<i class="fa-sharp fa-solid fa-map-location" />
				</a>
				<!-- <i class="fa-solid fa-house" /> -->
			</li>
			{#if toogle}
				<li>
					<i class="fa-solid fa-eye" on:click|preventDefault={close_window} />
				</li>
			{:else}
				<li>
					<i class="fa-sharp fa-solid fa-eye-slash" on:click|preventDefault={close_window} />
				</li>
			{/if}

			<li>
				<i class="fa-solid fa-right-to-bracket" />
			</li>

			<!-- <li>
				<i class="fa-solid fa-right-from-bracket" />
			</li> -->
		</ul>
	</div>
	<form class="ctn-search hide-xl-lg-md-sm">
		<i class="fa-solid fa-magnifying-glass" />
		<input bind:value={search_value} id="search" type="text" placeholder="Recherche" />
	</form>
</div>

<style lang="scss" scoped>
	@use './../lib/css/mixin.scss' as mixin;

	.container {
		position: sticky;
		top: 0px;
		display: flex;
		flex-direction: column;
		background: var(--gray-2);
		height: inherit;

		i {
			font-size: 2rem;
		}
		.header {
			display: flex;
			background: var(--primary-1);
			justify-content: space-between;
			align-items: center;
			flex: 1fr;
			height: inherit;
			border-bottom: 1px solid var(--primary-2);
			padding-left: 1rem;
			flex: 1fr;

			.logo {
				font-size: 2.8rem;
				margin-bottom: 0;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: center;
				a {
					font-size: 3rem;
					color: var(--gray-1);
					align-self: center;
					cursor: pointer;
				}
			}
			.search {
				display: flex;
				flex-flow: row nowrap;
				align-self: center;
				max-width: 500px;

				i {
					display: flex;
					align-items: center;
					margin-left: 1rem;
					font-size: 3rem;
				}

				input {
					background: var(--gray-1);
					min-width: 400px;
					padding: 0.8rem;
					margin: 0.5rem 0rem;
					color: var(--text-color);
					font-size: 1.2rem;
					outline: none;
					border: 0;
					border-bottom: 1px solid var(--gray-1);
					border-radius: 4px;
				}
				input:hover {
					border-bottom: 2px solid var(--gray-2);
				}
				ul {
					display: flex;
					align-items: center;
					li {
						align-self: center;
					}
				}
			}

			ul {
				display: flex;
				flex-flow: row nowrap;
			}
			ul li {
				padding: 0.4rem 0.4rem;
				color: var(--gray-1);
				margin-right: 0.8rem;
			}

			ul li a:hover {
				color: var(--gray-1);
			}
			i:hover {
				color: var(--gray-2);
			}
			a {
				color: white;
			}
			.cart_qty {
				display: flex;
				.qty {
					color: var(--gray-1);
					background-color: red;
					border-radius: 50%;
					padding: 2px;
				}
			}
		}

		.ctn-search {
			display: flex;
			margin: 2rem;
			height: 60px;
			width: auto;
			align-self: center;

			i {
				align-self: center;
				margin-left: 1rem;
				font-size: 3rem;
			}
			input {
				padding: 2rem;
				color: var(--gray-3);
				font-size: 2rem;
				outline: none;
				border: 0;
				border: 1px solid var(--gray-1);
			}
			input:hover {
				border: 2px solid var(--gray-1);
			}
		}
	}

	@include mixin.xs {
	}
</style>
