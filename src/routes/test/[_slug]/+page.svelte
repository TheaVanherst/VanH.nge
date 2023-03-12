<script>
	import BlogComponent  		from "$components/blog/blogComponent.svelte"
    import GalleryComponent from "$components/generic/preview/previewGallery.svelte";

    import Contents 			from '$components/blog/contentList.svelte'
	import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";

	export let data = null;
    let h = 0, w = 0;
</script>

<div class="content">
	<div class="left">
        <BlogComponent post={data.requestedProject[0]}/>
	</div>

	<div class="right"
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

		> * {
			height: 	max-content;
			display: 	block;
			position: 	relative;

			&.left { width:	70%;}
			&.right { width: 30%;}
		}
	}
</style>