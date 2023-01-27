<script>
	import HeaderModule from "./blogModules/postHeader.svelte"
	import TitleModule from "./blogModules/titleModule.svelte"
	import PostModule from "./blogModules/blogModule.svelte"

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#each data[0] as post}
	<div class="post" id="{post.slug}">
		<TitleModule
				titleHeader="{post.headerImage}"	title="{post.title}"/>
		<HeaderModule
				createdOn="{post._createdAt}" 		updatedOn="{post._updatedAt}"
				authorhandle="{post.author_handle}" authoruser="{post.author_fullName}"
				authorTwitter="{post.author_twitter}" 	authorImage="{post.author_portrait}"
				editorhandle="{post.editor_handle}" 	editoruser="{post.editor_fullName}"
				editorTwitter="{post.editor_twitter}" 	editorImage="{post.editor_portrait}"
				tags="{post.catagory_tags}"/>
		<PostModule
				postData="{post.body}"/>
	</div>
{/each}

<style lang="scss">
	.post {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	var(--containerPadding);

		min-height: 	120px;
		border-radius: 	var(--outerRadius);

		background:		var(--backgroundTrans);
		color: 			var(--textColour);
	}
</style>