<script>
    import PostModule       from "$lib/serializer/portableText.svelte"

    import TagModule        from "$components/generic/tagModule.svelte";
    import PreviewContainer from "$components/globals/containers/prevContainer.svelte";
    import InvContainer     from "$components/globals/containers/invContainer.svelte";

    import { createdPush, updatedPush } from "$lib/dateBuilder.js"
    import AuthorTag                    from "$components/globals/authorTag.svelte";
    import PostHeader                   from "$components/blog/postTitleCard.svelte";

    export let post = null;
</script>

<PreviewContainer hoverBool="{true}" urlDirect={'/blog/' + post.slug}>
    <div class="post" id="post-{post.slug}">
        <PostHeader titleHeader={post.headerImage}	title={post.title}/>

        <InvContainer overflowBool={false} colour="green">
            {#if post.editor}
                <AuthorTag
                        preview={true} social={post.editor?.socialMedia}
                        content="{updatedPush(post._updatedAt, post.createdWhen)} by">
                    {post.editor.handle}
                </AuthorTag>
            {:else}
                {#if post.author === post.editor}
                    <AuthorTag
                            preview={true} social={post.author?.socialMedia}
                            content="{updatedPush(post._updatedAt, post.createdWhen)} by">
                        {post.author.handle}
                    </AuthorTag>
                {:else}
                    <AuthorTag
                            preview={true} social={post.author?.socialMedia}
                            content="{createdPush(post.createdWhen, 'shortDate')} by">
                        {post.author.handle}
                    </AuthorTag>
                {/if}
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
	.post {
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