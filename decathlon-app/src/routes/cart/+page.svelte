<script lang="ts">
	import Recaputilatif from './../../features/commande/Recaputilatif.svelte';
	import CommandeListCartProduct from './../../features/commande/cart/CommandeListCartProduct.svelte';
	import Suivie from './../../features/commande/Suivie.svelte';
	import { onMount } from 'svelte';
	import { show_side_bar } from '$lib/store/ui';

	onMount(() => {
		show_side_bar.update((value) => true);
	});
</script>

<div class="container">
	<Suivie />
	<div class="main">
		<div class="list">
			<CommandeListCartProduct />
		</div>
		<div class="recaputilatif">
			<Recaputilatif />
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		.main {
			display: grid;
			grid-template-areas: 'main rec';
			grid-template-columns: 1fr 400px;
			gap: 1rem;
			.list {
				grid-area: main;
			}
			.recaputilatif {
				padding-top: 1rem;
				grid-area: rec;
			}
		}
	}

	@media screen and (max-device-width: 1400px) {
		.container {
			.main {
				grid-template-areas:
					'main'
					'rec';
				grid-template-columns: 1fr;
			}
		}
	}
</style>
