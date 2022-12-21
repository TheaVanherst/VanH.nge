<script>
    import SanityImage from '../../sanityImage.svelte'

    export let portableText
    $: ({value} = portableText)
</script>

<soloImg>
    <SanityImage image={value}/>
</soloImg>

<style>
    soloImg {
        height: 100%;
        width: 100%;
        display: block;}

    :global(soloImg div) {
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

    :global(soloImg div.loaded) {
        animation-duration: 0s;
        background: var(--backgColour);}

    :global(soloImg div.loaded img) {
        opacity:    1;}

    :global(soloImg img) {
        width:      100%;
        margin:     0;
        opacity:    0;
        display:    block;
        transition: opacity 500ms ease-out;}
</style>