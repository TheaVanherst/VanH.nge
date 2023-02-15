<script>
    export let portableText = null;

    let quote = portableText.value.quote;
    let author = portableText.value.author;
    let cite = portableText.value.cite;
    console.log(portableText);
</script>

<div class="blockquote">
    <div class="line"></div>
    <div class="quote">
        <span>
            {quote}
        </span>
    </div>
    <div class="author">
        <span>{author}</span>
        {#if cite}
            <a href={cite} target="_blank"><sup>[]</sup></a>
        {/if}
    </div>
    <div class="line"></div>
</div>

<style lang="scss">
	.blockquote {
        display: block;
        position: relative;
		text-align: center;

		margin: 	5px 5px 15px 5px;

        .quote {
	        font: 24px Georgia;
            font-weight: bolder;

	        background-image:   linear-gradient(45deg, var(--accent2), var(--accent4));
	        background-size:    100%;

	        -webkit-background-clip:    text;
	        -webkit-text-fill-color:    transparent;
	        -moz-background-clip:       text;
	        -moz-text-fill-color:       transparent;

	        &:before {
		        color: 		var(--textColour)!important;
		        content: 	open-quote;}
	        &:after {
		        color: 		var(--textColour)!important;
		        content: 	close-quote;}

        }

		.author {
			font: 14px monospace;

			display:    block;
			position:   relative;
			margin-top: 7px;

			letter-spacing: 0.15em;
			text-transform: uppercase;
        }

        .line {
	        width: 100px;
	        height: 1px;
	        background: #fff;
	        margin: 0 auto;

            &:first-of-type {
                margin-bottom: 10px;
            }
            &:last-of-type {
	            margin-top: 13px;
            }
        }
	}
</style>