<script>
    export let
        time = null;

    export let
        tags = null,
        tagsIds = "";
    let tagHighlight = "505b9480-cf02-42f3-902c-0a9c10c2801b";

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}
</script>

<tags>
    {#if relativeTime(new Date(time))}
        <div class="new">
            <tag>NEW</tag>
        </div>
    {/if}
    {#each tags as tag, i}
        <tag class:highlight={tagsIds[i] === tagHighlight}>{tag}</tag>
    {/each}
</tags>

<style lang="scss">
    tags {
        width: calc(100% + var(--containerPadding));
	    display:    inline-flex;
	    font-size: 0;

        > * {
	        margin:     0 var(--contentPaddingX) var(--contentPaddingY) 0;
        }

        tag {
		    font-family: 	'Lucida Console', sans-serif;
		    font-size:      12px;
		    line-height:    12px; /* required because emoji handling lol */

		    border-radius:  var(--innerRaidus);
		    background:     var(--background);
		    transition:     background 0.5s;

		    display:    inline-flex;
		    padding:    7px var(--containerPadding) 4px var(--containerPadding);
		    border:     1px solid var(--accent1);

		    &:hover {
			    cursor:         pointer;}
		    &:hover::selection {
			    color: 		var(--accent1);
			    background: var(--background);
            }
        }

        > tag {
	        &:hover {
		        color:      var(--textColourInvert);
		        background: var(--accent1);}
        }
    }

    .new {
        background: linear-gradient(-45deg, var(--accent2), var(--accent3), var(--accent4));
        background-size:     800% 800%;
	    animation:  gradient 15s ease infinite;

        width: min-content;
        border-radius: calc(var(--innerRaidus) + 1px);

	    border:     none;
	    padding:    1px;

        color:      white;
        font-weight: 800;

        > tag {
            border: none;
        }

        &:hover {
            border-color: var(--accent1)!important;
	        animation:  wiggle 0.5s ease infinite;
        }
    }


    .highlight {
	    border:     1px solid var(--accent3);

        &:hover {
	         background-color: var(--accent3);
        }
	    &:hover::selection {
		    color: 				var(--accent3);
	    }
    }
</style>