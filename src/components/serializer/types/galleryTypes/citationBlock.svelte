<script>
    const sideArr    = ["Left ","Right ","Centre "];
    const NumArr     = ["First ","Second ","Third ","Fourth ","Fifth ","Sixth ","Seventh ","Eighth ","Ninth ","Tenth "];

    export let push = [], req = null;
    let commentPush = [], title = [];

    const horizontalRow = () => { // Carousel, Dynamic Inline, Scroll, Vertical
        commentPush[0] = [];

        for (let i in push){
            if (push[i].alt) {
                commentPush[0][i] = [NumArr[i] + "image: ", push[i].alt, push[i].citation, push[i].citeURL];
            }
        }
    };

    const regularGrid = () => { // Dynamic Grid, Grid
        for (let i in push) {
            commentPush[i] = [];

            if (push[i].length === 1){
                if (push[i][0].alt) {
                    commentPush[i][0] = [sideArr[2] + "image:", push[i][0].alt, push[i][0].citation, push[i][0].citeURL];
                }
            } else {
                for (let e in push[i]) {
                    if (push[i][e].alt) {
                        commentPush[i][e] = [sideArr[e] + "image: ", push[i][e].alt, push[i][e].citation, push[i][e].citeURL];
                    }
                }
            }
            if (push.length > 1 && commentPush[i].length > 0) {
                title[i] = NumArr[i] + "row;";
            }
        }
    };

    const dynamicGrid = () => { // Dynamic Vertical
        for (let i in push) {
            let tick = 0;
            commentPush[i] = [];

            for (let e in push[i]) {
                if (push[i][e].alt) {
                    commentPush[i][e] = [NumArr[e] + "image: ", push[i][e].alt, push[i][e].citation, push[i][e].citeURL];
                } else {
                    tick++;
                }
            }

            if (commentPush[i].length > 0) {
                title[i] = sideArr[i] + "column;";
            }
        }
    };

    switch (req) {
        case "carousel":
            horizontalRow();
            break;
        case "dynamicGrid":
            regularGrid();
            break;
        case "dynamicInline":
            horizontalRow();
            break;
        case "dynamicVertical":
            dynamicGrid();
            break;
        case "grid":
            regularGrid();
            break;
        case "scroll":
            horizontalRow();
            break;
        case "vertical":
            horizontalRow();
            break;
        default:
            horizontalRow();
            break;
    }
</script>

{#each commentPush as row, i}
    {#if title[i] !== undefined}
        <span>
            {title[i]}
        </span>
    {/if}
    <div class="GalleryCite">
        {#each row as comment, e}
            {#if comment && comment[1]}
                <p>
                    <span class="position"> {comment[0]}</span>
                    <span class="comment">  {comment[1]}</span>

                    {#if comment[2] && comment[3]}
                        <span>Via; <a href={comment[3]} target="_blank">{comment[2]}</a></span>
                    {:else if comment[3]}
                        <span><a href={comment[3]} target="_blank"><sup>[]</sup></a></span>
                    {/if}
                </p>
            {/if}
        {/each}
    </div>
{/each}

<style lang="scss">
	a {
        &:hover {
	        text-decoration: underline 1px;} }

	span {
		font-family:    monospace;

	    &::selection {
		    background-color: 	var(--darkAccent1)!important;} }

    .position {
        color: var(--darkAccent1);}
</style>