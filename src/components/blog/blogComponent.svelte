<script>
    import HeaderModule from "$components/blog/blogPostHeader.svelte"
    import TagModule    from "$components/globals/tagModule.svelte"
    import PostModule   from "$lib/serializer/portableText.svelte"

    import Container    from "$components/globals/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}" id="post-{post.slug}" colour="orange">
    <HeaderModule
            titleHeader={post.headerImage}	title={post.title}  subtitle={post._id}
            createdOn={post.publishedAt}	updatedOn={post._updatedAt}
            editor={post.editor}            author={post.author}/>
    <TagModule time="{post.publishedAt}"    tags={post.categories}/>
    <PostModule
            postData="{post.body}"/>
</Container>