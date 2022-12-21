<script>
    import { onMount } from 'svelte'
    import imageUrlBuilder from "@sanity/image-url";
    import client from "../libaries/sanityClient";
    export let image

    $: dimensions = image?.asset?._ref?.split('-')[2]
    $: [width, height] = dimensions.split('x').map(Number)
    $: aspectRatio = width / height

    let imageRef
    let loaded = false
    onMount(() => {
        imageRef.onload = () => {
            loaded = true}})

    const urlFor = (source) => {
        return imageUrlBuilder(client).image(source)}
</script>

<div class:loaded>
    <img
            loading="lazy"
            src={ urlFor(image).width(1200).fit('fillmax') }
            alt={ image.alt }
            bind:this={ imageRef }
            style="aspect-ratio: { aspectRatio }"/>
</div>

<style>
    div {
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        background:
                linear-gradient(to right,
                var(--backgColour) 8%,
                var(--fadedColourAcc) 18%,
                var(--backgColour) 33%);
        background-size: 800px 100px;}

    img {
        margin:     0;
        opacity:    0;
        width: 100%;
        height: 100%;
        transition: opacity 500ms ease-out;}

    @keyframes placeHolderShimmer {
        0% {    background-position: -800px 0}
        100% {  background-position:  800px 0}}
</style>