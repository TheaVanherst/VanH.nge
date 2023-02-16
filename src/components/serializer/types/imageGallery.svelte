<script>
    import {onMount} from "svelte";
    export let portableText = null;
    let {value} = portableText;
    let returnSheet, imageArray;

    const grid = (item) => {
        let arr = [];
        for (let e = 0; e < Math.ceil(item.length / 2); e++) {
            arr[e] = [];
            for (let i = 0; i < 2; i++) {
                let f = i + (e * 2);
                    if (item[f]) {
                        arr[e][i] = item[f];}}}
        return arr;
    }

    const verGrid = (item) => {
        let arr = []
        for (let e = 0; e < 2; e++) {
            arr[e] = []
            for (let i = 0; i < Math.ceil(item.length / 2); i++) {
                let f = e + (i * 2);
                    if (item[f]){
                        arr[e][i] = item[f];}}}
        return arr;
    }

    onMount(async () => {
        switch (value.display) {
            case "carousel":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/carousel.svelte`)).default;
                break;
            case "dynamicgrid":
                imageArray = grid(value.images);
                returnSheet = (await import(`./galleryTypes/dynamicGrid.svelte`)).default;
                break;
            case "dynamicinline":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/dynamicInline.svelte`)).default;
                break;
            case "dynamicvertical":
                imageArray = verGrid(value.images)
                returnSheet = (await import(`./galleryTypes/dynamicVertical.svelte`)).default;
                break;
            case "grid":
                imageArray = grid(value.images);
                returnSheet = (await import(`./galleryTypes/grid.svelte`)).default;
                break;
            case "scroll":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/scroll.svelte`)).default;
                break;
            case "vertical":
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
            default:
                imageArray = value.images
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
        }
    });
</script>

<svelte:component this={returnSheet} push="{imageArray}" comments={value.comments}/>