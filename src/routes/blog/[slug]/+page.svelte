<script>
	import BlogComponent from "$components/blog/blogComponent.svelte";
	export let data = null;
</script>

<BlogComponent post={data.requestedProject[0]}/>
