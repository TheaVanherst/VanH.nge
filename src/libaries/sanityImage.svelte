<script>
    import {onMount} from 'svelte'
    import imageUrlBuilder from "@sanity/image-url";
    import client from "./sanityClient";
    export let image

    $: dimensions = image?.asset?._ref?.split('-')[2]
    $: [width, height] = dimensions.split('x').map(Number)
    $: aspectRatio = width / height

    let imageRef
    let loaded = false
    onMount(() => {
        imageRef.onload = () => {
            loaded = true}})

    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}
</script>

{#if image}
    <cont>
        <div class:loaded>
            <img
                    loading="lazy"
                    src={urlFor(image).width(1200).fit('fillmax')}
                    alt={image.alt}
                    bind:this={imageRef}
                    style="aspect-ratio: {aspectRatio}"/>
        </div>
    </cont>
{/if}

<style>
    cont {
        width:      100%;
        height:     100%;
        padding:    0 0 10px 0;
        display:    block;}
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
    div.loaded {
        animation-duration: 0s;
        background: var(--backgColour);}

    img {
        width:      100%;
        margin:     0;
        opacity:    0;
        display:    block;
        transition: opacity 500ms ease-out;}
    div.loaded > img {
        opacity:    1;}

    @keyframes placeHolderShimmer {
        0% {    background-position: -800px 0}
        100% {  background-position:  800px 0}}
</style>