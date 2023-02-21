<script>
	import PreviewBlogPost from "$components/art/artComponent.svelte"

	export let data = null;
</script>

<content>
	<div class="col">
		{#each data[0] as post, i}
			<div>
				<PreviewBlogPost post={post}/>
			</div>
		{/each}
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

			width: 100%;
			gap: var(--containerPadding);
			column-count: 2;
		}
	}
</style>