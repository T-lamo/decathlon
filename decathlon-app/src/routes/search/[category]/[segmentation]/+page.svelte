<script lang="ts">
    import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	onMount(() => {
		if ('item' in data) {
		}
	});
</script>
<div class="container"></div>
<style lang="scss" scoped></style>