<script>
    import HeaderModule from "./previewHeader.svelte"
    import TitleModule from "./titleModule.svelte"
    import PostModule from "../../../components/portableText.svelte"
    import TagModule from "../../../components/tagModule.svelte"

    export let post
</script>

<a href="/blog/{post.slug.current}">
    <div class="post" id="{post._id}">
        <div class="readMore">
            <img src="/icons/downArrowPreview.webp">
        </div>
        <div class="padding">
            <TitleModule
                    titleHeader="{post.headerImage}"	title="{post.title}"/>
            <HeaderModule
                    createdOn="{post._createdAt}" 		updatedOn="{post._updatedAt}"
                    authorhandle="{post.author_handle}" authoruser="{post.author_fullName}"
                    editorhandle="{post.editor_handle}" editoruser="{post.editor_fullName}"/>
            <TagModule time="{post._createdAt}" tags="{post.catagory_tags}" />
            <p class="description">
                {post?.description}
            </p>
            <PostModule
                    postData="{post?.body}"/>
        </div>
    </div>
</a>

<style lang="scss">
	* {
		text-decoration: none!important;
	}

	.post {
		border-radius: 	var(--outerRadius);
		border: 	var(--border-thickness) solid var(--accent1);
		background:		var(--backgroundTrans);

		margin-bottom: 	15px;

		height: 		300px;
		overflow: hidden;
		position: relative;

		transition: border 0.2s ease-in-out;

		color: 			var(--textColour);

		.padding {
			padding: 	var(--containerPadding);

			.description {
				padding-bottom: 10px;
				border-bottom: 1px solid var(--backgroundAccent1);
				margin-bottom: 15px;
			}
		}

        &:hover {
            border-color: var(--accent3);
        }

		&:before {
			content  : "";
			width: 		100%;
			height   : 100px;
			position: absolute;
			display: block;

			z-index  : 1;
			margin-top: 200px;
			left     : 0;
			pointer-events   : none;
			background-image : linear-gradient(to bottom,
					rgba(0,0,0, 0),
					rgba(0,0,0, 1) 100%);
		}

		.readMore {
			margin: 260px 0 0 0;
			position: absolute;
			display: block;
			color: white;
			z-index  : 20;
			width: 100%;

			img {
                display: block;
				margin: 0 auto;
                color: black;

                transition: background-color 0.2s ease-in-out;

				padding: 3px;
				width: 16px;
				height: 16px;

				border-radius: 50%;
				background-color: var(--accent1);

				text-wrap: none;
			}
		}

        &:hover {
            img {
                background-color: var(--accent3);
            }
        }
	}
</style>