<script>
    export let portableText = "";

    let quote = portableText.value.quote;
    let author = portableText.value.author;
    let cite = portableText.value.cite;
</script>

<div class="blockquote">
    <div class="line"></div>
    <div class="quote">
        <label>
            {quote}
        </label>
    </div>
    <div class="author">
        <cite>{author}</cite>
        {#if cite}
            <a href={cite} target="_blank"><sup>[]</sup></a>
        {/if}
    </div>
    <div class="line"></div>
</div>

<style lang="scss">
	.blockquote {
        display:    block;
        position:   relative;
		text-align: center;

		margin: 	5px 5px 15px 5px;

        .quote {
	        background-image:   linear-gradient(45deg, var(--accent2), var(--accent4));
	        background-size:    100%;

	        font-family:    Georgia, sans-serif!important;
	        font-size:      24px!important;
	        font-weight:    bolder;

	        -webkit-background-clip:    text;
	        -webkit-text-fill-color:    transparent;
	        -moz-background-clip:       text;
	        -moz-text-fill-color:       transparent;

	        &:before {
		        color: 		var(--textColour);
		        content: 	open-quote;}
	        &:after {
		        color: 		var(--textColour);
		        content: 	close-quote;}

        }

		.author {
			margin-top: 7px;
        }

        .line {
	        width:      100px;
	        height:     1px;
	        background: #fff;
	        margin:     0 auto;

            &:first-of-type {
                margin-bottom:  10px;}
            &:last-of-type {
	            margin-top:     13px;}
        }
	}
</style>