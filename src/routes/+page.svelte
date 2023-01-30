<script>
	import BlogPostPreview from "../components/blog/previewComponent.svelte"
	import SideBar from "../components/general/sideBar.svelte"

	export let data;
</script>

<content>
	<div class="col2 col">
		<div class="wrapper">
			{#each data[0] as post}
				<BlogPostPreview post={post}/>
			{/each}
		</div>
	</div>
	<div class="col3 col">
		<SideBar/>
	</div>
</content>

<style lang="scss">
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
		max-width: 100%;
		padding: var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);
	}
</style>