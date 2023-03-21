<script>
	import ArtPost from "$components/generic/generalGallery.svelte";
    import Masonry from 'svelte-bricks'; // THIS IS SO FUCKING GOOD.
	import {page} from "$app/stores";

    export let data = [];
    console.log($page, data);
</script>

<div class="content">
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