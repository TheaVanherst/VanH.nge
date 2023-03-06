<script>
    import HeaderModule from "$components/blog/postTitleCard.svelte"
    import TagModule from "$components/globals/tagModule.svelte"
    import PostModule from "$lib/serializer/portableText.svelte"

    import Container from "$components/globals/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}" id="post-{post.slug}" colour="orange">
    <HeaderModule
            titleHeader={post.headerImage}	title={post.title}          subtitle={post._id}
            createdOn={post._createdAt}		updatedOn={post._updatedAt} publishedOn={post.publishedAt}
            editor={post.editor}            author={post.author}/>
    <TagModule
            time="{post._createdAt}" tags="{post.catagory_tags}" />
    <PostModule
            postData="{post.body}"/>
</Container>