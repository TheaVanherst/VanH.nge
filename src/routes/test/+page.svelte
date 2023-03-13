<script>
	import PreviewBlogPost 		from "$components/testing/previewComponent.svelte"
	import TitleList 			from "$components/generic/previewContentList.svelte"

	import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";

    export let data = null;
</script>

<div class="content">
	<div class="page">
		{#each data.postRequests as post, i}
			<div>
				<PreviewBlogPost post={post}/>
			</div>
		{/each}
	</div>
	<div class="contents">
		<PageScrollWrapper>
			<TitleList list={data.postRequests}/>
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