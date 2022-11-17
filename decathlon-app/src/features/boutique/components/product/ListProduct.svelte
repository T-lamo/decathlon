<script lang="ts">
	import Product from './Product.svelte';
  let arr = [1,2,3,4,5,1,2,3,4,5]

</script>


<ul class="container">
	{#each arr as item}
		<li>
      <Product></Product>
    </li>
	{/each}
</ul>

<style lang="scss">
  .container {
    gap: 1rem;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>