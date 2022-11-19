<script lang="ts">
	import ListComments from './comments/ListComments.svelte';
	import ListProduct from './ListProduct.svelte';
	let product_images: string[] = [
		'https://images.unsplash.com/photo-1603884574615-7b6ec4198a8c?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwzNDF8fG1vdmllfGVufDB8fHx8MTY2ODY0MjgyMQ&ixlib=rb-4.0.3&w=500&h=1000',
		'https://images.unsplash.com/photo-1623864804069-438e36809fc2?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwxODV8fG1vdmllfGVufDB8fHx8MTY2ODg1NDU0Ng&ixlib=rb-4.0.3&w=500&h=1000',
		'https://images.unsplash.com/photo-1622732776612-1232b64eb1a3?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwxODZ8fG1vdmllfGVufDB8fHx8MTY2ODg1NDU0Ng&ixlib=rb-4.0.3&w=500&h=1000'
	];
	let image_selected = 1;

	function nextImage() {
		if (image_selected < product_images.length - 1) {
			image_selected += 1;
		}
	}

	function previousImage() {
		if (image_selected > 0) {
			image_selected -= 1;
		}
	}
</script>

<div class="container">
	<div class="product-detail">
		<div class="image-show">
			<div class="image" style="background-image: url({product_images[image_selected]})" />
			<!-- <ul>
				<li on:click={previousImage}>
					<i class="fa-solid fa-chevron-left" />
				</li>
				<li on:click={nextImage}>
					<i class="fa-solid fa-chevron-right" />
				</li>
			</ul> -->
			<div class="prev-next btn btn-primary">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i on:click={previousImage} class="fa-solid fa-chevron-left" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i on:click={nextImage} class="fa-solid fa-chevron-right" />
			</div>
		</div>
		<div class="details">
			<h2>Détails</h2>
			<div class="description-info">
				<div class="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione neque, voluptate
					sed sit magni adipisci natus asperiores iste, doloribus dicta perspiciatis, laudantium
					aperiam tempora?
				</div>
				<div class="information-tech">
					<p>Poids: 24kg</p>
					<p>Etat: Neuf</p>
				</div>
			</div>
			<button class="btn btn-primary">Ajouter au panier</button>
		</div>
	</div>
	<div class="similaire">
		<h1>Produits similaires</h1>
		<ListProduct />
	</div>
	<div class="promotion">
		<h1>Profiter de nos rabais</h1>
		<ListProduct />
	</div>
	<div class="complemenaire">
		<h1>Complementaire</h1>
		<ListProduct />
	</div>
	<div class="commentaire">
		<h1>Commentaires</h1>
		<ListComments />
	</div>
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-flow: column nowrap;

		.product-detail {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			gap: 1rem;
			height: 500px;

			.image-show {
				display: flex;
				flex-flow: column nowrap;

				.image {
					flex-grow: 1;
					width: 100%;
					border: 1px solid var(--gray-1);
					padding-bottom: 1rem;
				}
				ul {
					display: flex;
					flex-direction: row;
					background: var(--primary-1);
					align-items: center;
					justify-content: center;
					border-radius: 4px;
					li {
						padding: 0rem 1rem;
					}
				}
				.prev-next {
					display: flex;
					flex: 1fr;
					align-items: center;
					justify-content: center;
				}
			}

			.details {
				display: flex;
				flex-flow: column nowrap;
				.description-info {
					flex-grow: 1;
				}
			}
		}
	}
</style>
