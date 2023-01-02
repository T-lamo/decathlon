export async function seed(collection: string) {
	try {
		await fetch(`https://restapi.fr/api/${collection}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}
}

export async function seed20movie(collection: string) {
	console.log('inside send messages', collection);
	try {
		await fetch(`https://restapi.fr/generator`, {
			method: 'POST',
			body: JSON.stringify({
				times: 20,
				resourceName: collection,
				date: {
					range: ['2022-01-04T15:55:21.229Z', '2022-12-12T15:55:21.229Z'],
					type: 'date'
				},
				cover: {
					type: 'image',
					theme: 'movie',
					height: 1000,
					width: 500
				},
				actor: 'name',
				overview: {
					type: 'sentence',
					range: [15, 20]
				},
				title: {
					type: 'sentence',
					range: [4, 6]
				},
				len: {
					type: 'number',
					range: [75, 90]
				}
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}
}

export async function seed40comments(collection: string, array_id: string[]) {
	console.log('inside send comments', collection);

	try {
		await fetch(`https://restapi.fr/generator`, {
			method: 'POST',
			body: JSON.stringify({
				times: 40,
				resourceName: collection,
				date: {
					range: ['2022-01-04T15:55:21.229Z', '2022-12-12T15:55:21.229Z'],
					type: 'date'
				},
				id_message: {
					type: 'collection',
					values: array_id,
					unique: false
				},
				description: {
					type: 'sentence',
					range: [40, 50]
				}
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}
}

export async function seed10users(collection: string) {
	console.log('inside send users', collection);

	try {
		await fetch(`https://restapi.fr/generator`, {
			method: 'POST',
			body: JSON.stringify({
				times: 10,
				resourceName: collection,
				date: {
					range: ['2022-01-04T15:55:21.229Z', '2022-12-12T15:55:21.229Z'],
					type: 'date'
				},
				image: {
					type: 'image',
					theme: 'person',
					height: 1000,
					width: 500
				},
				username: 'name',
				firstname: 'firstname',
				lastname: 'lastname',
				statut: {
					type: 'collection',
					values: ['true', 'false'],
					unique: false
				}
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}
}

export async function seed20ProductCover(collection: string) {
	console.log('inside send users', collection);

	try {
		await fetch(`https://restapi.fr/generator`, {
			method: 'POST',
			body: JSON.stringify({
				times: 20,
				resourceName: collection,
				image: {
					type: 'image',
					theme: 'product',
					height: 1000,
					width: 500
				}
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}
}
