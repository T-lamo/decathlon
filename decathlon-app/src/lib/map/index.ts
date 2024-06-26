export async function init_map() {
	let leaflet = await import('leaflet');
    let  mapElement;
	let map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

	leaflet
		.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		})
		.addTo(map);

        return {leaflet,mapElement,map}
}
