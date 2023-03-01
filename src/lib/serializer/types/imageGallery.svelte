<script>
	import CitationBlock from "$lib/serializer/types/galleryTypes/citationBlock.svelte";
    import { onMount } from "svelte";

    export let portableText = null;
    let { value } = portableText;

    const sideArr    = ["Left ","Right ","Centre "];
    const NumArr     = ["First ","Second ","Third ","Fourth ","Fifth ","Sixth ","Seventh ","Eighth ","Ninth ","Tenth "];

    let returnSheet = 	null,
		commentSheet = 	null;

	let imageArray = 	[],
		commentArray = 	[],
		titles = 		[];

	const fetch = (cite,i) => {
        return [cite, value.images[i].alt, value.images[i].citation, value.images[i].citeURL];
    };

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
                    titles[e] = NumArr[e] + "row;";
                }}
            if (titles && titles.length <= 1){
                titles = [];
			}
        },

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

        commentSheet = (await import(`./galleryTypes/vertical.svelte`)).default
    });
</script>

{#if returnSheet}
	<svelte:component this={returnSheet} push="{imageArray}"/>
{:else}
	<div class="imagePreview gen{Math.floor(Math.random() * 3)}">
		<div></div>
	</div>
{/if}

{#if commentArray}
	{#if commentSheet}
		<CitationBlock push={commentArray} titles={titles}/>
	{:else}
		<div class="citePreview gen{Math.floor(Math.random() * 2)}"></div>
	{/if}
{/if}

<style lang="scss">
	$backgroundSize: 800px; // pretty sure I don't need this tbh.

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

		&.gen0 {
			aspect-ratio: 1/1;
			column-count: 1;
			> * {
				height: 100%;}
		}
		&.gen1 {
			aspect-ratio: 1/0.5;
			column-count: 2;
			> * {
				height: 200%;}
		}
		&.gen2 {
			aspect-ratio: 1/0.3;
			column-count: 3;
			> * {
				height: 300%;}
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