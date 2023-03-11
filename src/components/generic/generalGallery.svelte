<script>
    import { createdPush } from "$lib/dateBuilder.js";

    import TagModule    from "$components/globals/tagModule.svelte";
    import Container    from "$components/globals/containers/container.svelte";

    import AuthorTag    from "$components/globals/authorTag.svelte";
    import InvContainer from "$components/globals/containers/invContainer.svelte";

    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';
    import Separator    from "$lib/serializer/block/separator.svelte";

    export let post;
</script>

<Container overflowBool="{false}" colour="orange">
    <ImageGallery  portableText={post.gallery}/>

    <InvContainer>
        <AuthorTag
            preview={true}  social={post.author.socialMedia}
            content="{createdPush(post.publishedAt, 'shortDate')} by">
            {post.author.handle}
        </AuthorTag>
    </InvContainer>

    <TagModule time="{post.publishedAt}" tags={post.categories}/>

    {#if post?.collaborators?.length > 0}
        <p class="collaborators">
            A collaboration effort with:
            {#each post.collaborators as artist, i}
                <pant>
                    {artist.fullName}
                </pant>

                {#if post.collaborators > 1 && i < post.collaborators.length}
                    <pant>
                        ,
                    </pant>
                {/if}

            {/each}
        </p>
        <Separator portableText="wave"/>
    {/if}

    {#if post.briefDesc}
        <p class="description">
            {post.briefDesc}
        </p>
    {/if}
</Container>

<style lang="scss">
    .collaborators {
        margin-bottom:  var(--containerPadding);
    }
</style>