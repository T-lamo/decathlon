import { writable } from 'svelte/store';

export const show_side_bar = writable<boolean>(false);

export const store_dark_screen = writable<boolean>(false);

export const show_panel_recommend = writable<boolean>(false);