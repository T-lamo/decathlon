<script lang="ts">
	import SimpleTextCard from './../../../../../components/common/SimpleTextCard.svelte';
	let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
</script>

<ul class="container">
	{#each arr as item}
		<li>
			<SimpleTextCard label={'Test'} />
		</li>
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
