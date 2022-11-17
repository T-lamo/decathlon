<script>
	import Header from './../components/Header.svelte';
	import './../lib/css/base.scss';
	import './../lib/css/debug.scss';
	import './../lib/css/reset.scss';

</script>

<div class="app">
	<Header></Header>
	<main>
		<slot />
	</main>
</div>

<style>
	
	
</style>
