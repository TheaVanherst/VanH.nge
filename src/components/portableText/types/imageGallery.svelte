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
        else if (value.display === "carousel" || value.display === "dynamicinline" ) {
            arr = [value.images]
            y = value.images.length;
        }
        else if(value.display === "dynamicgrid" || value.display === "grid"){
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
        else if (value.display === "dynamicvertical") {
            for (let e = 0; e < 2; e++){
                arr[e] = []
                for (let i = 0; i < Math.ceil(value.images.length / 2); i++){
                    let f = e + (i * 2);
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
        <div class="row" style="--yWid: {y}">
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
        border-radius:  var(--outerRadius);
        margin-bottom:  var(--contentPaddingY);
        overflow:       hidden;

        scrollbar-color:    var(--accent1) var(--backgroundAccent2);
        scrollbar-width:    thin;}
    .table::-webkit-scrollbar {
        width:      3px;
        height:     3px;}
    .row {
        vertical-align: bottom;}
    .col {
        background-color:   var(--backgroundAccent2);
        border-radius:      var(--innerRaidus);
        overflow:           hidden;}

    /* Dynamic Grid */

    .dynamicgrid .row {
        display:    inline-flex;
        gap:        var(--imageSpacing);}
    .dynamicgrid .row:not(:last-of-type) {
        padding-bottom: var(--imageSpacing);}
    .dynamicgrid .col:not(:only-child) {
        max-width: 60%;}

    /* Dynamic Inline */

    .dynamicinline .row {
        display:        inline-flex;
        gap:            var(--imageSpacing);}
    .dynamicinline .col {
        max-width: calc(110% / var(--yWid));}

    /* Dynamic Vertical */

    .dynamicvertical {
        display:        inline-flex;
        column-count:   2;
        gap:    5px;
        width:  100%;
        height: max-content;}
    .dynamicvertical .row {
        display:    grid;
        gap:        5px;
        width:      50%;}
    .dynamicvertical .col {
        display:    flex;}
    .dynamicvertical .row:last-of-type {
        flex: max-content;}


    /* Grid */

    .grid .row {
        width:      100%;
        display:    inline-flex;
        gap:        var(--imageSpacing);}
    .grid .row:not(:last-of-type) {
        padding-bottom:     var(--imageSpacing);}

    .grid .col {
        transition: width 250ms ease-out, height 250ms ease-in;
        display:    inline-block;
        width:      50%;}
    .grid .col:only-child {
        width:      inherit;}

    /*.grid .col:active {*/
    /*    width:      200%;*/
    /*    max-width:  inherit;}*/

    /* Carousel */

    .carousel {
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type:   x mandatory;
        border-radius:      var(--innerRaidus);

        width:      calc(100% - 2px);
        position:   relative;}
    .carousel .row {
        gap:        var(--imageSpacing);
        height:     350px;
        width:      calc(100% * var(--yWid));
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
        margin-right:   var(--imageSpacing);}

</style>