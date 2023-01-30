<script>
	import TitleModule from "./components/titleModule.svelte"
	import PostHeader from "./components/postHeader.svelte"
	import TagModule from "../../components/tagModule.svelte"
	import PostModule from "../../components/portableText.svelte"

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
		<PostHeader
				createdOn="{post._createdAt}" 		updatedOn="{post._updatedAt}"
				editorHandle={post.author_handle} 	editorUser={post.author_fullName}	editorTwitter={post.editor_twitter} 	editorImage={post.author_portrait}
				authorHandle={post.author_handle} 	authorUser={post.author_fullName}  	authorTwitter={post.author_twitter} 	authorImage={post.author_portrait}
				title="{post.title}"/>
		<TagModule time="{post._updatedAt}" tags="{post.catagory_tags}" />
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