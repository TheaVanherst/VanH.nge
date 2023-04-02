<script>
	import ArtPost from "$components/generic/generalGallery.svelte";
    import Masonry from 'svelte-bricks'; // THIS IS SO FUCKING GOOD.

    export let data = [];
</script>

<div class="gallery">
	<Masonry
			items=	{data.postRequests}
			gap=	{15}
			idKey=	{`_id`}
			animate=		{false}
			columnClass=	"flex"
			let:item>
		<ArtPost post={item}/>
	</Masonry>
</div>

<style lang="scss">

</style>