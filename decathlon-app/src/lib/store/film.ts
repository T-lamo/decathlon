import type { IMovie } from '$lib/interfaces';
import { writable } from 'svelte/store';

export const movie_list_name = writable<IMovie[]>([]);
