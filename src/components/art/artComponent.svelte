<script>
    import { createdPush } from "$components/dateBuilder.js";

    import TagModule from "$components/generic/components/tagModule.svelte";
    import Container from "$components/generic/containers/container.svelte";

    import AuthorTag from "$components/generic/components/authorTag.svelte";
    import InvContainer from "$components/generic/containers/invContainer.svelte";

    import ImageGallery     from '$components/serializer/types/imageGallery.svelte';
    export let post = null;

    const galleryObjectGen = (obj) => {
        obj.gallery._type = "gallery";
        obj.gallery.inline = true;
        return {"value": obj.gallery};
    }

    let publishDate = post.publishedAt ? post.publishedAt : post._createdAt;
</script>

<Container overflowBool="{false}">
    <ImageGallery portableText="{galleryObjectGen(post)}"/>

    <InvContainer>
        <AuthorTag
                preview={true}      linkUrl={post.author_twitter}
                content="{createdPush(publishDate, 'shortDate')} by">
            {post.author_fullName}
        </AuthorTag>
    </InvContainer>
    <TagModule
            time="{publishDate}"    tags={post.catagory_tags}/>

    {#if post.briefDesc}
        <p>
            {post.briefDesc}
        </p>
    {/if}
</Container>

<style lang="scss">

</style>