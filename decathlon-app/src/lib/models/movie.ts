import type { IMovie } from '../interfaces/index';
export class Movie implements IMovie {
	_id?: number;
	title: string;
	overview: string;
	actor: string;
	len?: number;
	date?: string;
	cover?: string;

	constructor(fields: Partial<Movie>) {
		Object.assign(this, fields);
	}
}
