<script>
    import TagModule    from "$components/generic/tagModule.svelte";
    import Container    from "$components/globals/containers/container.svelte";

    import AuthorTag    from "$components/generic/authorTag.svelte";
    import InvContainer from "$components/globals/todo/invContainer.svelte";

    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';
    import PostModule   from "$lib/serializer/genericSerializer.svelte"
    import Separator    from "$lib/serializer/block/separator.svelte";

    export let post;
</script>

<Container overflowBool="{false}" colour="orange">
    <ImageGallery  portableText={post.gallery}/>

    <InvContainer>
        <AuthorTag preview={true}
                   publicationDate={post.publishedAt}
                   authors={[post.author]} editors={[post.editor]}/>
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

    {#if post.desc}
        <PostModule postData={post.desc}/>
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