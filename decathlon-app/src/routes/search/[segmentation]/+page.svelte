<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
    console.log("data",data)
	onMount(() => {
		if ('item' in data) {
            console.log(data.item);
		}
	});
</script>

<div class="container" >
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis recusandae ut, voluptates deleniti, debitis assumenda ipsa consectetur iure explicabo corrupti, quia fugit eum repellendus. Voluptatum, eum. Voluptatibus quo iure veniam repellat in unde molestiae iste aperiam, excepturi omnis ut, a, non impedit exercitationem doloremque fugiat deleniti beatae magni fuga.
</div>
<style lang="scss" scoped></style>
