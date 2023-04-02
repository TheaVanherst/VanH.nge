<script>
	import BlogPostPreview from 	"$components/blog/previewComponent.svelte"
    import DefaultTitle from "$components/globals/titles/nervSectionTitle.svelte";

	export let data = null;
</script>

{#if data.featuredBlogPosts}
	<DefaultTitle>
		LATEST BLOGS
	</DefaultTitle>

	{#each data.featuredBlogPosts as post}
		<BlogPostPreview post={post}/>
	{/each}
{/if}