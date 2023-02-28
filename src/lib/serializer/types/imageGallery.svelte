<script>
    import { onMount } from "svelte";

    export let portableText = null;
    let { value } = portableText;

    const sideArr    = ["Left ","Right ","Centre "];
    const NumArr     = ["First ","Second ","Third ","Fourth ","Fifth ","Sixth ","Seventh ","Eighth ","Ninth ","Tenth "];

    let returnSheet = null, commentSheet;
	let imageArray = [], commentArray = [], titles = []

	const fetch = (cite,i) => {
        return [cite, value.images[i].alt, value.images[i].citation, value.images[i].citeURL];
    }

    const
		horizontalRow = () => { // Carousel, Scroll, Vertical
			commentArray[0] = [];
			imageArray = value.images;

			for (let i in value.images) {
				if (value.images[i].alt) {
					commentArray[0][i] = fetch(NumArr[i] + "image: ",i);
                }}},

    	regularGrid = () => { // Dynamic Grid, Grid
			for (let e = 0; e < Math.ceil(value.images.length / 2); e++) {
				imageArray[e] = [];
				commentArray[e] = [];
				for (let i = 0; i < 2; i++) {
					let f = i + (e * 2);
					if (value.images[f]) {
						imageArray[e][i] = value.images[f];
						if (value.images[f].alt) {
                            let text = value.images.length === f + 1 && f % 2 === 0 ? sideArr[2] : sideArr[i];
                            commentArray[e][i] = fetch(text + "image: ", f);
                        }}}
                if (commentArray[e].length > 0) {
                    titles[e] = NumArr[e] + "row;";}
            }},

		dynamicGrid = () => { // Dynamic Vertical
			for (let e = 0; e < 2; e++) {
				imageArray[e] = [];
				commentArray[e] = [];

				for (let i = 0; i < Math.ceil(value.images.length / 2); i++) {
					let f = e + (i * 2);
					if (value.images[f]) {
						imageArray[e][i] = value.images[f];
                        if (value.images[f].alt) {
                            commentArray[i][i] = fetch(NumArr[e] + "image: ",f);
                        }}}

                if (commentArray[e].length > 0) {
                    titles[e] = sideArr[e] + "column;";
                }}
		};

    if (value.images.length <= 1) {
        value.display = "vertical";}
    else if (value.images.length === 2 && value.display === "dynamicvertical") {
        value.display = "grid";}

    onMount(async () => {
        switch (value.display) {
            case "carousel":
                horizontalRow(value.images);
                returnSheet = (await import(`./galleryTypes/carousel.svelte`)).default;
                break;
            case "dynamicgrid":
                regularGrid(value.images);
                returnSheet = (await import(`./galleryTypes/dynamicGrid.svelte`)).default;
                break;
            case "dynamicvertical":
                dynamicGrid(value.images);
                returnSheet = (await import(`./galleryTypes/dynamicVertical.svelte`)).default;
                break;
            case "grid":
                regularGrid(value.images);
                returnSheet = (await import(`./galleryTypes/grid.svelte`)).default;
                break;
            case "scroll":
                horizontalRow(value.images);
                returnSheet = (await import(`./galleryTypes/scroll.svelte`)).default;
                break;
            case "vertical":
                horizontalRow(value.images);
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
            default:
                horizontalRow(value.images);
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
        }

        commentSheet = (await import(`./galleryTypes/citationBlock.svelte`)).default
    });
</script>

<svelte:component this={returnSheet} push="{imageArray}"/>
{#if value.comments}
	<svelte:component this={commentSheet} push={commentArray} titles={titles}/>
{/if}