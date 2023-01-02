import type { IProduct } from '$lib/interfaces';
import type { ICoordinate,  IProfiling, ISegmentation } from './interface';
import { Coordinate } from './model';

export function distance_user_single_product(
	user_coordinate: ICoordinate,
	product: IProduct,
	segmentation: ISegmentation[]
): number {
	const distance = segmentation.reduce<number>((previous: number, curr: ISegmentation) => {
		const user_axis_val = user_coordinate.point?.get(curr.label);
		const product_axis_val = product.coordinate?.point?.get(curr.label);
		if (user_axis_val != undefined && product_axis_val != undefined) {
			previous += Math.pow(user_axis_val - product_axis_val, 2);
		}
		return previous;
	}, 0);
	return Math.sqrt(distance);
}

export function user_position(profiling: IProfiling): ICoordinate {
	const position: ICoordinate = new Coordinate({});
	//get coordinates for each product
	const product_coordinates: ICoordinate[] = profiling.clic_products.map((product: IProduct) => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return product.coordinate!;
	});

	position.point = profiling.axes.reduce<Map<string, number>>(
		(user_coordinate: Map<string, number>, curr_seg: ISegmentation) => {
			//setup user position with default value 1
			position.point?.set(curr_seg.label, 1);
			// setup user value for each axis
			const user_position_to_divide: Map<string, number> = product_coordinates?.reduce<
				Map<string, number>
			>((previous: Map<string, number>, curr: ICoordinate) => {
				if (previous.has(curr_seg.label)) {
					previous.set(
						curr_seg.label,
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						previous.get(curr_seg.label)! + curr.point.get(curr_seg.label)!
					);
				} else {
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					previous.set(curr_seg.label, curr.point.get(curr_seg.label)!);
				}
				return previous;
			}, new Map<string, number>());
			//divide each value of the map by axis number
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			user_coordinate.set(
				curr_seg.label,
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				user_position_to_divide.get(curr_seg.label)! / profiling.axes.length
			);
			console.log("user coordinate",user_coordinate )
			return user_coordinate;
		},
		new Map<string, number>()
	);
	return position;
}

export function distance_user_all_product(
	profiling: IProfiling
): { prod: IProduct; dist: number }[] {
	const user_coordinate = user_position(profiling);
	console.log("profiling utils.ts", profiling);
	return profiling.all_products.reduce<{ prod: IProduct; dist: number }[]>(
		(previous: { prod: IProduct; dist: number }[], product: IProduct) => {
			previous.push({
				prod: product,
				dist: distance_user_single_product(user_coordinate, product, profiling.axes)
			});
			return previous;
		},
		[]
	);
}

export function sort_distance_user_product(
	arr: { prod: IProduct; dist: number }[]
): { prod: IProduct; dist: number }[] {
	arr.sort(function (a, b) {
		return a.dist - b.dist;
	});
	return arr;
}

export function make_product_proposition(profiling: IProfiling, qty = 4): { prod: IProduct; dist: number }[] {
	let product_proposition: { prod: IProduct; dist: number }[] = sort_distance_user_product(
		distance_user_all_product(profiling)
	);
	
	console.log("product user distance (utils.ts):", product_proposition);
	
	product_proposition=product_proposition.filter((product)=>{
		 const names: string[] =profiling.clic_products.map((prod)=>{
			return prod.name;
		 })
		 if(names.includes(product.prod.name))
		 	return false;
		 return true;
	})
	if(product_proposition.length>qty)
		return product_proposition.slice(0,qty);
	return product_proposition;
	
}
