<script>
    import SanityImage  from '$lib/serializer/imageBuilder.svelte'

    import PostHeader   from "$components/generic/postTitleCard.svelte";
    import AuthorTag    from "$components/globals/authorTag.svelte";

    import { createdPush, updatedPush } from "$lib/builders/dateBuilder.js"

    import TagModule    from "$components/globals/tagModule.svelte"
    import PostModule   from "$lib/serializer/portableText.svelte"
    import Container    from "$components/globals/containers/container.svelte";

    export let post = null;
</script>

<Container overflowBool="{false}" id="post-{post.slug}" colour="orange">
    <PostHeader titleHeader="{post.headerImage}"	title="{post.title}"/>

    <div class="profile">
        {#if post.author && post.author.userPortrait}
            <div class="author">
                <SanityImage image={post.author.userPortrait}/>
            </div>
        {/if}
        {#if post.editor && post.author.handle !== post.editor.handle && post.author.userPortrait}
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
                {updatedPush(post._updatedAt, post.publishedAt)}
            </p>
        {/if}
    </div>

    <div class="userData">
        {#if post.editor}
            {#if post.author.fullName === post.editor.fullName}
                <AuthorTag
                        social={post.author?.socialMedia}
                        content="Edited & published by ">
                    {post.author?.handle}
                </AuthorTag>
            {:else}
                <AuthorTag
                        social={post.editor?.socialMedia}
                        content="Edited by ">
                    {post.editor?.handle}
                </AuthorTag>
                <AuthorTag social={post.author?.socialMedia}
                           content=", Published by ">
                    {post.author?.handle}
                </AuthorTag>
            {/if}
        {:else}
            <AuthorTag social={post.author?.socialMedia}
                       content="Published by ">
                {post.author?.handle}
            </AuthorTag>
        {/if}
    </div>

    <TagModule time="{post.publishedAt}"    tags={post.categories}/>
    <PostModule
            postData="{post.body}"/>
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
            max-width:      60px;

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
</style>