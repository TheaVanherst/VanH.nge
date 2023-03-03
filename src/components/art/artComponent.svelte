<script>
    import { createdPush } from "$lib/dateBuilder.js";

    import TagModule    from "$components/generic/components/tagModule.svelte";
    import Container    from "$components/generic/containers/container.svelte";

    import AuthorTag    from "$components/generic/components/authorTag.svelte";
    import InvContainer from "$components/generic/containers/invContainer.svelte";

    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';
    export let post = null;
</script>

<Container overflowBool="{false}" colour="orange">
    <ImageGallery  portableText={post.gallery}/>

    <InvContainer>
        <AuthorTag
            preview={true}  social={post.author.socialMedia}
            content="{createdPush(post.createdWhen, 'shortDate')} by">
            {post.author.handle}
        </AuthorTag>
    </InvContainer>

    <TagModule time="{post.createdWhen}" tags={post.categories}/>

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