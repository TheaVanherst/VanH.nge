<script>
    import Container    from "$components/globals/containers/container.svelte";
    import TagModule    from "$components/globals/tagModule.svelte";
    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';

    export let post = null;
</script>

<Container colour="yellow" padding={5}>
    <ImageGallery margin={5} portableText={post.gallery}/>
    <TagModule time="{post.createdWhen}" tags={post.categories}/>
</Container>

<style lang="scss">
    .collaborators {
        margin-bottom:  var(--containerPadding);
    }
</style>