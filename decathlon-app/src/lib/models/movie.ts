import type { IMovie } from '../interfaces/index';
export class Movie implements IMovie {
	_id=-1;
	title= "";
	overview= "";
	actor= "";
	len?: number;
	date?: string;
	cover?: string;

	constructor(fields: Partial<Movie>) {
		Object.assign(this, fields);
	}
}
