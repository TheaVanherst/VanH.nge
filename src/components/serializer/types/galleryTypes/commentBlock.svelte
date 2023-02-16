<script>
    const sideArr    = ["Left ","Right ","Centre "];
    const NumArr     = ["First ","Second ","Third ","Fourth ","Fifth ","Sixth ","Seventh ","Eighth ","Ninth ","Tenth "];

    const horizontal =  ["carousel","dynamicInline","scroll","vertical"];
    const vertical   =  ["dynamicVertical", "grid"];
    const dynamic    =  ["dynamicGrid"];

    export let push = [], req = null;
    let commentPush = [], title = [];

    const horizontalRow = () => {
        commentPush[0] = [];

        for (const i in push){
            if (push[i].alt) {
                commentPush[0][i] = [NumArr[i] + "image: ", push[i].alt, push[i].citeURL];}}};

    const dynamicGrid = () => {
        for (const i in push) {
            commentPush[i] = [];

            if (push[i].length === 1){
                commentPush[i][0] = [sideArr[2] + "image:", push[i][0].alt, push[i][0].citeURL];}
            else {
                for (const e in push[i]) {
                    if (push[i][e].alt) {
                        commentPush[i][e] = [sideArr[e] + "image: ", push[i][e].alt, push[i][e].citeURL];}}}
            if (commentPush[i].length !== 0) {
                title[i] = NumArr[i] + "row;";}}};

    const verticalGrid = () => {
        for (const i in push) {
            let tick = 0;
            commentPush[i] = [];

            for (const e in push[i]) {
                if (push[i][e].alt) {
                    commentPush[i][e] = [NumArr[e] + "image: ", push[i][e].alt, push[i][e].citeURL];}
                else {
                    tick++;}}

            if (commentPush[i].length !== 0) {
                title[i] = sideArr[i] + "column;";}}};

    if (horizontal.includes(req)) {     horizontalRow();}
    else if (vertical.includes(req)){   verticalGrid();}
    else if (dynamic.includes(req)){    dynamicGrid();}
</script>

{#each commentPush as row, i}
    {#if title[i] !== undefined}
        <span>
            {title[i]}
        </span>
    {/if}
    <div class="GalleryCite">
        {#each row as comment, e}
            {#if comment && comment[0]}
                <p>
                    <span>{comment[0]}</span>
                    <span>{comment[1]}</span>

                    {#if comment[2]}
                        <span><a href={comment[2]} target="_blank">
                            <sup>[]</sup>
                        </a></span>
                    {/if}
                </p>
            {/if}
        {/each}
    </div>
{/each}

<style lang="scss">
	a {
        &:hover {
	        text-decoration: underline 1px;
        }
	}
</style>