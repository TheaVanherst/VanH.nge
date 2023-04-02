<script>
	import DesignPost from "$components/generic/generalGallery.svelte";
    import Masonry from 'svelte-bricks'; // THIS IS SO FUCKING GOOD.

    export let data = [];
</script>

<Masonry
		items=	{data.postRequests}
		gap=	{15}
		idKey=	{`_id`}

		animate=		{false}
		columnClass=	"flex"
		let:item>
	<DesignPost post={item}/>
</Masonry>