<script lang="ts">
	import { index } from './../../.svelte-kit/adapter-node/nodes/0.js';
	import Sidebar from './../components/Sidebar.svelte';
	import Header from './../components/Header.svelte';
	import Footer from './../components/Footer.svelte';

	import './../lib/css/base.scss';
	import './../lib/css/debug.scss';
	import './../lib/css/reset.scss';
	import { show_side_bar } from '$lib/store/ui';
	let is_show_side_bar: boolean = false;

	show_side_bar.subscribe((value) => {
		is_show_side_bar = value;
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
</div>

<style lang="scss" scoped>
	@use './../lib/css/mixin.scss' as mixin;

	.app {
		display: grid;
		grid-template-areas:
			'h h'
			's m'
			'f f';
		grid-template-rows: 72px 1fr 50px;
		grid-template-columns: 400px 1fr;
		column-gap: 1rem;

		.header {
			position: sticky;
			top: 0;
			grid-area: h;
		}
		.sidebar {
			grid-area: s;
			background: var(--gray-1);
		}

		main {
			padding: 1rem;
			grid-area: m;
		}
		.footer {
			grid-area: f;
			z-index: 10;
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
