<script>
    import SanityImage from '../../sanityImage.svelte'
    import {onMount} from "svelte";

    export let portableText;
    $: ({value} = portableText)
    let arr = []; //image array

    /* organizes into array data to be used as columns */

    onMount(() => {
        if(value.display === "vertical" || value.display === "carousel" || value.display === "scroll"){
            arr = [value.images]
        }
        else if(value.display === "dynamic" || value.display === "grid"){
            for (let e = 0; e < Math.ceil(value.images.length / 2); e++){
                arr[e] = []
                for (let i = 0; i < 2; i++){
                    let f = i + (e * 2);
                    if (value.images[f]){
                        arr[e][i] = value.images[f];
        }}}}
    });
</script>

<div class="table {value.display}">
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
    /* TODO: DUMP ALL OF THESE INTO SEPERATE GALLERY TYPES. */

    .table {
        border-radius:  var(--innerRaidus);
        margin-bottom:  var(--contentPaddingY);
        overflow:       hidden;}
    .col {
        border-radius:  var(--innerRaidus);
        overflow:       hidden;}

    .dynamic .row {
        vertical-align: bottom;
        display:        inline-flex;
        gap:            var(--imageSpacing);
        padding-bottom: var(--imageSpacing);}

    .dynamic .col {
        display:    inline-flex;}
    .dynamic .col:not(:only-child) {
        flex-basis: inherit;}

    .scroll {
        overflow-x: scroll;
        overflow-y: hidden;
        scrollbar-color: var(--accent1) var(--backgroundAccent2);
        scrollbar-width: thin;

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