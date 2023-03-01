<script>
    import SanityImage  from '$lib/serializer/imageBuilder.svelte'
    import PostHeader   from "$components/blog/postHeader.svelte";
    import AuthorTag    from "$components/generic/components/authorTag.svelte";

    import { createdPush, updatedPush } from "$lib/dateBuilder.js"

    export let
            createdOn =     null,
            updatedOn =     null,
            publishedOn =   null;
    export let
            titleHeader =   null,
            title =         null,
            subtitle =      null;
    export let
            author =        null,
            editor =        null;

    let publishDate = publishedOn ? publishedOn : createdOn;
</script>

<header>
    <PostHeader titleHeader="{titleHeader}"	title="{title}"/>

    <div class="profile">
        {#if author && author.userPortrait}
            <div class="author">
                <SanityImage image={author.userPortrait}/>
            </div>
        {/if}
        {#if editor && author.handle !== editor.handle && editor.userPortrait}
            <div class="editor">
                <SanityImage image={editor.userPortrait}/>
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
        {#if editor}
            {#if author.handle === editor.handle}
                <AuthorTag
                        social={author.socialMedia}
                        content="Edited & published by ">
                    {author.handle}
                </AuthorTag>
            {:else}
                <AuthorTag
                        social={editor.socialMedia}
                        content="Edited by ">
                    {editor.handle}
                </AuthorTag>
                <AuthorTag social={author.socialMedia}
                           content=", Published by ">
                    {author.handle}
                </AuthorTag>
            {/if}
        {:else}
            <AuthorTag social={author.socialMedia}
                       content="Published by ">
                {author.handle}
            </AuthorTag>
        {/if}
    </div>
</header>

<style lang="scss">
	.date {
		background-color: var(--accent1);

		padding:    10px 15px 10px 50px;
        overflow:   hidden;

		p {
            color:      var(--textColourInvert);
            width:      100%;

			&::selection {
				color:              var(--accent1);
				background-color:   var(--background);}

			&.createdOn {
                font-weight:    800;
				font-size:      100%;}
			&.updatedOn {
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
            left:          -25px;
			max-width:      58px;

			overflow:       hidden;
			position:       absolute;

            &.author {
                margin-top: var(--contentPaddingY);
                border:     1px solid var(--accent3);
            }

			&.editor {
				margin-left:    -30px;
				margin-top:     36px;
				border:         2px solid var(--accent2);
				transform:      scale(50%);
			}
		}
	}
</style>