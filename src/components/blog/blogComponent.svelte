<script>
    import HeaderModule from "./blogPostHeader.svelte"
    import TagModule from "../generic/components/tagModule.svelte"
    import PostModule from "$lib/serializer/portableText.svelte"

    import Container from "$components/generic/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}" id="post-{post.slug}" colour="orange">
    <HeaderModule
            titleHeader={post.headerImage}	title={post.title}  subtitle={post._id}
            createdOn={post.createdWhen}	updatedOn={post._updatedAt}
            editor={post.editor}            author={post.author}/>
    <TagModule
            time="{post._createdAt}"        tags="{post.categories}" />
    <PostModule
            postData="{post.body}"/>
</Container>