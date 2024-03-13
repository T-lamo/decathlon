<script lang="ts">
	import ScreenDark from './../components/Screen-dark.svelte';
	import Sidebar from './../components/Sidebar.svelte';
	import Header from './../components/Header.svelte';
	import Footer from './../components/Footer.svelte';
	import ProductRange from './../components/ProductRange.svelte';

	import './../lib/css/base.scss';
	import './../lib/css/debug.scss';
	import './../lib/css/reset.scss';
	import { show_panel_recommend, show_side_bar, store_dark_screen } from '$lib/store/ui';
	import Search from './../components/Search.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { search_engine_store } from '$lib/store/search-engine-store';
	import { seed20ProductCover } from '$lib/data/seed';
	import { read_cover, decathlon_products } from '$lib/recommendation/data';
	import { algolia_insert } from '$lib/search-engine/algolia';
	import { store_products } from '$lib/store/product';
	let is_show_side_bar: boolean = false;
	let show_dark_scren: boolean = false;
	let show_panel: boolean = false;
	const unsubscribe_show_side_bar = show_side_bar.subscribe((value) => (is_show_side_bar = value));

	const unsubscribe_show_dark_scren = store_dark_screen.subscribe(
		(value) => (show_dark_scren = value)
	);
	const unsubscribe_show_panel_recommend = show_panel_recommend.subscribe((data: boolean) => {
		show_panel = data;
	});

	onMount(async () => {
		show_side_bar.update((value) => true);
		await read_cover().then((covers) => {
			decathlon_products.forEach((data, index) => (data.cover = covers[index]['image']));

			if (decathlon_products[0].cover.length == 0) {
				seed20ProductCover('covers');
				seed20ProductCover('covers');
				seed20ProductCover('covers');
				console.log('set cover');
			}
			console.log('link image', decathlon_products[0].cover);
			store_products.set(decathlon_products);
			// console.log("decathlon product",decathlon_products);
			// console.log("profiling", decathlon_profiling);
			// console.log("decathlon proposition",make_product_proposition(decathlon_profiling,2))
			algolia_insert(decathlon_products);
		});

		// ;
	});

	onDestroy(() => {
		unsubscribe_show_dark_scren;
		unsubscribe_show_side_bar;
		unsubscribe_show_panel_recommend;
	});
</script>

<div class="app">
	<div class="header">
		<Header />
	</div>

	{#if is_show_side_bar}
		<div class="sidebar">
			<Sidebar />
		</div>
	{/if}
	<main>
		<slot />
	</main>

	<div class="footer">
		<Footer />
	</div>
	<div class="search">
		<Search />
	</div>
	{#if show_dark_scren}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click|preventDefault={() => search_engine_store.reset()}>
			<ScreenDark />
		</div>
	{/if}
	{#if show_panel}
		<ProductRange />
	{/if}
</div>

<style lang="scss" scoped>
	@use './../lib/css/mixin.scss' as mixin;

	.app {
		font-size: 1.5rem;
		font-family: 'Roboto', sans-serif;
		display: grid;
		grid-template-areas:
			'h h'
			's m'
			'f f';
		grid-template-rows: 90px 1fr 50px;
		grid-template-columns: 400px 1fr;
		gap: 1rem;

		.header {
			position: sticky;
			top: 0;
			height: 90px;
			grid-area: h;
			z-index: 10000;
		}
		.sidebar {
			grid-area: s;
			background: var(--gray-1);
		}

		main {
			padding: 1rem;
			grid-area: m;
			min-height: calc(100vh - (120px + 6rem));
		}
		.footer {
			grid-area: f;
			z-index: 10;
		}

		.search {
			display: flex;
			// justify-content: center;
			width: 50%;
			margin-left: 25%;
			position: fixed;
			top: 90px;
			z-index: 100000;
		}
	}

	h1 {
		font-size: 3rem;
	}
	@media screen and (max-width: 577px) {
		.app {
			.search {
				position: fixed;
				top: 150px;
				left: 0px;
				margin-left: 5%;
				width: 90%;
				align-items: center;
			}
		}
	}

	@media screen and (max-width: 992px) {
		.app {
			grid-template-areas:
				'h'
				'm'
				'f';
			grid-template-columns: 1fr;
			.sidebar {
				position: fixed;
				top: 0;
				width: 400px;
			}
		}
	}

	@media screen and (min-width: 993px) {
		.app {
			grid-template-areas:
				'h h'
				's m'
				'f f';
			grid-template-rows: 72px 1fr 50px;
			grid-template-columns: 300px 1fr;
			.sidebar {
				position: fixed;
				top: 0;
			}
		}
	}

	@include mixin.xs {
		.app {
			grid-template-rows: 150px 1fr 50px;
		}
	}
</style>
