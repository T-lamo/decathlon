<script lang="ts">
	import Cart from './Cart.svelte';
	let arr = [1, 2];
</script>

<div class="container">
	<ul class="container">
		{#each arr as item}
			<li>
				<Cart />
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
