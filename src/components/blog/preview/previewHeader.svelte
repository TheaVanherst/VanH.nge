<script>
    import {createdPush, updatedPush} from "../../dateBuilder.js"

    import AuthorTag from "$components/generic/authorTag.svelte";
    import TitleModule from "../postHeader.svelte"

    export let createdOn = null, updatedOn = null, publishedOn = null;
    export let authoruser = null, editoruser = null, authorTwitter = null, editorTwitter = null;

    export let titleHeader = null, title = null;

    let publishDate = publishedOn ? publishedOn : createdOn;
</script>


<header>
    <TitleModule titleHeader={titleHeader}	title={title}/>

    <div class="userData">
        {#if editoruser}
            <AuthorTag preview={true} linkUrl={editorTwitter} content="{updatedPush(updatedOn, publishDate)} by">{editoruser}</AuthorTag>
        {:else}
            {#if authoruser === editoruser}
                <AuthorTag preview={true} linkUrl={authorTwitter} content="{updatedPush(updatedOn, publishDate)} by">{authorTwitter}</AuthorTag>
            {:else}
                <AuthorTag preview={true} linkUrl={authorTwitter} content="{createdPush(publishDate, 'shortDate')} by">{authoruser}</AuthorTag>
            {/if}
        {/if}
    </div>
</header>

<style lang="scss">
    header {
        border-radius:  var(--innerRaidus);
        overflow:       hidden;

	    margin:         0 0 var(--contentPaddingY) 0;

	    .userData {
		    white-space:    nowrap;
		    overflow:       hidden;

		    background-color:   var(--accent1);
		    color:              var(--background);

		    padding:    5px 10px;
		    width:      auto;
		    font-size:  13px;
	    }
    }
</style>