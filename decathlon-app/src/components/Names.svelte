<script lang="ts">
	import type { IMovie } from '$lib/interfaces';
	import { onDestroy } from 'svelte';

	import { movie_list_name } from '$lib/store/film';
	let movie_selected: IMovie[];
	let movie_unsubscribe;

	$: movie_selected = [];
	movie_unsubscribe = movie_list_name.subscribe((value) => {
		movie_selected = [...value];
	});

	

	onDestroy(movie_unsubscribe);
</script>

<section class="container">
	<h1>Name details</h1>
	<ul class="list d-flex">
		{#each movie_selected as item}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li class="single">
				<!-- <Close  on:click={()=>remove_from_selected()}/> -->
				<font-awesome-icon class="close" icon="fa-thin fa-circle-xmark" />
				<img src={item.cover} alt="img" />
				<div class="details">
					<h4>{item.title}</h4>
					<p>{item.actor}</p>
					<p>{item.len}mn</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.container {
		p {
			margin: 0px;
			padding: 0px;
		}
		ul {
			flex-flow: column nowrap;
			row-gap: 1rem;

			li {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				width: 100%;
				height: 80px;
				border: var(--border);
				position: relative;

				img {
					width: 80px;
					height: 80px;
				}
				.details {
					display: flex;
					flex-flow: column nowrap;
					padding: 0.2rem;
				}
			}
		}
	}
</style>
