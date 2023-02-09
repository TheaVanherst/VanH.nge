<script>
	import PreviewBlogPost from "$components/blog/previewComponent.svelte"
	import TitleList from "$components/blog/previewTitleList.svelte"
	export let data;
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

	.contentList {
		max-width: 100%;
		padding: var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);

		h1 {
			border-left: 	5px solid var(--accent1);

			padding:	 	0 0 0 20px;
			margin:			0 0 var(--containerPadding) calc(var(--contentPaddingX) * -1);
		}

		.list {
			padding:    2px 15px;

			&:last-child {
				padding-bottom: 15px;
			}
		}
	}

</style>