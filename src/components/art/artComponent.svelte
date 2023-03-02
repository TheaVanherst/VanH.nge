<script>
    import { createdPush } from "$lib/dateBuilder.js";

    import TagModule    from "$components/generic/components/tagModule.svelte";
    import Container    from "$components/generic/containers/container.svelte";

    import AuthorTag    from "$components/generic/components/authorTag.svelte";
    import InvContainer from "$components/generic/containers/invContainer.svelte";

    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';
    export let post = null;

    const galleryObjectGen = (obj) => {
        obj.gallery._type =     "gallery";
        obj.gallery.inline =    true;
        return {"value": obj.gallery};
    }

    let publishDate = post.publishedAt ? post.publishedAt : post._createdAt;
    console.log(post)
</script>

<Container overflowBool="{false}" colour="orange">
    <ImageGallery portableText="{galleryObjectGen(post)}"/>

    <InvContainer>
        <AuthorTag
            preview={true}  social={post.author.socialMedia}
            content="{createdPush(publishDate, 'shortDate')} by">
            {post.author.handle}
        </AuthorTag>
    </InvContainer>

    <TagModule time="{publishDate}" tags={post.categories}/>

    {#if post.collaborators}
        <p class="collaborators">
            A collaboration effort with
            {#each post.collaborators as artist}
                {artist.fullName}
            {/each}
        </p>
    {/if}

    {#if post.briefDesc}
        <p class="description">
            {post.briefDesc}
        </p>
    {/if}
</Container>

<style lang="scss">
    .collaborators {
        margin-bottom: 5px;
    }
</style>