<script>
    export let
        authors = [],
        editors = [];
    export let
        preview = false;  // render type

    let context = ["Published by:", "Edited by:"];

    const filterCheck = (a1,a2,fl = false) => {
        return a1.filter(({ _id: id1 }) =>
            fl ? a2.some(({ _id: id2 }) => id2 === id1)
			  : !a2.some(({ _id: id2 }) => id2 === id1));}

    const results = filterCheck(authors, editors, true);

    if (results.length > 0){
        authors = filterCheck(authors, results);  //there's probably a better way than this.
        editors = filterCheck(editors, results);  //there's probably a better way than this.

        context = ["Published & Edited by:", "Assisted by:"];
        editors = editors.concat(authors);
        authors = results;}

    let content =
        [{  context: context[0], authors: authors,
        },{ context: context[1], authors: editors}]

    content = content.filter((x) => x.authors.length > 0); //lol easy solution to cleaning out

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

                <span class="wrapper nonLink">
                    {author.fullName}
                </span>

                {#if !last(dataType.authors,i)}
                    <span>
                        ,&nbsp;
                    </span>
                {/if}
            {/each}
            {#if !last(content,e)}
			    <span class="divider"></span>
            {/if}
        {/if}
    {/each}
</div>

<style lang="scss">
    @mixin cgm($colour){
        color:   $colour;
        &:hover {
            color:      $colour;
            box-shadow: inset 0 0 0 1px $colour;}}

    .nonLink { @include cgm(var(--accent2))}
    .link {    @include cgm(var(--accent3))}

    .divider {
        padding-left:   10px;
        margin-left:    10px;
    }

    @mixin cge($colour){
        .divider {
            border-left:    1px solid $colour;}}


    .post {
        @include cge(var(--darkAccent3))}
    .preview {
        @include cge(var(--background))}

    .handle {
        width:          min-content;
        white-space:    nowrap;
        position:       relative;

	    span.wrapper {
		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

            text-decoration:    underline 1px;
		    transition:         color .2s ease-in-out, box-shadow .2s ease-in-out;

            &:hover { text-decoration: none;}
        }

	    .link {
		    box-shadow:             inset 0 0 0 0 var(--darkAccent3);
        }
    }
</style>