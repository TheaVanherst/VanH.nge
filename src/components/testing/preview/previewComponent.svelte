<script>
    import PostModule from "$lib/serializer/portableText.svelte"

    import TagModule from "$components/generic/components/tagModule.svelte";
    import PreviewContainer from "$components/generic/containers/prevContainer.svelte";
    import InvContainer from "$components/generic/containers/invContainer.svelte";

    import {createdPush, updatedPush} from "$lib/dateBuilder.js"
    import AuthorTag from "$components/generic/components/authorTag.svelte";
    import PostHeader from "$components/blog/postHeader.svelte"

    export let post = null;

    let publishDate = post.publishedAt ? post.publishedAt : post._createdAt;
</script>

<PreviewContainer hoverBool="{true}" urlDirect={'/test/' + post.slug}>
    <div class="test" id="test-{post.slug}">
        <PostHeader titleHeader={post.headerImage}	title={post.title}/>

        <InvContainer overflowBool={false} colour="green">
            {#if post.editor}
                <AuthorTag
                        preview={true} social={post.editor.socialMedia}
                        content="{updatedPush(post._updatedAt, publishDate)} by">
                    {post.editor.handle}
                </AuthorTag>
            {:else}
                {#if post.author === post.editor}
                    <AuthorTag
                            preview={true} social={post.author.socialMedia}
                            content="{updatedPush(post._updatedAt, publishDate)} by">
                        {post.author.handle}
                    </AuthorTag>
                {:else}
                    <AuthorTag
                            preview={true} social={post.author.socialMedia}
                            content="{createdPush(publishDate, 'shortDate')} by">
                        {post.author.handle}
                    </AuthorTag>
                {/if}
            {/if}
        </InvContainer>

<!--        <TagModule time="{post._createdAt}"    tags={post.catagory_tags}/>-->

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