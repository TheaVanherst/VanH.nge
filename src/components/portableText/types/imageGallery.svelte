<script>
    import {onMount} from "svelte";

    export let portableText;
    $: ({value} = portableText)
    let returnSheet, imageArray;

    const grid = () => {
        let arr = [];
        for (let e = 0; e < Math.ceil(value.images.length / 2); e++){
            arr[e] = [];
            for (let i = 0; i < 2; i++){
                let f = i + (e * 2);
                    if (value.images[f]){
                        arr[e][i] = value.images[f];}}}
        return arr;
    }

    const verGrid = () => {
        let arr = []
        for (let e = 0; e < 2; e++){
            arr[e] = []
            for (let i = 0; i < Math.ceil(value.images.length / 2); i++){
            let f = e + (i * 2);
                if (value.images[f]){
                    arr[e][i] = value.images[f];
                }}}
        return arr;
    }

    onMount(async () => {
        switch (value.display) {
            case "carousel":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/carousel.svelte`)).default;
                break;
            case "dynamicgrid":
                imageArray = grid();
                returnSheet = (await import(`./galleryTypes/dynamicGrid.svelte`)).default;
                break;
            case "dynamicinline":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/dynamicInline.svelte`)).default;
                break;
            case "dynamicvertical":
                imageArray = verGrid()
                returnSheet = (await import(`./galleryTypes/dynamicVertical.svelte`)).default;
                break;
            case "grid":
                imageArray = grid();
                returnSheet = (await import(`./galleryTypes/grid.svelte`)).default;
                break;
            case "scroll":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/scroll.svelte`)).default;
                break;
            case "vertical":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default;
        }
    });
</script>

<svelte:component this={returnSheet} push="{imageArray}"/>

<!--<div class="table {value.display}">-->
<!--    {#each arr as row}-->
<!--        <div class="row" style="&#45;&#45;yWid: {y}">-->
<!--            {#each row as image}-->
<!--                <div class="col">-->
<!--                    <SanityImage image={image}/>-->
<!--                </div>-->
<!--            {/each}-->
<!--        </div>-->
<!--    {/each}-->
<!--</div>-->