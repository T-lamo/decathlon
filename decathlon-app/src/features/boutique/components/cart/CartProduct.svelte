<script lang="ts">
	import ListCartProduct from './ListCartProduct.svelte';
</script>

<div class="container">
	<h2>Panier</h2>
	<ListCartProduct />
	<button class="btn btn-success">Commander</button>
	<button class="btn btn-primary">Modifier</button>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
