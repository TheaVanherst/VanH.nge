<script>
	import BlogComponent  from "$components/blog/blogComponent.svelte"
	import Contents from '$components/blog/contentList.svelte'

    import { directory } from '../../../stores/directoryController.js'; //temp
    import { page } from "$app/stores" //temp

	export let data;
    $directory = $page.url.pathname; //temp

    // TODO: I need to redesign the router transition, as this page doesn't get transitioned to.
</script>

<content>
	<div class="col2 col">
        <BlogComponent post={data[0]}/>
	</div>
	<div class="col3 col">
		<div class="contentList">
			<h1>Contents:</h1>
			<Contents list={data[0]}/>
		</div>
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