<script>
	import PreviewBlogPost 		from "$components/blog/preview/previewComponent.svelte"
	import TitleList 			from "$components/blog/preview/previewContentList.svelte"
	import PageScrollWrapper 	from "$lib/handlers/pageScrollWrapper.svelte";

	export let data = null;
</script>

<div class="content">
	<div class="col2">
		{#each data.postData as post, i}
			<div>
				<PreviewBlogPost post={post}/>
			</div>
		{/each}
	</div>
	<div class="col3">
		<PageScrollWrapper>
			<TitleList list={data.postData}/>
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

			&.col2 { width:	70%;}
			&.col3 { width: 30%;}
		}
	}
</style>