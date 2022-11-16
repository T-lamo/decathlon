import type { IMovie } from '../interfaces/index';
import sql from './db';
export const film = {
	select: () : any => {
		return sql`select * from agenda`;
	}
};
