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
            style="aspect-ratio: {aspectRatio}"/>
</div>

<style>
    div {
        height:     100%;
        width:      100%;
        display:    flex; /* fixes an issue with the padding at the bottom of images*/

        animation-fill-mode:    forwards;
        animation-name:         placeHolderShimmer;
        animation-duration:     2s;
        animation-iteration-count:  infinite;

        background-size:    800px 100px;
        background:         linear-gradient(to right,
            var(--backgroundAccent) 8%,
            var(--fadedColourAcc) 18%,
            var(--backgroundAccent) 33%);}

    div:active > img {
        object-fit: contain;} /* this is a temporary solution */

    img {
        margin:     0;
        opacity:    0;
        width:      100%;
        height:     100%;
        object-fit: cover;
        transition: opacity 500ms ease-out;}
    .loaded > img {
        opacity: 1!important;}

    @keyframes placeHolderShimmer {
        0% {    background-position: -800px 0}
        100% {  background-position:  800px 0}}
</style>