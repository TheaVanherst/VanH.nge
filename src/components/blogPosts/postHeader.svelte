<script>
    import MobileQuery  from '../../lib/mobileQuery.svelte'
    import AuthorTag    from '../authorTag.svelte'

    export let createdOn, updatedOn;
    import DateModule from "../dateBuilder.svelte"

    export let tags;
    import TagModule from "../tagModule.svelte"

    export let authorhandle, authoruser, authorTwitter, authorImage,
               editorhandle, editoruser, editorTwitter, editorImage;

    import client from '../../lib/sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}
</script>

<header>
    <div class="profile">
        <img src="{urlFor(authorImage).width(250).auto('format')}"/>
        {#if authoruser !== editoruser && editorImage}
            <img class="editor" src="{urlFor(editorImage).width(250).auto('format')}"/>{/if}
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

        > img {
	        max-width:      60px;
	        margin:         var(--contentPaddingY);
	        border-radius:  var(--innerRaidus);

	        position:   absolute;
	        border:     var(--border-thickness) solid var(--accent1);

	        transition:
			        border 0.5s;

	        &:hover {
		        border-color: var(--accent3);
            }
        }

	    > img.editor {
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
</style>