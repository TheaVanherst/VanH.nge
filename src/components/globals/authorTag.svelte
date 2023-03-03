<script>
    export let content =    null;   // published / edited when
    export let preview =    false;  // render type
    export let social =     undefined;   // first of social media
</script>

<div class="handle">
    <span>
        {content}
    </span>
    {#if social}
        <a href="{social.url}" target="_blank">
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
        width:          min-content;
        white-space:    nowrap;
        position:       relative;

	    span.wrapper {
		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

            text-decoration:    underline 1px;
		    transition:         color .2s ease-in-out, box-shadow .2s ease-in-out;

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
		    box-shadow:             inset 0 0 0 0 var(--darkAccent3);
        }
    }
</style>