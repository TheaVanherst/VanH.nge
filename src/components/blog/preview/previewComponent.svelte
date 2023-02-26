<script>
    import PostModule from "../../serializer/portableText.svelte"

    import TagModule from "$components/generic/components/tagModule.svelte";
    import PreviewContainer from "$components/generic/containers/prevContainer.svelte";
    import InvContainer from "$components/generic/containers/invContainer.svelte";

    import {createdPush, updatedPush} from "../../dateBuilder.js"
    import AuthorTag from "$components/generic/components/authorTag.svelte";
    import PostHeader from "../postHeader.svelte"

    export let post = null;

    let publishDate = post.publishedAt ? post.publishedAt : post._createdAt;
</script>

<PreviewContainer hoverBool="{true}" urlDirect={'/blog/' + post.slug}>
    <div class="post" id="post-{post.slug}">
        <PostHeader titleHeader={post.headerImage}	title={post.title} subtitle="{post._id}"/>

        <InvContainer overflowBool={false} colour="orange">
            {#if post.editor_fullName}
                <AuthorTag preview={true} linkUrl={post.editor_twitter} content="{updatedPush(post._updatedAt, publishDate)} by">{post.editor_fullName}</AuthorTag>
            {:else}
                {#if post.author_fullName === post.editor_fullName}
                    <AuthorTag preview={true} linkUrl={post.author_twitter} content="{updatedPush(post._updatedAt, publishDate)} by">{post.author_fullName}</AuthorTag>
                {:else}
                    <AuthorTag preview={true} linkUrl={post.author_twitter} content="{createdPush(publishDate, 'shortDate')} by">{post.author_fullName}</AuthorTag>
                {/if}
            {/if}
        </InvContainer>

        <TagModule time="{post._createdAt}"    tags={post.catagory_tags}/>

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