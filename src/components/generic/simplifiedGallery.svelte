<script>
    import Container    from "$components/globals/containers/container.svelte";
    import TagModule    from "$components/generic/tagModule.svelte";
    import ImageGallery from '$lib/serializer/types/imageGallery.svelte';

    export let post = null;
</script>

<Container colour="yellow" padding={5}>
    <ImageGallery margin={5} portableText={post.gallery} citations={false}/>
    <TagModule time="{post.publishedAt}" tags={post.categories}/>
</Container>