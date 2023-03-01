<script>
	import BlogComponent  		from "$components/blog/blogComponent.svelte"
	import Contents 			from '$components/blog/contentList.svelte'

	import PageScrollWrapper 	from "$lib/handlers/pageScrollWrapper.svelte";

	export let data = null;
</script>

<div class="content">
	<div class="col2">
        <BlogComponent post={data[0]}/>
	</div>
	<div class="col3">
		<PageScrollWrapper>
			<Contents list={data[0]}/>
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