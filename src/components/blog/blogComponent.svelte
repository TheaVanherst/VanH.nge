<script>
    import SanityImage  from '$lib/serializer/imageBuilder.svelte'

    import PostHeader   from "$components/generic/postTitleCard.svelte";
    import AuthorTag    from "$components/generic/authorTag.svelte";

    import { createdPush, updatedPush } from "$lib/builders/dateBuilder.js"

    import TagModule    from "$components/generic/tagModule.svelte"
    import PostModule   from "$lib/serializer/genericSerializer.svelte"
    import Container    from "$components/globals/containers/container.svelte";

    export let post = null;
</script>

<Container
        overflowBool="{false}"
        id="post-{post.slug}"
        colour="orange">
    <PostHeader
            titleHeader="{post.headerImage}"
            title="{post.title}"/>

    <div class="profile">
        <div class="author">
            <SanityImage image={post.author.userPortrait}/>
        </div>
        {#if post.editor && post.author._id !== post.editor._id}
            <div class="editor">
                <SanityImage image={post.editor.userPortrait}/>
            </div>
        {/if}
    </div>

    <div class="date">
        <p class="createdOn">
            {createdPush(post.publishedAt)}
        </p>
        {#if post._updatedAt}
            <p class="updatedOn">
                {updatedPush(post._updatedAt)}
            </p>
        {/if}
    </div>

    <div class="userData">
        <AuthorTag
            authors={[post.author]} editors={[post.editor]}/>
    </div>

    <TagModule
            time="{post.publishedAt}"
            tags={post.categories}/>

    <p class="description">
        <PostModule postData="{post.desc}"/>
    </p>
    <PostModule postData="{post.body}"/>
</Container>

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
                margin-left:    25px;
                font-size:      70%;}
        }
    }

    .userData {
        display: flex;
        padding: 8px 0 4px calc(var(--contentPaddingY) + 40px);

        width:      auto;
        font-size:  0;

        > *:last-child:not(:first-child) {
            border-left:   1px solid var(--fadedColourAcc);
        }
    }

    .profile {
        position:   relative;

        > div {
            left:          -25px;
            max-width:      60px;
            max-height:     60px;

            overflow:       hidden;
            position:       absolute;

            &.author {
                margin-top: var(--contentPaddingY);
            }

            &.editor {
                margin-left:    -30px;
                margin-top:     36px;
                transform:      scale(50%);
            }
        }
    }

    .description {
        padding-bottom: var(--containerPadding);
        border-bottom:  1px solid var(--backgroundAccent1);
        margin-bottom:  var(--containerPadding);
    }
</style>