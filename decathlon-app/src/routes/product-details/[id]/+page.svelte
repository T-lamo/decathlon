<script lang="ts">
	import ProductDetails from '../../../features/boutique/components/product/ProductDetails.svelte';
	import { show_side_bar } from '$lib/store/ui';
	import { onMount } from 'svelte';

	onMount(() => {
		show_side_bar.update((value) => true);
	});
</script>

<div class="container">
	<ProductDetails />
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
