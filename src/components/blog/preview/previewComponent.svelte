<script>
    import HeaderModule from "./previewHeader.svelte"
    import TitleModule from "../postHeader.svelte"
    import PostModule from "../../serializer/portableText.svelte"
    import TagModule from "../../generic/tagModule.svelte"

    import Container from "$components/generic/container.svelte";

    import { urlChanger } from '$stores/directoryController.js';

    export let post = null;
</script>
<a href={'/blog/' + post.slug} on:click={urlChanger("/blog/" + post.slug)}>
    <Container hoverBool="{true}">
        <div class="post" id="post-{post.slug}">
            <div class="readMore">
                <img src="/icons/downArrowPreview.webp">
            </div>
            <TitleModule
                    titleHeader="{post.headerImage}"	title="{post.title}"/>
            <HeaderModule
                    createdOn={post._createdAt} 		updatedOn={post._updatedAt}         publishedOn={post.publishedAt}
                    authorhandle={post.author_handle}   authoruser={post.author_fullName}   authorTwitter={post.author_twitter}
                    editorhandle={post.editor_handle}   editoruser={post.editor_fullName}   editorTwitter={post.editor_twitter}/>
            <TagModule
                    time="{post._createdAt}"    inline={true}
                    tags={post.catagory_tags}   tagsIds={post.catagory_id} />
            <div class="nonClickable">
                <p class="description">
                    {post?.description}
                </p>
                <PostModule
                        postData="{post?.body}"/>
            </div>
        </div>
    </Container>
</a>

<style lang="scss">
	a:hover {
        .readMore {
	        img {
		        background-color:   var(--accent3);
	        }
        }
	}

	.post {
		position: relative;
        min-height: 250px;
        max-height: 350px;
		top:        0px;

		.description {
			padding-bottom: 10px;
			border-bottom:  1px solid var(--backgroundAccent1);
			margin-bottom:  15px;
		}

        .nonClickable {
	        pointer-events: none;
        }

        &:hover {
            border-color: var(--accent3);
        }

		&:before {
			width:      calc(100% + (var(--containerPadding) * 2));
			height:     150px;
			z-index:    1;

			bottom:     0;
			left:       0;
            margin:     0 calc(var(--containerPadding) * -1)
                        calc(var(--containerPadding) * -2) calc(var(--containerPadding) * -1);

			content:    "";
			position:   absolute;
			display:    block;

			pointer-events:     none;
			background-image:   linear-gradient(to bottom,
					rgba(0,0,0, 0),
					rgba(0,0,0, 1) 90%);
		}

		.readMore {
			position:   absolute;
			display:    block;
			color:      white;

			margin:     0;
            bottom:     0;
			z-index:    20;
			width:      100%;

			img {
                display:    block;
				text-wrap: none;

				padding:    4px;
				width:      16px;
				height:     16px;
				margin:     0 auto;

				border-radius:      var(--innerRaidus);
				background-color:   var(--accent1);
				color:              black;
				transition: background-color 0.2s ease-in-out;
			}
		}
	}
</style>