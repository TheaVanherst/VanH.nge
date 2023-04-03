<script>
	import BlogPostPreview from 	"$components/blog/previewComponent.svelte"
    import DefaultTitle from "$components/globals/titles/nervSectionTitle.svelte";

	export let data = null;
</script>

<DefaultTitle>
	LATEST BLOGS
</DefaultTitle>

{#each data.postRequests as post}
	<BlogPostPreview post={post}/>
{/each}