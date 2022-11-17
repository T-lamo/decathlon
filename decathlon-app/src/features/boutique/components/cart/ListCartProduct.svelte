<script lang="ts">
	import Cart from './Cart.svelte';
    let arr = [1,2,3,4,5,1,2,3,4,5]

</script>

<ul class="container">
	{#each arr as item}
		<li>
      <Cart></Cart>
    </li>
	{/each}
</ul>

<style lang="scss">
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px 1fr));
        gap: 1rem;


    }
</style>