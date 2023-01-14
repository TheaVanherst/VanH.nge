<script>
    import SanityImage from '../../sanityImage.svelte'
    import {onMount} from "svelte";

    export let portableText;
    $: ({value} = portableText)
    let y, arr = []; //image array & width setup.

    onMount(() => {
        if(value.display === "vertical" || value.display === "scroll"){
            arr = [value.images]
        }
        else if (value.display === "carousel") {
            arr = [value.images]
            y = value.images.length;
        }
        else if(value.display === "dynamic" || value.display === "grid"){
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

    console.log(arr)
</script>

<div class="table {value.display}">
    {#each arr as row}
        <div class="row" style="--yWid: {y}00%">
            {#each row as image}
                <div class="col">
                    <SanityImage image={image}/>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    /* TODO: DUMP ALL OF THESE INTO SEPERATE GALLERY TYPES. */

    .table {
        border-radius:  var(--innerRaidus);
        margin-bottom:  var(--contentPaddingY);
        overflow:       hidden;

        scrollbar-color: var(--accent1) var(--backgroundAccent2);
        scrollbar-width: thin;}
    .table::-webkit-scrollbar {
        width: 3px;
        height: 3px;}

    .col {
        border-radius:  var(--innerRaidus);
        overflow:       hidden;}
    .row {
        background-color: var(--backgroundAccent2);
    }

    /* Stacked Vertically */

    .stacked {

    }

    /* Dynamic Inline */

    .dynamic .row {
        vertical-align: bottom;
        display:        inline-flex;
        gap:            var(--imageSpacing);
        padding-bottom: var(--imageSpacing);}

    .dynamic .col {
        display:    inline-flex;}
    .dynamic .col:not(:only-child) {
        flex-basis: inherit;}

    /* Dynamic Vertical */


    /* Grid */



    /* Scroll */



    /* Carousel */

    .carousel {
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type:   x mandatory;
        border-radius:      var(--innerRaidus);

        width:      calc(100% - 2px);
        position:   relative;}
    .carousel .row {
        height:     350px;
        width:      var(--yWid);
        display:    inline-flex;}

    .carousel .col {
        scroll-behavior:    smooth;
        scroll-snap-align:  start;

        height:     350px;
        width:      100%;
        max-width:  inherit;

        display:    inline-block;
        position:   relative;
        overflow:   hidden;}

    /* scroll */

    .scroll {
        overflow-x: scroll;
        overflow-y: hidden;

        width:      calc(100% - 2px);
        position:   relative;}
    .scroll .row {
        height:     250px;
        display:    inline-flex;}
    .scroll .col {
        height:     250px;
        width:      250px;
        display:    inline-block;
        position:   relative;
        overflow:   hidden;}
    .scroll .col:not(:last-of-type) {
        margin-right: var(--imageSpacing);}

</style>