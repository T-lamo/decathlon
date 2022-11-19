<script lang="ts">
	export let label: string;

	$: label = label;
	console.log(label);
</script>

<div class="container ">
	{label}
</div>

<style lang="scss" scoped>
	.container {
		background: var(--gray-1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--secondary-black);
		font-size: 2rem;
		padding: 1rem;
		border-radius: 4px;
	}
</style>
