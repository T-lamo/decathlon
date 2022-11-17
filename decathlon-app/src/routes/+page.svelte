<script lang="ts">
	import ListCartProduct from './../features/boutique/components/cart/ListCartProduct.svelte';
	import ListProduct from '../features/boutique/components/product/ListProduct.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import ListComments from '../features/boutique/components/product/comments/ListComments.svelte';

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<ListProduct></ListProduct>
	<div>
		<ListComments></ListComments>
	</div>
	<div>
		<ListCartProduct></ListCartProduct>
	</div>
</section>

<style lang="scss" scoped>
	@use "./../lib/css/mixin.scss" as mixin;
	p {
		color: blue;
	}
	@include mixin.xs {
	p {
		color: red;
	}
}

</style>
