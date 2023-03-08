<script>
	import ArtPost from "$components/generic/generalGallery.svelte";
    import Masonry from 'svelte-bricks'; // THIS IS SO FUCKING GOOD.

	export let data = [];
</script>

<div class="content">
	<Masonry
		items=	{data[0]}
		gap=	{15}
		idKey=	{`_id`}

		animate=		{true}
		columnClass=	"flex"
		let:item>
		<ArtPost post={item}/>
	</Masonry>
</div>