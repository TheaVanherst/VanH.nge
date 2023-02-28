<script>
    import { onMount } from "svelte";

    export let portableText = null;
    let { value } = portableText;

    const sideArr    = ["Left ","Right ","Centre "];
    const NumArr     = ["First ","Second ","Third ","Fourth ","Fifth ","Sixth ","Seventh ","Eighth ","Ninth ","Tenth "];

    let returnSheet = null, imageArray = [], commentArray = [], titles = []

    const
		horizontalRow = (item) => { // Carousel, Scroll, Vertical
			commentArray[0] = [];
			imageArray = value.images;

			for (let i in item) {
				if (item[i].alt) {
					commentArray[0][i] = [
						NumArr[i] + "image: ",
						item[i].alt,
						item[i].citation,
						item[i].citeURL];
				}
            }
		},

    	regularGrid = (imgArr) => { // Dynamic Grid, Grid
			for (let e = 0; e < Math.ceil(imgArr.length / 2); e++) {
				imageArray[e] = [];
				commentArray[e] = [];
				for (let i = 0; i < 2; i++) {
					let f = i + (e * 2);
					if (imgArr[f]) {
						imageArray[e][i] = imgArr[f];
						if (imgArr[f].alt) {
							commentArray[e][i] = [
								(imgArr.length === f + 1 && f % 2 === 0 ? sideArr[2] : sideArr[i]) + "image: ",
								imgArr[f].alt,
								imgArr[f].citation,
								imgArr[f].citeURL
                            ];
						}
                    }
                }
            }
		},

		dynamicGrid = (item) => { // Dynamic Vertical
			for (let e = 0; e < 2; e++) {
				imageArray[e] = [];
				commentArray[e] = [];

				for (let i = 0; i < Math.ceil(item.length / 2); i++) {
					let f = e + (i * 2);
					if (item[f]) {
						imageArray[e][i] = item[f];
                        if (item[f].alt) {
                            commentArray[i][e] = [
                                NumArr[e] + "image: ",
                                item[f].alt,
                                item[f].citation,
                                item[f].citeURL
                            ];
                		}
                    }
                }
                if (commentArray[e].length > 0) {
                    titles[e] = sideArr[e] + "column;";
                }
            }
		};

    if (value.images.length <= 1) {
        value.display = "vertical";}
    else if (value.images.length === 2 && value.display === "dynamicvertical") {
        value.display = "grid";}

    let comments

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

        comments = (await import(`./galleryTypes/citationBlock.svelte`)).default
    });
</script>

<svelte:component this={returnSheet} push="{imageArray}"/>
{#if value.comments}
	<svelte:component this={comments} push={commentArray} titles={titles}/>
{/if}