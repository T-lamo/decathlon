<script lang="ts">
	import type { IMovie } from '$lib/interfaces';
	import { movie_list_name } from '$lib/store/film';
	import Names from '../../components/Names.svelte';
	import { onMount } from 'svelte';
	import { seed20movie } from '$lib/data/seed';
	import Loading from '../../components/Loading.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let movie_list: IMovie[] | any = [];

	onMount(async () => {
		window.addEventListener('scroll', () => {
			console.log('scroling');
		});
		document.addEventListener('DOMContentLoaded', () => {
			console.log('send beacon');
			const start = new Date().getTime();
			window.addEventListener('beforeunload', () => {
				const end = new Date().getTime();
				const totalTime = (end - start) / 1000;

				console.log(totalTime);
			});
		});

		window.addEventListener('beforeunload', () => {
			console.log('before unload');
		});

		navigator.sendBeacon('/api/film/');

		movie_list = data.item;
		try {
			if (movie_list.length == 0) seed20movie('cerimovieautre');
		} catch (error) {}
	});

	function add_to_select_list(item: IMovie) {
		movie_list_name.update((n) => {
			const at_least_one = n.filter((row) => {
				if (row._id === item._id) return true;
				else return false;
			});
			if (at_least_one.length == 0) n.push({ ...item });
			return n;
		});
	}
</script>

{#await movie_list}
	<Loading />
{:then movie_list}
	<div class="container d-flex">
		<div class="content d-flex p-30">
			<div class="movie-list d-flex row-gap p-10">
				<ul class="d-flex flex-column">
					{#each movie_list as item}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li class="border" on:click={() => add_to_select_list(item)}>
							<img src={item.cover} alt="img" />
							<div class="details d-flex flex-column">
								<h3>{item.title}</h3>
								<p>{item.overview}</p>
								<p>{item.actor}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="movie-selected p-10">
				<Names />
			</div>
		</div>
	</div>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		justify-content: center;
		.content {
			flex-direction: row;
			max-width: 1200px;
			justify-content: center;
			.movie-list {
				// overflow-y: auto;

				ul {
					display: flex;
					flex-direction: column;
					flex-flow: row wrap;
					justify-content: center;
					align-items: center;
					gap: var(--row-gap-medium) var(--row-gap-medium);

					li {
						display: flex;
						flex-flow: column nowrap;
						height: 400px;
						width: 300px;
						img {
							width: 100%;
							height: 180px;
						}
						.details {
							padding: 0.5rem;
						}
					}
				}
			}
			.movie-selected {
				overflow-y: auto;
				min-width: 400px;
			}
		}
	}
</style>
