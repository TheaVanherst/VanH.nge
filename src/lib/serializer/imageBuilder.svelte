<script>
    import { onMount } from 'svelte'
    import imageUrlBuilder from "@sanity/image-url";

    import client from "$lib/sanityClient.js";
    export let image = null;
    let imageRef = undefined;

    let loaded = false;
    let NSFW = image.NSFW ? image?.NSFW : false;

    onMount(() => {
        if (imageRef) {
            imageRef.onload = () => {
                loaded = true;
            };
        }
    });

    const urlFor = (source) => {
        return imageUrlBuilder(client).image(source);
    };
</script>

{#if image.asset}
    <div class:loaded
         class:nsfw={NSFW}>
        <img loading="lazy"
            src={ urlFor(image).width(1200).fit('fillmax') }
            alt={ image?.alt }
            bind:this={ imageRef }/>
    </div>
{/if}

<style lang="scss">
    $backgroundSize: 800px; // pretty sure I don't need this tbh.

    div {
        height:     100%;
        width:      100%;

        display:    flex; // fixes an issue with the padding at the bottom of images
        position:   relative;

        &:not(.loaded) {
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeHolderShimmer;
            animation-timing-function: linear;

            background: linear-gradient(to right,
                var(--backgroundAccent2) 8%,
                var(--backgroundAccent1) 18%,
                var(--backgroundAccent2) 33%);

          background-size: $backgroundSize 104px;}

	    img {
		    margin:     0;
		    opacity:    0;
		    width:      100%;
		    height:     100%;
		    object-fit: cover;
		    transition: opacity 500ms ease-out;
        }

	    &.loaded {
		    img {
			    opacity: 1!important;
            }
        }
    }

    @keyframes placeHolderShimmer {
        0% {    background-position:    0 0}
        100% {  background-position:    $backgroundSize 0}}
</style>