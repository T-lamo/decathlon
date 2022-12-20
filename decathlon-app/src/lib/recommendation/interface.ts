import type { IProduct } from "$lib/interfaces";



export interface IUserProfiling {
    id?: number;
    coordinate?: ICoordinate;
}

export interface IProfiling {
    axes: ISegmentation[];
    clic_products: IProduct[];
	all_products: IProduct[];
    user?: IUserProfiling;
}

export interface ISegmentation {
	id?: number;
	label: string;
    max_value?: number;
    min_value?: number;
}



export interface ICoordinate {
	point: Map<string,number>;
}