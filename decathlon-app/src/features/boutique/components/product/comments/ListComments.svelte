<script lang="ts">
	import SingleComment from './SingleComment.svelte';
	let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
</script>

<ul class="container">
	{#each arr as item}
		<li>
			<SingleComment />
		</li>
	{/each}
</ul>

<style lang="scss" scoped>
	ul {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
</style>
