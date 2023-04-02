<script>
    import PostModule       from "$lib/serializer/genericSerializer.svelte"

    import TagModule        from "$components/generic/tagModule.svelte";
    import PreviewContainer from "$components/globals/containers/readMoreContainer.svelte";
    import InvContainer     from "$components/globals/todo/invContainer.svelte";

    import AuthorTag        from "$components/generic/authorTag.svelte";
    import PostHeader       from "$components/blog/postTitleCard.svelte";

    export let post = null;
</script>

<PreviewContainer urlDirect={"/blog/" + post.slug} id="{post.slug}">
    <PostHeader titleHeader={post.headerImage}	title={post.title}/>

    <InvContainer colour="green">
        <AuthorTag preview={true}
            publicationDate={post.publishedAt} editDate={post._updatedAt}
            authors={[post.author]} editors={[post.editor]}/>
    </InvContainer>

    <TagModule time={post.publishedAt} tags={post.categories}/>

    <div class="nonClickable">
        <p class="description">
            <PostModule postData="{post.desc}"/>
        </p>
        <PostModule postData="{post.body}"/>
    </div>
</PreviewContainer>

<style lang="scss">
    .description {
        padding-bottom: var(--containerPadding);
        border-bottom:  1px solid var(--backgroundAccent1);
        margin-bottom:  var(--containerPadding);
    }

    .nonClickable {
        pointer-events: none;
        max-height:     200px;
    }
</style>