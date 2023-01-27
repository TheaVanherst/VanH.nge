<script>
    import { onMount } from 'svelte'
    import imageUrlBuilder from "@sanity/image-url";

    import client from "../lib/sanityClient";
    export let image = null;

    let imageRef;
    let loaded = false;
    onMount(() => {
        imageRef.onload = () => {
            loaded = true;
        };
    });

    const urlFor = (source) => {
        return imageUrlBuilder(client).image(source);
    };
</script>

<div class:loaded>
    <img    loading="lazy"
            src={ urlFor(image).width(1200).fit('fillmax') }
            alt={ image.alt }
            bind:this={ imageRef }/>
</div>

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