<script>
	import BlogComponent  		from "$components/blog/blogComponent.svelte";
	import Contents 			from '$components/generic/contents/contentList.svelte';
	import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";

	export let data = null;
</script>

<div class="content">
	<div class="page">
        <BlogComponent post={data.requestedProject[0]}/>
	</div>
	<div class="contents">
		<PageScrollWrapper>
			<Contents list={data.requestedProject[0]}/>
		</PageScrollWrapper>
	</div>
</div>


<style lang="scss">
	.content {
		width: 		100%;
		gap: 		var(--containerPadding);
		display: 	inline-flex;

		.page { 	width:	70%;}
		.contents { width: 	30%;} }
</style>