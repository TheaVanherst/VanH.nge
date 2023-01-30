<script>
    import TitleModule from "./postHeader.svelte"
    import PostHeader from "./blogPostHeader.svelte"
    import TagModule from "../tagModule.svelte"
    import PostModule from "../portableText/portableText.svelte"

    export let post
</script>

<div class="post" id="{post.slug.current}">
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

<style lang="scss">
	.post {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	var(--containerPadding);
        margin-bottom:  20px;

		min-height: 	120px;
		border-radius: 	var(--outerRadius);

		background:		var(--backgroundTrans);
		color: 			var(--textColour);
	}
</style>