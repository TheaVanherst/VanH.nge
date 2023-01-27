<script>
    import MobileQuery  from '$lib/mobileQuery.svelte'
    import SanityImage  from '../../../components/sanityImage.svelte'

    import AuthorTag    from '../../../components/authorTag.svelte'

    export let createdOn, updatedOn;
    import DateModule from "../../../components/dateBuilder.js"

    export let tags;
    import TagModule from "../../../components/tagModule.svelte"

    export let authorhandle, authoruser, authorTwitter, authorImage,
               editorhandle, editoruser, editorTwitter, editorImage;
</script>

<header>
    <div class="profile">
        <div class="author">
            <SanityImage image={authorImage}/>
        </div>
        {#if authoruser !== editoruser && editorImage}
            <div class="editor">
                <SanityImage image={editorImage}/>
            </div>
        {/if}
    </div>

    <div class="date">
        <MobileQuery query="(min-width: 750px)" let:matches>
            {#if matches}
                <DateModule dateFormat="fullDate" createdOn={createdOn} updatedOn={updatedOn} /> {:else}
                <DateModule dateFormat="tinyDate" createdOn={createdOn} updatedOn={updatedOn} /> {/if}
        </MobileQuery>
    </div>

    <div class="userData">
        {#if authoruser === editoruser}
            <AuthorTag
                content="Posted & Edited by"
                linkUrl="{authorTwitter}"
                handle="{authorhandle}"/>
        {:else}
            <AuthorTag
                content="Posted by"
                linkUrl="{authorTwitter}"
                handle="{authorhandle}"/>
            {#if editorhandle}
                <AuthorTag
                    content="Edited by"
                    linkUrl="{editorTwitter}"
                    handle="{editorhandle}"/>
            {/if}
        {/if}
    </div>
    <TagModule time="{createdOn}" tags="{tags}" />
</header>

<style lang="scss">
    header {
	    > div {
		    white-space: nowrap;
		    width: auto;
	    }
    }

    .date {
        background-color: var(--accent1);
        padding-left: calc(var(--contentPaddingY) + 24px);
        border-bottom-left-radius:  var(--innerRaidus);
        border-bottom-right-radius: var(--innerRaidus);
        overflow: hidden;
    }

    .userData {
        border-bottom:  var(--border-thickness) solid var(--textColour);
        margin:         0 0 var(--contentPaddingY) 0;
        padding-left:   calc(var(--contentPaddingY) + 24px);
        width:          auto;
        font-size:      0;

	    > * {
		    display:        table-cell;
		    width:          min-content;
		    line-height:    normal;
		    font-size:      80%;
		    margin:         0;}
	    > *:last-child:not(:first-child) {
		    border-left:   1px solid var(--fadedColourAcc);
        }
    }

    .profile {
        margin-left: -35px;
	    box-shadow: var(--dropShadow) 5px 5px;

        > div {
	        max-width:      60px;
	        margin:         var(--contentPaddingY);
	        border-radius:  var(--innerRaidus);
	        border:     var(--border-thickness) solid var(--accent1);
	        position:   absolute;

	        &.author {

		        transition:
				        border 0.5s;

		        &:hover {
			        border-color: var(--accent3);
		        }
	        }

	        &.editor {
		        margin-left:    -20px;
		        margin-top:     42px;

		        border:         2px solid var(--accent1);
		        transform:      scale(50%);
		        border-radius:  var(--outerRadius);

		        transition:
				        transform 0.5s,
				        border 0.5s,
				        border-radius 0.5s;

		        &:hover { // this is kinda lazy
			        border-radius:  var(--innerRaidus);
			        border:         1px solid var(--accent2);
			        transform:      scale(100%);
		        }
	        }
        }
    }
</style>