<script lang="ts">
	import { onDestroy } from 'svelte';

	$: loading_text = 'Loading...';
</script>

<div class="container">
	<p>{loading_text}</p>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		color: var(--text-color);
		width: 100%;
		height: 100vh;
	}
</style>
