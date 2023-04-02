<script>
	import Emergency from "$components/globals/todo/nervEmergency.svelte";
    import GalleryComponent from "$components/generic/simplifiedGallery.svelte";
    import NervContainer from "$components/globals/todo/nervContainer.svelte";

	import BlogPostPreview from 	"$components/blog/previewComponent.svelte"
    import DefaultTitle from "$components/globals/titles/nervSectionTitle.svelte";

	export let data = null;
</script>

<div class="content">
	{#if data.featuredBlogPosts}
		<DefaultTitle>
			LATEST BLOGS
		</DefaultTitle>

		{#each data.featuredBlogPosts as post}
			<BlogPostPreview post={post}/>
		{/each}
	{/if}

<!--	<div class="col3 col">-->
<!--		<Emergency/>-->

<!--		<NervContainer-->
<!--				title="グローバル"-->
<!--				subtitle="CODE 202"-->
<!--				colour={"orange"}-->
<!--				tabColour={"orange"}-->
<!--				stripeColour={"red"}-->
<!--				warning={true}>-->
<!--			This site is currently in development. please do not take what you see as a true representation of the final site.-->
<!--		</NervContainer>-->

<!--		{#if data.featuredProject}-->
<!--			<DefaultTitle borders={false}>-->
<!--				ARTWORKS-->
<!--			</DefaultTitle>-->

<!--			{#each data.featuredProject as post}-->
<!--				<div class="artCell">-->
<!--					<GalleryComponent post={post}/>-->
<!--				</div>-->
<!--			{/each}-->
<!--		{/if}-->
<!--	</div>-->
</div>

<style lang="scss">
	.content {
		height: 	max-content;
		width: 		inherit;
		display: 	block;
	}

	.contentList {
		max-width: 	100%;
		padding: 	var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);
	}
</style>