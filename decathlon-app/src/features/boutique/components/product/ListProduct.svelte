<script lang="ts">
	import Product from './Product.svelte';
	let arr = [1, 2, 3, 4, 5, 1];

	function redirect() {}
</script>

<ul class="container">
	{#each arr as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a href="/product-details/{item}">
			<li on:click={redirect}>
				<Product />
			</li></a
		>
	{/each}
</ul>

<style lang="scss">
	.container {
		gap: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
	li {
		cursor: pointer;
	}
</style>
