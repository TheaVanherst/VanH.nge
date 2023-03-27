<script>
    import { createdPush, updatedPush } from "$lib/builders/dateBuilder.js";

    export let
        authors =   [],
        editors =   [];
    export let
        publicationDate =   undefined,
        editDate =          undefined;
    export let
        preview =   false;  // render type

    // this is all over engineered to compensate for mass author data.
    // theoretically, should handle infinite.
    // TODO: mobile compatibility

    let context = [];

    const filterCheck = (a1,a2,fl) => {
        return a1.filter(({ _id: id1 }) =>
            fl ? a2.some(({ _id: id2 }) => id2 === id1)
			  : !a2.some(({ _id: id2 }) => id2 === id1));}

    let results = [];
    if (editors[0] !== undefined) { //prevents breaking via. the editor check.
        results = filterCheck(authors, editors, true)}

    if (results[0] !== undefined){
        authors = filterCheck(authors, results, false);  //there's probably a better way than this.
        editors = filterCheck(editors, results, false);  //there's probably a better way than this.

        context = ["Published & Edited by:", "Assisted by:"];
        authors = results.concat(authors);

        context[0] = `${!!editDate ? updatedPush(editDate,"Published & Edited") : "Published & Edited"} by`
        context[1] = `With assistance from`
    } else {
        context[0] = `${publicationDate && !(!!editDate) ? createdPush(publicationDate) : "Published"} by`
        context[1] = `${!!editDate ? preview ? updatedPush(editDate, "Edited") : updatedPush(editDate) : "Edited"} by`
    }

    let content =
        [{   context: context[1], authors: editors
        }, { context: context[0], authors: authors}];

    content = content.filter((x) => x.authors[0] !== undefined);
    let last = (a, i) => i === a.length - 1;
</script>

<div
    class="handle {preview ? 'preview' : 'post'}">
    {#each content as dataType, e}
        {#if dataType?.authors.length > 0}
            <span class="selectionInv">
                {dataType.context}&nbsp;
            </span>
            {#each dataType.authors as author, i}
                {#if author.slug}
                    <a href="/authors/{author.slug}">
                    <span class="wrapper link">
                        {author?.fullName}
                    </span>
                    </a>
                {:else}
                    <span class="wrapper nonLink">
                        {author?.fullName}
                    </span>
                {/if}

                {#if !last(dataType.authors,i)}
                    <span>
                        ,&nbsp;
                    </span>
                {/if}
            {/each}
            {#if !last(content,e)}
                <span>
                    ,&nbsp;
                </span>
            {/if}
        {/if}
    {/each}
</div>

<style lang="scss">
    @mixin cgm($colour, $ogTones, $thickness, $filled){
        color:      $colour;
        box-shadow: inset 0 0 0 0 $ogTones;
        &::selection {
            background: $colour;}

        &:hover {
            color:      $filled;
            box-shadow: inset 0 0 0 $thickness $colour;}}

    .nonLink { @include cgm(var(--accent4), var(--accent2), 1px, var(--accent4));} // DOESN'T DO ANYTHING
    .link {@include cgm(var(--accent2), var(--accent1), 100px, var(--background));}

    @mixin cge($colour){
        .divider {
            border-left:    1px solid $colour;}}

    .divider {
        padding-left:   10px;
        margin-left:    10px;}

    .post {     @include cge(var(--darkAccent3));}
    .preview {  @include cge(var(--background));}

    .handle {
        width:          min-content;
        white-space:    nowrap;
        position:       relative;
        display:        inline;
        font-size:      0;

	    span.wrapper {
		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

            text-decoration:    underline 1px;
		    transition:         color .2s ease-in-out, box-shadow .2s ease-in-out;

            &:hover { text-decoration: none;}}}
</style>