<script lang="ts">
	export let label: string;

	$: label = label;
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
		font-size: 1.3rem;
		font-weight: 600;
		padding: 1rem;
		border-radius: 4px;
		min-height: 70px;
	}

	.container:hover {
		background: var(--gray-2);
		cursor: pointer;
	}
</style>
