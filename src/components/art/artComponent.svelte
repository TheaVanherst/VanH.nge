<script>
    import TagModule from "$components/generic/tagModule.svelte";
    import Container from "$components/generic/container.svelte";

    import PreviewHeader from "$components/art/preview/previewHeader.svelte";

    import ImageGallery     from '$components/serializer/types/imageGallery.svelte';
    export let post = null;

    post.gallery._type = "gallery";
    let object = {"value": post.gallery};

    console.log(post)
</script>

<Container overflowBool="{false}">
    <ImageGallery portableText="{object}"/>
    <PreviewHeader
            createdOn={post._createdAt} 		updatedOn={post._updatedAt}         publishedOn={post.publishedAt}
            authorhandle={post.author_handle}   authoruser={post.author_fullName}   authorTwitter={post.author_twitter}
            editorhandle={post.editor_handle}   editoruser={post.editor_fullName}   editorTwitter={post.editor_twitter}/>
    <TagModule
            time="{post._createdAt}"    inline={true}
            tags={post.catagory_tags}   tagsIds={post.catagory_id} />
    <p>
        {post.briefDesc}
    </p>
</Container>

<style lang="scss">

</style>