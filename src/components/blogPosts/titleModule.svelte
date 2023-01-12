<script>
    export let titleHeader, title;

    import client from '../../libaries/sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
    import { onMount } from 'svelte';

    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}
</script>

<div class="title">
    <div class="overflow">
        <img src="{urlFor(titleHeader).width(500).auto('format')}">
        <h1>
            {title}
        </h1>
    </div>
</div>

<style>
    .title {
        overflow:   hidden;
        width:      100%;
        border-top-right-radius:    var(--innerRaidus);
        border-top-left-radius:     var(--innerRaidus);}

    .overflow {
        display:    flex;
        align-items: center;
        position:   relative;}

    h1 {
        z-index:    100;
        margin:     0;
        padding:    var(--contentPaddingY) var(--containerPadding);}

    img {
        filter:     blur(5px);
        display:    block;
        position:   absolute;
        width:      110%;
        opacity:    0.6;}
</style>