<script lang="ts">

</script>

<div class="items">
	<div class="image"></div>
	<div class="items-details">
		<p>Lorem, ipsum dolor.</p>
		<p>Lorem, ipsum dolor.</p>
		<div class="line-separator">

		</div>
		<p>Lorem, ipsum dolor.</p>
	</div>
</div>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-flow: column nowrap;
  background: white;
  border: 1px solid #ddd;
  p{
    padding: 0px !important;
  }

  .image {
    background-image: url("https://images.unsplash.com/photo-1603884574615-7b6ec4198a8c?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwzNDF8fG1vdmllfGVufDB8fHx8MTY2ODY0MjgyMQ&ixlib=rb-4.0.3&w=500&h=1000");
    background-size: cover;
    background-position: center;
    height: 180px !important;
  }
}

.items-details {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  color:#666;
}



</style>