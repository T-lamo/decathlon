import type { IProduct, IProductCategory } from '$lib/interfaces';
import { Product, ProductCategory } from '$lib/models';
import type { IProfiling, ISegmentation } from './interface';
import { Profiling, Segmentation } from './model';

export const products: Product[] = [
	new Product({
		id: 1,
		productCategoryId:3,
		name: 'Trousse de toilettes trekking',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 2,
		productCategoryId:2,
		name: 'Bottes de neiges de randonnées femme',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 3,
		productCategoryId:1,
		name: 'Parka hiver impérméable femme',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 4,
		productCategoryId:3,
		name: 'Sac au dos voyage Femme',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 5,
		productCategoryId:3,
		name: 'Sac au dos randonnées',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 6,
		productCategoryId:3,
		name: 'Bâton ultra-compact de trek',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 7,
		productCategoryId:3,
		name: 'Lampe frontale ecodesign',
		coordinate: { point: new Map<string, number>() }
	}),

	new Product({
		id: 8,
		productCategoryId:3,
		name: 'Home gym machine',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 9,
		productCategoryId:3,
		name: 'Kit hatlères et barres 93kg',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 10,
		productCategoryId:3,
		name: 'Barre de traction',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 11,
		productCategoryId:3,
		name: 'Tapis de course',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 12,
		productCategoryId:3,
		name: 'Legging fitness femme',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 13,
		productCategoryId:3,
		name: 'Brasserie de fitness',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 14,
		productCategoryId:2,
		name: 'Chaussures de fitness',
		coordinate: { point: new Map<string, number>() }
	}),

	new Product({
		id: 15,
		productCategoryId: 2,
		name: 'Baby foot en intérieur en bois',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 16,
		productCategoryId:3,
		name: 'Peignoir de bain enfant',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 17,
		productCategoryId:1,
		name: 'Maillot de bain slip garçon',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 18,
		productCategoryId:1,
		name: 'Bonnet water polo junior',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 19,
		productCategoryId:3,
		name: 'Raquettes et balles de tennis de table',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 20,
		productCategoryId:3,
		name: 'Housse de raquette',
		coordinate: { point: new Map<string, number>() }
	}),
	new Product({
		id: 21,
		productCategoryId:3,
		name: 'Boisson isotonique',
		coordinate: { point: new Map<string, number>() }
	})
];

const points: [
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number
][] = [
	[2, 8, 9, 3, 7, 1, 2, 1, 8, 8, 6, 9, 1],
	[5, 2, 9, 1, 8, 1, 6, 1, 7, 8, 8, 9, 1],
	[7, 3, 9, 3, 7, 1, 1, 1, 8, 8, 5, 9, 1],
	[7, 1, 9, 2, 7, 1, 2, 1, 7, 7, 5, 8, 2],
	[8, 4, 8, 8, 9, 1, 2, 4, 8, 8, 4, 7, 4],
	[6, 6, 6, 6, 9, 1, 5, 2, 7, 7, 5, 7, 1],
	[6, 8, 8, 7, 9, 1, 10, 3, 8, 7, 5, 9, 1],
	[10, 2, 6, 9, 2, 9, 2, 2, 7, 8, 6, 9, 1],
	[8, 4, 5, 9, 1, 8, 2, 3, 6, 8, 5, 3, 1],
	[8, 3, 5, 9, 1, 8, 2, 3, 7, 8, 5, 8, 1],
	[8, 4, 9, 9, 8, 9, 2, 3, 7, 7, 4, 9, 1],
	[3, 9, 9, 1, 2, 7, 2, 1, 8, 9, 4, 8, 1],
	[4, 8, 9, 1, 1, 6, 1, 3, 8, 8, 5, 9, 2],
	[8, 4, 7, 9, 1, 8, 2, 3, 8, 9, 5, 7, 1],
	[8, 2, 6, 6, 2, 4, 1, 4, 8, 6, 2, 1, 10],
	[5, 8, 8, 1, 1, 1, 2, 10, 1, 1, 0, 9, 0],
	[7, 6, 0, 10, 0, 1, 2, 8, 1, 0, 0, 7, 4],
	[5, 5, 8, 8, 1, 5, 3, 10, 2, 1, 2, 8, 0],
	[5, 4, 6, 7, 0, 3, 2, 9, 6, 5, 2, 4, 10],
	[6, 7, 7, 9, 1, 2, 1, 9, 7, 6, 2, 1, 10],
	[5, 1, 2, 8, 2, 5, 1, 4, 8, 8, 4, 5, 0]
];

export const segmentations: ISegmentation[] = [
	new Segmentation({ label: 'csp+' }),
	new Segmentation({ label: 'csp-' }),
	new Segmentation({ label: 'feminin' }),
	new Segmentation({ label: 'masculin' }),
	new Segmentation({ label: 'aventurier' }),
	new Segmentation({ label: 'casanier' }),
	new Segmentation({ label: 'ecolo' }),
	new Segmentation({ label: 'Enfant&bebe (00-17)' }),
	new Segmentation({ label: 'Jeune(18 - 24)' }),
	new Segmentation({ label: 'Jeune adulte ( 25 - 39 ans)' }),
	new Segmentation({ label: 'Adulte(+40 ans)' }),
	new Segmentation({ label: 'Individuel' }),
	new Segmentation({ label: 'Collectif' })
];

export const categories: ProductCategory[] = [
	new ProductCategory({ id: 1, label: 'Vetements' }),
	new ProductCategory({ id: 2, label: 'Chaussures' }),
	new ProductCategory({ id: 3, label: 'Accessoires' }),
	new ProductCategory({ id: 4, label: 'Promotions' })
];

export const decathlon_products = products.map((product: Product, index) => {
	segmentations.forEach((segmentation) => {
		product.coordinate?.point.set(segmentation.label, -1);
	});

	product.coordinate?.point.set('csp+', points[index][0]);
	product.coordinate?.point.set('csp-', points[index][1]);
	product.coordinate?.point.set('feminin', points[index][2]);
	product.coordinate?.point.set('masculin', points[index][3]);
	product.coordinate?.point.set('aventurier', points[index][4]);
	product.coordinate?.point.set('casanier', points[index][5]);
	product.coordinate?.point.set('ecolo', points[index][6]);
	product.coordinate?.point.set('Enfant&bebe (00-17)', points[index][7]);
	product.coordinate?.point.set('Jeune(18 - 24)', points[index][8]);
	product.coordinate?.point.set('Jeune adulte ( 25 - 39 ans)', points[index][9]);
	product.coordinate?.point.set('Adulte(+40 ans)', points[index][10]);
	product.coordinate?.point.set('Individuel', points[index][11]);
	product.coordinate?.point.set('Collectif', points[index][12]);

	return product;
});

export const few_products: Product[] = decathlon_products.slice(12, 15);
