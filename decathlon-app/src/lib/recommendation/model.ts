import type { IProduct } from '$lib/interfaces';
import type { ICoordinate, IProfiling, ISegmentation, IUserProfiling } from './interface';



export class Profiling implements IProfiling {
	axes: ISegmentation[]=[];
	clic_products: IProduct[] = [];
	all_products: IProduct[] = [];
	constructor(fields: Partial<Profiling>) {
		Object.assign(this, fields);
	}
    user?: IUserProfiling;
}

export class User implements IUserProfiling {
    id?: number;
    coordinate?: ICoordinate;
}

export class Segmentation implements ISegmentation {
	id?: number;
	label = '';
	max_value = 10;
	min_value = 1;
	constructor(fields: Partial<Segmentation>) {
		Object.assign(this, fields);
	}
}


export class Coordinate implements ICoordinate {
	point: Map<string,number> = new Map<string, number>();
    constructor(fields: Partial<Coordinate>) {
		Object.assign(this, fields);
	}
}