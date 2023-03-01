<script>
	import BlogComponent  from "$components/blog/blogComponent.svelte"
	import Contents from '$components/blog/contentList.svelte'

	import PageScrollWrapper from "$lib/handlers/pageScrollWrapper.svelte";

	export let data = null;
    console.log(data)
</script>

<content>
	<div class="col2 col">
        <BlogComponent post={data[0]}/>
	</div>
	<div class="col3 col">
		<PageScrollWrapper>
			<Contents list={data[0]}/>
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