<script>
    import SanityImage  from '../serializer/imageBuilder.svelte'
    import PostHeader   from "$components/blog/postHeader.svelte";
    import AuthorTag    from "$components/generic/components/authorTag.svelte";

    export let createdOn = null, updatedOn = null, publishedOn = null;
    let publishDate = publishedOn ? publishedOn : createdOn;

    export let titleHeader = null, title = null, subtitle;

    import {createdPush, updatedPush} from "../dateBuilder.js"

    export let authorUser = null, authorTwitter = null, authorImage = null,
               editorUser = null, editorTwitter = null, editorImage = null;
</script>

<header>
    <PostHeader titleHeader="{titleHeader}"	title="{title}"/>

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
        {#if authorUser}
            {#if authorUser === editorUser}
                <AuthorTag content="Posted & Edited by " linkUrl="{authorTwitter}">
                    {authorUser}
                </AuthorTag>
            {:else}
                <AuthorTag content="Posted by " linkUrl="{authorTwitter}">
                    {authorUser}
                </AuthorTag>
                <AuthorTag content=", Edited by " linkUrl="{editorTwitter}">
                    {editorUser}
                </AuthorTag>
            {/if}
        {:else}
            <AuthorTag content="Posted by " linkUrl="{authorTwitter}">
                {authorUser}
            </AuthorTag>
        {/if}
    </div>
</header>

<style lang="scss">
	.date {
		background-color: var(--darkAccent3);
		padding:
            var(--contentPaddingY) var(--contentPaddingX)
            var(--contentPaddingY) calc(var(--containerPadding) + 34px);
        overflow: hidden;

		p {
            color:      var(--textColourInvert);
            width:      100%;

			&::selection {
				color: var(--darkAccent3);
				background-color: var(--backgroundTrans);}

			&.createdOn {
				font-size:      100%;}
			&.updatedOn {
				text-transform: lowercase;
				font-size:      70%;}
        }
	}

	.userData {
		display: flex;
        padding: var(--contentPaddingY) 0 5px calc(var(--contentPaddingY) + 40px);

		width:          auto;
		font-size:      0;

		> *:last-child:not(:first-child) {
			border-left:   1px solid var(--fadedColourAcc);
		}
	}

	.profile {
		position:   relative;

		> div {
            left:          -35px;
			max-width:      58px;
			margin:         var(--contentPaddingY);
			border:         1px solid var(--accent3);

			overflow:       hidden;
			position:       absolute;

			&.editor {
				margin-left:    -20px;
				margin-top:     36px;
				border:         2px solid var(--accent3);
				transform:      scale(50%);
				transition:
						transform 0.5s,
						border 0.5s,
						border-radius 0.5s;
			}
		}
	}
</style>