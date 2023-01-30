<script>
    import SanityImage from '../../sanityImage.svelte'

    export let portableText = null;
    $: ({value} = portableText)
</script>

<div class="soloParent">
    <soloImg>
        <SanityImage image={value}/>
    </soloImg>
</div>

<style>

    /* parent container defining */

    soloImg {
        border-radius: var(--innerRaidus);
        overflow: hidden;
        display: block;}
    .soloParent:not(:last-child) {
        padding: 0px 5px 10px 5px;}
    .soloParent:last-child {
        padding: 0px 5px 5px 5px;}

    /* general CSS loading */

    :global(soloImg div) {
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

    :global(soloImg div.loaded) {
        animation-duration: 0s;
        background: var(--backgroundAccent);}

    :global(soloImg div.loaded img) {
        opacity:    1;}

    :global(soloImg img) {
        width:      100%;
        margin:     0;
        opacity:    0;
        display:    block;
        transition: opacity 500ms ease-out;}
</style>