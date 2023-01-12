<script>
	import HeaderModule from "../components/blogPosts/postHeader.svelte"
	import TitleModule from "../components/blogPosts/titleModule.svelte"
	import PostModule from "../components/blogPosts/blogModule.svelte"

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#each data[0] as post}
	<div class="post" id="{post._id}">
		<TitleModule
				titleHeader="{post.headerImage}"	title="{post.title}"/>
		<HeaderModule
				createdOn="{post._createdAt}" 	updatedOn="{post._updatedAt}"
				authorhandle="{post.author_handle}" authoruser="{post.author_fullName}"
					authorTwitter="{post.author_twitter}" authorImage="{post.author_portrait}"
				editorhandle="{post.editor_handle}" editoruser="{post.editor_fullName}"
					editorTwitter="{post.editor_twitter}" editorImage="{post.editor_portrait}"
				tags="{post.catagory_tags}"/>
		<PostModule
				postData="{post.body}"/>
	</div>
{/each}

<style>
	.post {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	var(--containerPadding);

		min-height: 	120px;
		border-radius: 	var(--outerRadius);
		margin-bottom: 	15px;

		background:		var(--background);
		color: 			var(--textColour);
	}
</style>