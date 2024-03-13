<script lang="ts">
	import ClickProduct from './ClickProduct.svelte';
	import type { IProduct } from '$lib/interfaces';
	import { store_recommend_product, store_user_position } from '$lib/store/product';
	import { onMount } from 'svelte';
	import { segmentations, user_init_position } from '$lib/recommendation/data';

	$: product_proposition = [] as { prod: IProduct; dist: number }[];
	$: user_pos = user_init_position();

	// console.log("product_proposition", product_proposition);

	store_recommend_product.subscribe((data) => {
		product_proposition = data;
	});

	store_user_position.subscribe((data) => {
		user_pos = data;
		console.log('here is the data', data);
	});

	function close_window() {}
</script>

<div class="container border">
	<div class="product_range">
		<h1>Profil de l'utilisateur!</h1>
		<table>
			<thead>
				<tr>
					<th>Segmentation</th>
					<th>Position</th>
				</tr>
			</thead>
			{#each user_pos as item}
				<tr>
					<td>{item.segmentation}</td>
					<td>{item.value}</td>
				</tr>
			{/each}

			<tbody />
		</table>
		<h1>Produits selectionnés!</h1>
		<div class="click-produit">
			<ClickProduct />
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.container {
		position: fixed;
		right: 0px;
		top: 70px;
		height: fit-content;

		// height: calc(100vh - (200px + 6rem));
		overflow-y: auto;
		background-color: var(--gray-1);
		z-index: 20000;

		width: 400px;
		.close {
			position: absolute;
			top: 2px;
			right: 2px;
			color: var(--white-background);
			color: var(--primary-1);
		}
		.table_distance {
			overflow-y: auto;
		}

		h1 {
			padding-top: 20px;
			text-align: center;
		}

		table,
		th,
		td {
			border: 1px solid black;
			border-collapse: collapse;
		}

		th {
			font-weight: 700;
			font-size: medium;
		}
		td {
			font-weight: 400;
			font-size: small;
		}
		table {
			width: calc(100% - 4px);
			margin: 2px;
			margin-top: 1rem;
		}
		.click-produit {
			margin: 2px;
		}
	}
</style>
