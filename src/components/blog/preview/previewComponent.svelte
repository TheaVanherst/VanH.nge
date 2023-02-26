<script>
    import HeaderModule from "./previewHeader.svelte"
    import PostModule from "../../serializer/portableText.svelte"

    import TagModule from "$components/generic/components/tagModule.svelte";
    import PreviewContainer from "$components/generic/containers/prevContainer.svelte";

    export let post = null;
</script>

<PreviewContainer hoverBool="{true}" urlDirect={'/blog/' + post.slug}>
    <div class="post" id="post-{post.slug}">
        <HeaderModule
                titleHeader="{post.headerImage}"	title="{post.title}"
                createdOn={post._createdAt} 		updatedOn={post._updatedAt}         publishedOn={post.publishedAt}
                authorhandle={post.author_handle}   authoruser={post.author_fullName}   authorTwitter={post.author_twitter}
                editorhandle={post.editor_handle}   editoruser={post.editor_fullName}   editorTwitter={post.editor_twitter}/>
        <TagModule
                time="{post._createdAt}"    tags={post.catagory_tags}/>
        <div class="nonClickable">
            <p class="description">
                {post?.description}
            </p>
            <PostModule postData="{post?.body}"/>
        </div>
    </div>
</PreviewContainer>

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

		.description {
			padding-bottom: 10px;
			border-bottom:  1px solid var(--backgroundAccent1);
			margin-bottom:  15px;
		}

        .nonClickable {
	        pointer-events: none;
	        max-height:     200px;
        }
	}
</style>