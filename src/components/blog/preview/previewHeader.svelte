<script>
    import {createdPush, updatedPush} from "../../dateBuilder.js"
    import AuthorTag from "$components/generic/authorTag.svelte";

    export let createdOn = null, updatedOn = null, publishedOn = null;
    export let authoruser = null, editoruser = null, editorTwitter = null, authorTwitter = null;

    let publishDate = publishedOn ? publishedOn : createdOn;
</script>


<header>
    <div class="userData">
        {#if editoruser}
            <AuthorTag preview={true} linkUrl="{editorTwitter}" content="{updatedPush(updatedOn, publishDate)} by">{editoruser}</AuthorTag>
        {:else}
            <AuthorTag preview={true} linkUrl="{authorTwitter}" content="{createdPush(publishDate, 'shortDate')} by">{authoruser}</AuthorTag>
        {/if}
    </div>
</header>

<style lang="scss">
    header {
	    > div {
		    white-space: nowrap;
		    width: auto;
	    }
    }

    span {
	    line-height: 100%;
        color:      var(--textColourInvert);

	    &::selection {
		    color: var(--accent1);
		    background-color: var(--background);
	    }
    }

    .userData {
        background-color: var(--accent1);
	    color: var(--background);
        border-bottom-left-radius: var(--innerRaidus);
	    border-bottom-right-radius: var(--innerRaidus);

        margin:         0 0 var(--contentPaddingY) 0;
        padding:    5px 10px;
        width:          auto;
        font-size:      13px;

	    div {
		    padding: var(--contentPaddingY) var(--contentPaddingX);
	    }
    }
</style>