<script lang="ts">
	
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	onMount(async () => {
		movie_list = data
		console.log(data);
		
	});
	let movie_list: any = [];
</script>

