<script>
    import HeaderModule from "$components/blog/postTitleCard.svelte"
    import TagModule from "$components/globals/tagModule.svelte"
    import PostModule from "$lib/serializer/portableText.svelte"

    import Container from "$components/globals/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}" id="post-{post.slug}" colour="orange">
    <HeaderModule   titleHeader={post.headerImage}	title={post.title}/>
    <TagModule      time="{post.publishedAt}"       tags="{post.catagory_tags}" />
    <PostModule     postData="{post.body}"/>
</Container>