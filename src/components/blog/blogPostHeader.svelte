<script>
    import SanityImage  from '../serializer/imageBuilder.svelte'
    import AuthorTag    from '../generic/components/authorTag.svelte'

    export let createdOn = null, updatedOn = null, publishedOn = null;
    let publishDate = publishedOn ? publishedOn : createdOn;
    import {createdPush, updatedPush} from "../dateBuilder.js"

    export let authorHandle = null, authorUser = null, authorTwitter = null, authorImage = null,
               editorHandle = null, editorUser = null, editorTwitter = null, editorImage = null;
</script>

<header>
    <div class="profile">
        {#if authorImage}
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
        <p class="createdOn">{createdPush(publishDate, 'shortDate')}</p>
        {#if updatedOn}
            <p class="updatedOn">{updatedPush(updatedOn, publishDate)}</p>
        {/if}
    </div>

    <div class="userData">
        {#if editorHandle}
            {#if editorHandle === authorHandle}
                <AuthorTag content="Posted & Edited by " linkUrl="{authorTwitter}">
                    {authorHandle}
                </AuthorTag>
            {:else}
                <AuthorTag content="Edited by " linkUrl="{editorTwitter}">
                    {editorHandle}
                </AuthorTag>
            {/if}
        {:else}
            <AuthorTag content="Posted by " linkUrl="{authorTwitter}">
                {authorHandle}
            </AuthorTag>
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
		padding:
            var(--contentPaddingY) var(--contentPaddingX)
            var(--contentPaddingY) calc(var(--containerPadding) + 34px);
        overflow: hidden;

		p {
            color:      var(--textColourInvert);
            width:      100%;

			&::selection {
				color: var(--accent1);
				background-color: var(--background);}

			&.createdOn {
				font-size:      100%;}
			&.updatedOn {
				text-transform: lowercase;
				font-size:      70%;}
        }
	}

	.userData {
		border-bottom:  var(--border-thickness) solid var(--textColour);

		margin:         0 0 var(--contentPaddingY) 0;
        padding:        var(--contentPaddingY) 0 var(--contentPaddingY) calc(var(--contentPaddingY) + 40px);

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

        color: white;

		> div {
			max-width:      59px;
			margin:         var(--contentPaddingY);

			border-radius:  var(--innerRaidus);
			border:     var(--border-thickness) solid var(--accent1);

			position:   absolute;

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
			}
		}
	}
</style>