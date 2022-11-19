<script lang="ts"></script>

<div class="avis-items">
	<div class="profil">
		<div class="image" />
		<p class="name">Amos DORCEUS</p>
		<p class="title">Ing.</p>
	</div>
	<p>
		<i class="fa-sharp fa-solid fa-quote-left" /> Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Molestias expedita ipsam eaque error quaerat aliquam! Exercitationem odit dolores nemo
		ullam. <i class="fa-solid fa-quote-right" />
	</p>
</div>

<style lang="scss" scoped>
	.avis-items {
		display: flex;
		background: white;
		border: 1px solid #ddd;
		flex-flow: row nowrap;
		border-radius: 0.4rem;
		align-items: center;
		padding: 0.5rem;
		flex-direction: column-reverse nowrap;
	}

	// .odd {
	//   flex-direction: column-reverse nowrap;
	// }

	.avis-items p {
		flex: 1;
		color: #666;
		line-height: 2rem;
	}

	.avis-items .profil {
		display: flex;
		flex-flow: column nowrap;
		padding: 0.5rem;
	}

	// .profil img{
	//   width: 60px;
	//   height: 60px;
	//   border-radius: 50px;
	//   margin-bottom: 1rem;
	// }
	.profil .image {
		background-image: url('https://images.unsplash.com/photo-1603884574615-7b6ec4198a8c?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwzNDF8fG1vdmllfGVufDB8fHx8MTY2ODY0MjgyMQ&ixlib=rb-4.0.3&w=500&h=1000');
		background-size: cover;
		background-position: center;
		width: 60px;
		height: 60px;
		border-radius: 50px;
		margin-bottom: 1rem;
		display: flex;
		align-self: center;
	}

	.profil p {
		line-height: 0.4rem;
	}
	.profil .name {
		font-size: 0.8rem;
		color: #333;
		font-weight: 800;
	}

	.profil .title {
		font-size: 0.6rem;
	}
	// .avis-line-separator {
	//   width: 100%;
	//   height: 0.1rem;
	//   background: #666;
	// }
</style>
