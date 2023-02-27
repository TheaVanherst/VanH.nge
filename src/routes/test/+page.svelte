<script>
	import PreviewBlogPost from "$components/testing/preview/previewComponent.svelte"
	import TitleList from "$components/blog/preview/previewContentList.svelte"

	import PageScrollWrapper from "$lib/handlers/pageScrollWrapper.svelte";

	export let data = null;
</script>

<content>
	<div class="col2 col">
		{#each data[0] as post, i}
			<div>
				<PreviewBlogPost post={post}/>
			</div>
		{/each}
	</div>
	<div class="col3 col">
		<PageScrollWrapper>
			<TitleList list={data[0]}/>
		</PageScrollWrapper>
	</div>
</content>


<style lang="scss">
	content {
		width: 100%;
		gap: var(--containerPadding);
		display: inline-flex;

		.col {
			height: max-content;
			display: block;
			position: relative;

			//width: 100%;
			//gap: var(--containerPadding);
			//column-count: 2;

			&.col2 {
				flex-basis: 100%;
				max-width: 65%;}
			&.col3 {
				width: 			35%;
			}
		}
	}
</style>