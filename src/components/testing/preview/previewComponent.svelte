<script>
    import PostModule       from "$lib/serializer/portableText.svelte"

    import TagModule        from "$components/globals/tagModule.svelte";
    import PreviewContainer from "$components/globals/containers/prevContainer.svelte";
    import InvContainer     from "$components/globals/containers/invContainer.svelte";

    import AuthorTag        from "$components/globals/authorTag.svelte";
    import PostHeader       from "$components/blog/postTitleCard.svelte"

    import { createdPush, updatedPush } from "$lib/dateBuilder.js"

    export let post = null;
</script>

<PreviewContainer hoverBool="{true}" urlDirect={'/test/' + post.slug}>
    <div class="test" id="test-{post.slug}">
        <PostHeader titleHeader={post.headerImage}	title={post.title}/>

        <InvContainer overflowBool={false} colour="green">
            {#if post.editor}
                {#if post.author === post.editor}
                    <AuthorTag
                            preview={true} social={post.author.socialMedia}
                            content="{updatedPush(post._updatedAt, post.createdWhen)} by">
                        {post.author.handle}
                    </AuthorTag>
                {:else}
                    <AuthorTag
                            preview={true} social={post.editor.socialMedia}
                            content="{updatedPush(post._updatedAt, post.createdWhen)} by">
                        {post.editor.handle}
                    </AuthorTag>
                {/if}
            {:else}
                <AuthorTag
                        preview={true} social={post.author.socialMedia}
                        content="{createdPush(post.createdWhen)} by">
                    {post.author.handle}
                </AuthorTag>
            {/if}
        </InvContainer>

        <TagModule time="{post._createdAt}" tags={post.categories}/>

        <div class="nonClickable">
            <p class="description">
                {post?.description}
            </p>
            <PostModule postData="{post?.body}"/>
        </div>
    </div>
</PreviewContainer>

<style lang="scss">
	.test {
        position:   relative;
        display:    contents;

		.description {
			padding-bottom: var(--containerPadding);
			border-bottom:  1px solid var(--backgroundAccent1);
			margin-bottom:  var(--containerPadding);
		}

        .nonClickable {
	        pointer-events: none;
	        max-height:     200px;
        }
	}
</style>