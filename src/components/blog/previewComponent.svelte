<script>
    import HeaderModule from "./previewHeader.svelte"
    import TitleModule from "./postHeader.svelte"
    import PostModule from "../serializer/portableText.svelte"
    import TagModule from "../tagModule.svelte"

    import Container from "$components/generic/container.svelte";

    import { urlChanger } from '$stores/directoryController.js';

    export let post = null;
</script>

<Container hoverBool="{true}">
    <div class="post" id="post-{post.slug}" on:click={urlChanger("/blog/" + post.slug)}>
        <div class="readMore">
            <img src="/icons/downArrowPreview.webp">
        </div>
        <TitleModule
                titleHeader="{post.headerImage}"	title="{post.title}"/>
        <HeaderModule
                createdOn={post._createdAt} 		updatedOn={post._updatedAt}
                authorhandle={post.author_handle}   authoruser={post.author_fullName}
                editorhandle={post.editor_handle}   editoruser={post.editor_fullName}/>
        <TagModule
                time="{post._createdAt}"
                tags={post.catagory_tags}   tagsIds={post.catagory_id} />
        <p class="description">
            {post?.description}
        </p>
        <PostModule
                postData="{post?.body}"/>
    </div>
</Container>

<style lang="scss">
	* {
		text-decoration: none!important;
	}

	.post {
		height:     300px;
		overflow: hidden;
		position: relative;

		.description {
			padding-bottom: 10px;
			border-bottom: 1px solid var(--backgroundAccent1);
			margin-bottom: 15px;
		}

        &:hover {
            border-color: var(--accent3);
        }

		&:before {
			width:      100%;
			height:     100px;
			margin-top: 200px;
			left:       0;
			z-index:    1;

			content:    "";
			position: absolute;
			display: block;

			pointer-events:     none;
			background-image:   linear-gradient(to bottom,
					rgba(0,0,0, 0),
					rgba(0,0,0, 1) 100%);
		}

		.readMore {
			position:   absolute;
			display:    block;
			color:      white;

			margin:     277px 0 0 0;
			z-index:    20;
			width:      100%;

			img {
                display:    block;
				text-wrap: none;

				padding:    3px;
				width:      16px;
				height:     16px;
				margin:     0 auto;

				border-radius:      50%;
				background-color:   var(--accent1);
				color:              black;
				transition: background-color 0.2s ease-in-out;
			}
		}

        &:hover {
            img {
                background-color:   var(--accent3);
            }
        }
	}
</style>