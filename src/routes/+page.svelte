<script>
	import HeaderModule from "../components/blogPosts/postHeader.svelte"
	import TitleModule from "../components/blogPosts/titleModule.svelte"
	import PostModule from "../components/blogPosts/blogModule.svelte"

	import Header from "./components/header.svelte"

	export let data;
	// $: console.log(data)
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header/>

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
		min-height: 	120px;
		max-width: 		calc(66% - 10px);
		min-width: 		min-content;
		border-radius: 	10px;
		margin-bottom: 	15px;

		background:		white;}
</style>