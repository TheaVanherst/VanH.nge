<script>
	import PreviewBlogPost from "$components/blog/previewComponent.svelte"
	export let data;
</script>

<content>
	<div class="col2 col">
		<div class="col2 col">
			<div class="wrapper">
				{#each data[0] as post}
					<PreviewBlogPost post={post}/>
				{/each}
			</div>
		</div>
	</div>
	<div class="col3 col">
		<div class="contentList">
			<h1>Contents:</h1>
			{#each data[0] as data}
				<p>{data.title}</p>
			{/each}
		</div>
	</div>
</content>


<style lang="scss">
	/* TODO: column management */
	$row2: 520px;
	$row3: 250px;

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
				max-width: $row2;}
			&.col3 {
				margin-left: auto;
				width: $row3;}
		}
	}

	.contentList {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	10px var(--containerPadding) var(--containerPadding) var(--containerPadding);
		margin-bottom:  20px;

		min-height: 	120px;
		border-radius: 	var(--outerRadius);

		background:		var(--backgroundTrans);
		color: 			var(--textColour);

		h1 {
			border-left: 	5px solid var(--accent1);

			padding:	 	0 0 0 20px;
			margin:			0 0 var(--containerPadding) calc(var(--contentPaddingX) * -1);
		}
	}

</style>