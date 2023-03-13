<script>
    import { onMount } from "svelte";
    import CitationBlock from "$lib/serializer/types/citationBlock.svelte";

    // this checks if it's a portable text comp or a manual request from a component -
	// and streamlines it into the same type of data, so it can be requested at will.
    export let portableText = null;
    export let margin = 5;
    let value = portableText?.value ? portableText?.value : portableText;

    const sideArr = [
        "Left ",	"Right ",	"Centre "];
    const NumArr = [
        "First ",	"Second ",	"Third ",
		"Fourth ",	"Fifth ",	"Sixth ",
		"Seventh ",	"Eighth ",	"Ninth ",
		"Tenth "];

    let returnSheet = 	null;

	let imageArray = 	[],
		commentArray = 	[],
		titles = 		[];

	let length = 		0;

	const fetch = (cite,i) => {
        if (value.images[i].alt[value.images[i].alt.length-1] === ".") {
            value.images[i].alt = value.images[i].alt.slice(0,-1);} //removes fullstops at the end of the citation.

        return [cite,
				value.images[i].alt,
				value.images[i].citation,
				value.images[i].citeURL,
				value.images[i].blank];
    };

    const
		horizontalRow = () => { // Carousel, Scroll, Vertical
			commentArray[0] = [];
			imageArray = value.images;

			for (let i in value.images) {
				if (value.images[i].alt) {
                    length++;
					commentArray[0][i] = fetch(NumArr[i] + "image: ",i);
                }}},

    	regularGrid = (width) => { // Dynamic Grid, Grid
            // splits into a grid format, and goes left to right.
            if (!width) {
                width = 2; //fallback if no column count is not declared.
            }

			for (let e = 0; e < Math.ceil(value.images.length / width); e++) {
                imageArray[e] = 	[];
                commentArray[e] = 	[]; // establishes 2d arrs

				for (let i = 0; i < width; i++) {
					let f = i + (e * width);

					if (value.images[f]) {
						imageArray[e][i] = value.images[f];

						if (value.images[f].alt) {
                            length++;
                            let text = value.images.length === f + 1 && f % width === 0 ? sideArr[2] : sideArr[i];
                            commentArray[e][i] = fetch(text + "image: ", f);
                        }}}

                if (commentArray[e].length > 0) { //if the column includes citation, declare which column it's in.
                    titles[e] = NumArr[e] + "row;";}
            }

            if (titles && titles.length <= 1){
                titles = [];}
        },

		dynamicGrid = (width) => { // Dynamic Vertical
        	// splits into columns, and goes downwards.
			if (!width) {
                width = 2; //fallback if no column count is not declared.
            }

			for (let e = 0; e < width; e++) {
				imageArray[e] = 	[];
				commentArray[e] = 	[]; // establishes 2d arrs

				for (let i = 0; i < Math.ceil(value.images.length / width); i++) {
					let f = e + (i * width); // calculated vertical placement in row

					if (value.images[f]) { //checks if image exists
						imageArray[e][i] = value.images[f]; //assigns image to 2d arr
                        if (value.images[f].alt) { //checks for citation
                            length++;
                            commentArray[e][i] = fetch(NumArr[i] + "image: ",f); //adds citation accordance of image arr
                        }}}

                if (commentArray[e].length > 0) { //if the column includes citation, declare which column it's in.
                    titles[e] = sideArr[e] + "column;";}
            }
		};

    if (value.images.length <= 1) {
        	value.display = "vertical";} // prevents scroll / carousel being used for 1 image cases.
    else if (
        value.images.length === 2 &&
		value.display === "dynamicvertical") {
        	value.display = "grid";} // prevents flex containers ruining images for a single row.

    onMount(async () => {
        switch (value.display) {
            case "carousel":
                horizontalRow();
                returnSheet = (await import(`./galleryTypes/carousel.svelte`)).default;
                break;
            case "dynamicgrid":
                regularGrid();
                returnSheet = (await import(`./galleryTypes/dynamicGrid.svelte`)).default;
                break;
            case "dynamicvertical":
                dynamicGrid();
                returnSheet = (await import(`./galleryTypes/dynamicVertical.svelte`)).default;
                break;
            case "grid":
                regularGrid();
                returnSheet = (await import(`./galleryTypes/grid.svelte`)).default;
                break;
            case "scroll":
                horizontalRow();
                returnSheet = (await import(`./galleryTypes/scroll.svelte`)).default;
                break;
            case "vertical":
                horizontalRow();
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
			default: //fallback, "JUST INCASE".
                horizontalRow();
                returnSheet = (await import(`./galleryTypes/vertical.svelte`)).default
                break;
        }

        // to add to this, copy and paste and pick how you want it to be divided through a function call
		// then add the return sheet via; /lib/serializer/gallerytypes/[galleryFormat].svelte
		// the case HAS to be equal to what the name is in the CMS.
    });
</script>

{#if returnSheet}
	<div style="margin-bottom:{margin}px">
		<svelte:component this={returnSheet} push="{imageArray}"/>
	</div>
{:else}
	<div class="imagePreview gen{Math.floor(Math.random() * 3)}">
		<div></div>
	</div>
{/if}

{#if returnSheet && length > 0}
	{#if returnSheet}
		<div style="margin-bottom:{margin}px">
			<CitationBlock push={commentArray} titles={titles}/>
		</div>
	{:else}
		<div style="margin-bottom:{margin}px"
			 class="citePreview"></div>
	{/if}
{/if}

<style lang="scss">
	$backgroundSize: 800px;

	@mixin cgm($aspect, $cols, $height){
		aspect-ratio: 	$aspect;
		column-count: 	$cols;
		> * {
			height: 	$height;}}

	.gen0 {@include cgm(1/1, 1, 100%);}
	.gen1 {@include cgm(1/0.5, 2, 200%);}
	.gen2 {@include cgm(1/0.3, 3, 300%);}

	.shimmer {
		animation-duration: 	2s;
		animation-fill-mode: 	forwards;
		animation-name: 		placeHolderShimmer;

		animation-iteration-count: 	infinite;
		animation-timing-function: 	linear;

		background: linear-gradient(to right,
				var(--backgroundAccent2) 8%,
				var(--backgroundAccent1) 18%,
				var(--backgroundAccent2) 33%);
		background-size: $backgroundSize 104px;
	}

	.imagePreview {
		width: 		100%;
		gap: 		var(--imageSpacing);

		> * {
			@extend .shimmer;
			width: 		100%;
			display: 	flex;
		}
	}

	.citePreview {
		@extend .shimmer;

		width: 	100%;
		height: 20px;
		margin: var(--imageSpacing) 0;
	}

	@keyframes placeHolderShimmer {
		0% {    background-position:    0 0}
		100% {  background-position:    $backgroundSize 0}}
</style>