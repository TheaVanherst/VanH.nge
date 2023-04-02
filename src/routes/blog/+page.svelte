<script>
	import PreviewBlogPost from "$components/blog/previewComponent.svelte"
	export let data = null;
</script>

{#each data.postRequests as post, i}
	<PreviewBlogPost post={post}/>
{/each}
