<script>
    import {createdPush, updatedPush} from "../../dateBuilder.js"

    import AuthorTag from "$components/generic/authorTag.svelte";

    export let createdOn = null, publishedOn = null;
    export let authoruser = null, authorTwitter = null;

    export let title = null;

    let publishDate = publishedOn ? publishedOn : createdOn;
</script>

<header>
    <div class="userData">
        <AuthorTag preview={true} linkUrl={authorTwitter} content="{createdPush(publishDate, 'shortDate')} by">{authoruser}</AuthorTag>
    </div>
</header>

<style lang="scss">
	header {
		border-radius:  var(--innerRaidus);
		overflow:       hidden;

		margin:         0 0 var(--contentPaddingY) 0;

		.userData {
			white-space:    nowrap;
			overflow:       hidden;

			background-color:   var(--accent1);
			color:              var(--background);

			padding:    5px 10px;
			width:      auto;
			font-size:  13px;
		}
	}
</style>