<script>
    export let content = null;
    export let linkUrl = null;
    export let preview = false;
</script>

<div class="handle">
    <span>
        {content}
    </span>
    {#if linkUrl}
        <a href="https://twitter.com/{linkUrl}" target="_blank">
            <span class="wrapper link {preview ? 'preview' : 'post'}">
                <slot/>
            </span>
        </a>
    {:else}
        <span class="wrapper nonLink {preview ? 'preview' : 'post'}">
            <slot/>
        </span>
    {/if}
</div>

<style lang="scss">
    .handle {
        width: min-content;
        white-space: nowrap;
        position: relative;

	    span.wrapper {
		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

		    transition:     color .2s ease-in-out, box-shadow .2s ease-in-out;

		    &.nonLink {
			    &.post {    color: var(--accent2);}
			    &.preview { color: var(--textColourInvert);}

			    &:hover {
				    color:          var(--accent2);
				    box-shadow:     inset 0 0 0 1px var(--accent2);}
			    &::selection {
				    background:     var(--accent2);}}
		    &.link {
			    &.post {    color:  var(--accent3);}
			    &.preview { color:  var(--textColourInvert);}

			    &:hover {
				    color:          var(--textColourInvert);
				    box-shadow:     inset 0 0 100px 0 var(--accent3);}
			    &::selection {
				    background:     var(--accent3);
                }
            }
        }

	    .link {
		    text-decoration:        underline 1px;
		    box-shadow:             inset 0 0 0 0 var(--darkAccent3);

		    &:hover {
			    text-decoration: none;}
        }
    }
</style>