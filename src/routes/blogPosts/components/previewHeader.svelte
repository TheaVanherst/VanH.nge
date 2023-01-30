<script>
    import {createdPush, updatedPush} from "../../../components/dateBuilder.js"

    export let createdOn = null, updatedOn = null;
    export let authoruser = null, editoruser = null;
</script>


<header>
    <div class="userData">
        {#if updatedOn}
            <span class="updatedOn">{updatedPush(updatedOn, createdOn)}</span>
        {:else}
            <span class="createdOn">{createdPush(createdOn, "shortDate")}</span>
        {/if}
        <span>by</span>
        {#if editoruser}
            <span>{editoruser}</span>
        {:else}
            <span>{authoruser}</span>
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

		    span {
			    font-size: 11px;
			    line-height: 100%;

			    &::selection {
				    color: var(--accent1);
				    background-color: var(--background);
			    }
		    }
	    }
    }
</style>