<script lang="ts">
	import { categories } from "$lib/recommendation/data";


	categories
</script>

<div class="container">
	<ul>
		{#each categories as item}
			<a href="/search/{item.label}">
				<li>
					{item.label}
				</li>
			</a>
			
		{/each}
	</ul>
</div>

<style lang="scss" scoped>
	.container {
		background: var(--gray-1);
		min-width: 300px;
		position: fixed;
		top: calc(70px);
		height: 100vh;
		font-size: large;
		font-weight: 700;
		ul {
			padding: 1rem;
			display: grid;
			grid-template-rows: repeat(auto-fit, 1fr);

			overflow-y: auto;
			padding: 0;

			li {
				padding: 1rem;
				background: var(--gray-1);
				color: var(--secondary-black);
				font-size: 2rem;
				border-bottom: 1px solid var(--gray-2);
				align-self: center;
			}
			li:hover {
				background: var(--gray-2);
				border-bottom: 2px solid var(--gray-3);
				cursor: pointer;
			}
		}
	}

	@media (max-width: 992px) {
		ul {
			width: 300px !important;
			overflow-y: auto;
		}
	}
</style>
