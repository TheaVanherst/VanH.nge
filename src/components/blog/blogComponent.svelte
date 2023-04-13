<script>
    import SanityImage  from '$lib/serializer/imageBuilder.svelte'

    import PostHeader   from "$components/blog/postTitleCard.svelte";
    import AuthorToolTip from "$components/generic/authorToolTip.svelte";

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
        {#if post.author}
            <AuthorToolTip author={post.author} tag={false}>
                <div class="wrap author">
                    <div class="picture">
                        <SanityImage image={post.author.userPortrait}/>
                    </div>
                    <div class="authorTag">
                        <p class="handle">{post.author.fullName}</p>
                        <p>Author</p>
                    </div>
                </div>
            </AuthorToolTip>
        {/if}
        {#if post.editor}
            <AuthorToolTip author={post.author} tag={false}>
                <div class="wrap editor">
                    <div class="picture">
                        <SanityImage image={post.editor.userPortrait}/>
                    </div>
                    <div class="authorTag">
                        <p class="handle">{post.editor.fullName}</p>
                        <p>Editor</p>
                    </div>
                </div>
            </AuthorToolTip>
        {/if}
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

        padding:    10px 15px;
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
        padding: 15px 0 10px;

        width:      auto;
        font-size:  12px;

        column-count:   2;
        gap:            15px;

        @mixin cgm($colour){
            border:     1px solid $colour;
            border-top: 3px solid $colour;
            .handle {
                color: $colour;}}

        .wrap {
            background-color:   var(--backgroundTrans);
            backdrop-filter:    blur(2px);

            padding:        10px;
            white-space:    nowrap;
            display:        flex;

            &.author {
                @include cgm(var(--accent1));}
            &.editor {
                @include cgm(var(--darkAccent3));}
            &:hover {
                @include cgm(var(--accent3));}

            > .picture {
                width:      36px;
                height:     36px;

                border-radius:  50%;
                overflow:       hidden;}

            > .authorTag {
                margin: auto 10px;

                > *:not(:last-child) {
                    padding-bottom: 2px;}}}
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