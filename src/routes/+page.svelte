<script>
	import BlogPostPreview from "$components/blog/preview/previewComponent.svelte"
	import GalleryComponent from "$components/generic/galleryComponent.svelte";
    import Container from "$components/globals/containers/container.svelte";
    import NervContainer from "$components/globals/containers/nervContainer.svelte";

	export let data = null;
</script>

<content>
	<div class="col2 col">
		{#if data[0]}
			<div class="header yellow hovGreen">
				<div class="title">
					<p>FEATURED ART</p>
				</div>
			</div>

			{#each data[0] as post}
				<GalleryComponent post={post}/>
			{/each}
		{/if}

		{#if data[1]}
			<div class="header green">
				<div class="bar"></div>
				<div class="title">
					<p>LATEST BLOGS</p>
				</div>
				<div class="bar"></div>
			</div>

			{#each data[1] as post}
				<BlogPostPreview post={post}/>
			{/each}
		{/if}

	</div>
	<div class="col3 col">
		<Container colour={"red"} paddingBool="{false}">
			<div class="emergency red flashing">
				<div class="bars"></div>
				<div class="bars"></div>
			</div>

			<div class="emergencyWrapper flashing">
				<div>
					<p class="def red">EMERGENCY</p>
				</div>
			</div>

			<div class="emergency red flashing">
				<div class="bars"></div>
				<div class="bars"></div>
			</div>
		</Container>

		<NervContainer
				colour={"orange"}
				tab={true} subtitle="CODE 202" tabColour={"orange"}
				stripeColour={"red"} barBool={true} warning={true}>

			<p class="defPad bod orange">
				This site is currently in development. please do not take what you see as a true representation of the final site.</p>
			<p class="defPad bod orange">
				NERV is an international organization with their center of operation located in the city of Tokyo-3, Japan. More specifically, they run the majority of their research and operations out of NERV Headquarters, a large facility located in the GeoFront. Outside of their main operation in Japan, NERV also has operations in the United States, Germany and possibly more. </p>
			<p class="nutPad bod green">
				01101110 01101111 01110100 00100000 01100101 01101110 01101111 01110101 01100111 01101000 00100000 01110000 01111001 01101100 01101111 01101110 01110011 00100000 01101110 01101111 01110100 00100000 01100101 01101110 01101111 01110101 01100111 01101000 00100000 01110000 01111001 01101100 01101111 01101110 01110011</p>
			<p class="defPad bod orange">
				NERV (German for "nerve") is a special organization that was put together to combat the Angels after the Second Impact and is the organization responsible for the creation of the Evangelions.</p>
		</NervContainer>
	</div>
</content>

<style lang="scss">
	content {
		width: 100%;
		gap: var(--containerPadding);
		display: inline-flex;

		.col {
			height: max-content;
			width: inherit;
			display: block;

			> .wrapper {
				width: 100%;
			}

			&.col2 {
				max-width: 65%;}
			&.col3 {
				max-width: calc(35%);}
		}
	}

	.contentList {
		max-width: 100%;
		padding: var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);
	}
</style>