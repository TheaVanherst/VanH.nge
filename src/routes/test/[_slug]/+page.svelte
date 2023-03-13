<script>
	import BlogComponent  		from "$components/blog/blogComponent.svelte"
    import GalleryComponent from "$components/generic/previewGallery.svelte";

    import Contents 			from '$components/blog/contentList.svelte'
	import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";

	export let data = null;
    let h = 0, w = 0;
</script>

<svelte:head>
	<title>Test</title>
	<meta name="description" content="Blog posts"/>
</svelte:head>

<div class="content">
	<div class="page">
        <BlogComponent post={data.requestedProject[0]}/>
	</div>

	<div class="contents"
		 bind:clientWidth={w}
		 bind:clientHeight={h}>
		<PageScrollWrapper>
			<Contents list={data.requestedProject[0]}/>

			{#if data.requestedProject[0]}
				<div class="header green">
					<div class="title small">
						<p>FEATURED ART</p>
					</div>
				</div>

				{#if data.featuredProject.length > 1}
					{#each data.featuredProject as post}
						<div class="artCell">
							<GalleryComponent post={post}/>
						</div>
					{/each}
				{:else}
					<div class="artCell">
						<GalleryComponent post={data.featuredProject[0]}/>
					</div>
				{/if}
			{/if}
		</PageScrollWrapper>
	</div>
</div>

<style lang="scss">
	.content {
		width: 		100%;
		gap: 		var(--containerPadding);
		display: 	inline-flex;

		.page { 	width:	70%;}
		.contents { width: 	30%;} }
</style>