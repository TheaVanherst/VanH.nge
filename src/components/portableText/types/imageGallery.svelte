<script>
    import SanityImage from '../../sanityImage.svelte'
    import {onMount} from "svelte";

    export let portableText
    $: ({value} = portableText)
    let arr = []; //image array

    onMount(() => {
        if(value.display === "vertical" || value.display === "carousel"){
            arr = [value.images]
        }
        else if(value.display === "dynamic"){
            for (let e = 0; e < Math.ceil(value.images.length / 2); e++){
                arr[e] = []
                for (let i = 0; i < 2; i++){
                    let f = i + (e * 2);
                    if (value.images[f]){
                        arr[e][i] = value.images[f];
                    }
                }
            }
        }
    });

</script>

<div class="{value.display}">
    {#each arr as row}
        <div class="row">
            {#each row as image}
                <div class="col">
                    <SanityImage image={image}/>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>

    /* .carousel */
    .dynamic .row {
        display:    inline-flex;
        gap:        var(--innerRaidus);}
    .dynamic .col {
        display:    inline-flex;}
    .dynamic .col:not(:only-child) {
        flex-basis: inherit;}


    :global(imgGal div) {
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        background:
                linear-gradient(to right,
                var(--backgroundAccent) 8%,
                var(--fadedColourAcc) 18%,
                var(--backgroundAccent) 33%);
        background-size: 800px 100px;}

    :global(imgGal div.loaded) {
        animation-duration: 0s;
        background: var(--backgroundAccent);}

    :global(imgGal div.loaded img) {
        opacity:    1;}

    :global(imgGal img) {
        width:      100%;
        margin:     0;
        opacity:    0;
        display:    block;
        transition: opacity 500ms ease-out;}
</style>