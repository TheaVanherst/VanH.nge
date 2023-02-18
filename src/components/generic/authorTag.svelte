<script>
    export let handle = null, linkUrl = null;
    export let content = null;

    //TODO: this needs merging into the link serialiser.
</script>

<div class="handle">
    {content}
    {#if linkUrl}
        <a href="https://twitter.com/{linkUrl}">
            {handle}
        </a>
    {:else}
        <b>
            {handle}
        </b>
    {/if}
</div>

<style lang="scss">
    .handle {
        font-size:      13px;
        line-height:    100%;

        display:    inline-block;
        width:      min-content;
        padding:    0 var(--contentPaddingX);
        margin:     var(--contentPaddingY) 0;

	    &:not(:first-child){
		    border-left:    1px solid var(--textColour);
        }

	    b {
		    line-height: 100%;
		    color:          var(--accent2);
		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

		    transition:     box-shadow .2s ease-in;
		    border-radius:  var(--innerRaidus);
		    box-shadow:     inset 0 0 0 0 var(--darkAccent2);

		    &:hover {
			    box-shadow:     inset 0 0 0 1px var(--accent2);
            }
		    &::selection {
			    color: 				var(--background);
			    background-color: 	var(--accent2);
            }
        }

	    a {
		    text-decoration: underline 1px;
		    font-weight:    600;
		    color:          var(--accent3);

		    margin:     0 -.25rem;
		    padding:    .125rem  .25rem;

		    border-radius:  var(--innerRaidus);
		    box-shadow:     inset 0 0 0 0 var(--darkAccent3);
		    transition:     color .2s ease-in-out, box-shadow .2s ease-in-out;

		    &:hover {
			    text-decoration:    none;
			    box-shadow:         inset 0 0 100px 0 var(--accent3);
			    color:              var(--textColourInvert);
            }
		    &::selection {
			    color: 				var(--background);
			    background-color: 	var(--accent3);
            }
        }
    }
</style>