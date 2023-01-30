<script>
    import HeaderModule from "./postHeader.svelte"
    import TitleModule from "../titleModule.svelte"
    import PostModule from "../../../../components/portableText.svelte"
    import TagModule from "../../../../components/tagModule.svelte"

    export let post
</script>

<a href="/blog/{post.slug.current}">
    <div class="post" id="{post._id}">
        <div class="readMore">
            <p>▼</p>
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

		color: 			var(--textColour);

		.padding {
			padding: 	var(--containerPadding);

			.description {
				padding-bottom: 10px;
				border-bottom: 1px solid var(--backgroundAccent1);
				margin-bottom: 15px;
			}
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

			p {
				margin: 0 auto;

				padding: 5px;
				width: 10px;
				height: 10px;

				border-radius: 50%;
				background-color: var(--accent1);

				text-wrap: none;
			}
		}
	}
</style>