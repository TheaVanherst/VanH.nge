<script>
    import SanityImage  from '../sanityImage.svelte'
    import AuthorTag    from '../authorTag.svelte'

    export let createdOn = null, updatedOn = null;
    import {createdPush, updatedPush} from "../dateBuilder.js"

    export let authorHandle = null, authorUser = null, authorTwitter = null, authorImage = null,
               editorHandle = null, editorUser = null, editorTwitter = null, editorImage = null;
</script>

<header>
    <div class="profile">
        {#if !authorImage}
            <div class="default">

            </div>
        {:else}
            <div class="author">
                <SanityImage image={authorImage}/>
            </div>
        {/if}
        {#if authorUser !== editorUser && editorImage}
            <div class="editor">
                <SanityImage image={editorImage}/>
            </div>
        {/if}
    </div>

    <div class="date">
        <p class="createdOn">{createdPush(createdOn, "shortDate")}</p>
        {#if updatedOn}
            <p class="updatedOn">{updatedPush(updatedOn, createdOn)}</p>
        {/if}
    </div>

    <div class="userData">
        {#if authorUser === editorUser}
            <AuthorTag
                content="Posted & Edited by"
                linkUrl="{authorTwitter}"
                handle="{authorHandle}"/>
        {:else}
            <AuthorTag
                content="Posted by"
                linkUrl="{authorTwitter}"
                handle="{authorHandle}"/>
            {#if editorHandle}
                <AuthorTag
                    content="Edited by"
                    linkUrl="{editorTwitter}"
                    handle="{editorHandle}"/>
            {/if}
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
	.date {
		background-color: var(--accent1);
		border-bottom-left-radius:  var(--innerRaidus);
		border-bottom-right-radius: var(--innerRaidus);
		overflow: hidden;
		color: black;
		padding:
            var(--contentPaddingY) var(--contentPaddingX)
            var(--contentPaddingY) calc(var(--containerPadding) + 34px);

		p {
            display: block;
            width: 100%;
			&.createdOn {
				font-size:      100%;}
			&.updatedOn {
				text-transform: lowercase;
				font-size:      70%;}

			&::selection {
				color: var(--accent1);
				background-color: var(--background);}}
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