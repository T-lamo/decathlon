<script lang="ts">
	let article_qty: number = 4;
	let price: number = 100;
</script>

<div class="container">
	<h1>Récaputilatif</h1>
	<div class="line" />
	<div class="main">
		<div class="info">
			<span> Sous total: {article_qty} articles</span>
			<span> {price}$</span>
		</div>
		<span>Frais de livraison: Calcule à l'étape suivant</span>
	</div>

	<div class="line" />
	<button class="btn btn-primary">Passer la commande</button>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background: var(--gray-1);
		min-height: 200px;
		padding: 1rem;
		.main {
			flex-grow: 1;
			padding: 1rem;
			font-size: 1rem;
			.info {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
