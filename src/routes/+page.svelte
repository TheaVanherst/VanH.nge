<script>
	import BlogPostPreview from "./blogPosts/components/blogPreviews/blogComponent.svelte"

	export let data;
</script>

{#each data[0] as post}
	<BlogPostPreview post={post}></BlogPostPreview>
{/each}

<style lang="scss">

</style>