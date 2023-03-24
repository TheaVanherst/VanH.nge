<script>
	import Emergency from "$components/generic/nerv/emergency.svelte";

	import BlogPostPreview from 	"$components/blog/previewComponent.svelte"
	import GalleryComponent from "$components/generic/simplifiedGallery.svelte";
    import NervContainer from 		"$components/globals/containers/nervContainer.svelte";

	export let data = null;
</script>

<div class="content">
	<div class="col2 col">
		{#if data.featuredBlogPosts}
			<div class="header green borders">
				<div class="title large">
					<p>LATEST BLOGS</p>
				</div>
			</div>

			{#each data.featuredBlogPosts as post}
				<BlogPostPreview post={post}/>
			{/each}
		{/if}

	</div>
	<div class="col3 col">
<!--		<Emergency/>-->

<!--		<NervContainer-->
<!--				subtitle="CODE 202"-->
<!--				colour={"orange"} tabColour={"orange"} stripeColour={"red"}-->
<!--				warning={true}>-->

<!--			<p class="defPad bod orange">-->
<!--				This site is currently in development. please do not take what you see as a true representation of the final site.</p>-->
<!--		</NervContainer>-->

		{#if data.featuredProject}
			<div class="header green">
				<div class="title small">
					<p>FEATURED ART</p>
				</div>
			</div>

			{#each data.featuredProject as post}
				<div class="artCell">
					<GalleryComponent post={post}/>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">

	.artWrapper {
		column-count: 	2;
		overflow-x: 	scroll;
	}

	.content {
		width: 		100%;
		gap: 		var(--containerPadding);
		display: 	inline-flex;

		.col {
			height: 	max-content;
			width: 		inherit;
			display: 	block;

			> .wrapper {
				width: 	100%;
			}

			&.col2 {
				max-width: 65%;}
			&.col3 {
				max-width: 35%;}
		}
	}

	.contentList {
		max-width: 	100%;
		padding: 	var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);
	}
</style>