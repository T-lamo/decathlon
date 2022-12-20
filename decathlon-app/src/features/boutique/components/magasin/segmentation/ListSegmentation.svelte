<script lang="ts">
	import { segmentations } from '$lib/recommendation/data';
	import SimpleTextCard from './../../../../../components/common/SimpleTextCard.svelte';
	
</script>

<ul class="container">
	{#each segmentations as item}
		<a href="/search/{item.label}">
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
