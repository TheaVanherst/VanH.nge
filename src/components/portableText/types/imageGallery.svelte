<script>
    import SanityImage from '../../../libaries/sanityImage.svelte'

    export let portableText
    $: ({value} = portableText)
</script>

<imgGal>
    {#each value.images as image}
        <SanityImage image={image}/>
    {/each}
</imgGal>

<style>
    imgGal {
        height: 100%;
        width: 100%;
        display: block;
    }
</style>