<script>
    import SanityImage from '../../sanityImage.svelte'

    export let portableText
    $: ({value} = portableText)
    $: console.log(value)
</script>

<imgGal class="{value.display}">
    {#each value.images as image}
        <SanityImage image={image}/>
    {/each}
</imgGal>

<style>
    imgGal {
        height: 100%;
        width: 100%;
        display: block;}


</style>