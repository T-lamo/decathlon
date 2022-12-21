<script lang="ts">
	import { categories } from '$lib/recommendation/data';
	import { segmentations } from '$lib/recommendation/data';
	import SimpleTextCard from './../../../../../components/common/SimpleTextCard.svelte';
	export let category:string;
</script>

<ul class="container">
	{#each segmentations as item}
		<a href="/search/{category}/{item.label}">
			<li>
				<SimpleTextCard label={item.label} />
			</li>
		</a>
	{/each}
</ul>

<style lang="scss">
	ul {
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
