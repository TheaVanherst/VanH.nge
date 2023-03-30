<script>
    import { createdPush, updatedPush } from "$lib/builders/dateBuilder.js";
    import AuthorToolTip from "$components/generic/authorToolTip.svelte";

    export let
        authors =   [],
        editors =   [];
    export let
        publicationDate =   undefined,
        editDate =          undefined;
    export let
        preview =   false;  // render type

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
        authors = results.concat(authors); // merges the authors + (authors + editors) for simplicity.
            // this remains here just incase I want to change it at a later date.

        // date context constructors // TODO: THESE NEED MOBILE COMPENSATION.
        context[0] = `${!!editDate ? updatedPush(editDate,"Published by & edited") : "Published by & edited"} by`
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
                <AuthorToolTip author={author}/>

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
        display:        inline;}
</style>