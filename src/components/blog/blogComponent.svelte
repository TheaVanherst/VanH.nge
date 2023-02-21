<script>
    import TitleModule from "./postHeader.svelte"
    import PostHeader from "./blogPostHeader.svelte"
    import TagModule from "../generic/components/tagModule.svelte"
    import PostModule from "../serializer/portableText.svelte"

    import Container from "$components/generic/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}">
    <div id="post-{post.slug}">
        <TitleModule
                titleHeader="{post.headerImage}"	title="{post.title}"/>
        <PostHeader
                createdOn="{post._createdAt}" 		updatedOn="{post._updatedAt}"       publishedOn={post.publishedAt}
                editorHandle={post.author_handle} 	editorUser={post.author_fullName}	editorTwitter={post.editor_twitter} 	editorImage={post.author_portrait}
                authorHandle={post.author_handle} 	authorUser={post.author_fullName}  	authorTwitter={post.author_twitter} 	authorImage={post.author_portrait}
                title="{post.title}"/>
        <TagModule time="{post._createdAt}" tags="{post.catagory_tags}" />
        <PostModule
                postData="{post.body}"/>
    </div>
</Container>

<style lang="scss">

</style>