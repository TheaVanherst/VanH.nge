<script>
	import PreviewBlogPost from "$components/blog/preview/previewComponent.svelte"
	import TitleList from "$components/blog/preview/previewContentList.svelte"

	export let data = null;
</script>

<content>
	<div class="col2 col">
		<div class="wrapper">
			{#each data[0] as post}
				<PreviewBlogPost post={post}/>
			{/each}
		</div>
	</div>
	<div class="col3 col">
		<TitleList list={data[0]}/>
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
				flex-basis: 100%;
				max-width: 65%;}
			&.col3 {
				margin-left: auto;
				width: 35%;}
		}
	}
</style>