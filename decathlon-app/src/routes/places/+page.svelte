<script>
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	/**
	 * @type {string | HTMLElement}
	 */
	let mapElement;

	/**
	 * @type {import("leaflet").Map | import("leaflet").LayerGroup<any>}
	 */
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([46, 2], 5);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet
				.marker([43, 2.5])
				.addTo(map)
				.bindPopup('2 rue de la republique <br>84000, Avignon')
				.openPopup();

			leaflet
				.marker([46.5, 4])
				.addTo(map)
				.bindPopup('23 rue chateron.<br> 75000 Paray le monial.')
				.openPopup();
			leaflet
				.marker([47, 1.5])
				.addTo(map)
				.bindPopup('70 rue de combe.<br> 75001 Paris')
				.openPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 800px;
	}
</style>
