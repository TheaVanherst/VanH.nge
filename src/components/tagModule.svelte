<script>
    export let
        time = null;

    export let
        tags = null,
        tagsIds = "";
    let tagHighlight = "505b9480-cf02-42f3-902c-0a9c10c2801b";

    export let
        inline = false;

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}
</script>

<div class="tags {inline ? 'inline' : ''}">
    {#if relativeTime(new Date(time))}
        <div class="tag new">
            <div class="category">
                <span>
                    NEW
                </span>
            </div>
        </div>
    {/if}
    {#each tags as tag, i}
        <div class="tag category {tagsIds[i] === tagHighlight ? 'highlight' : ''}">
            <span>
                {tag}
            </span>
        </div>
    {/each}
</div>

<style lang="scss">
    span {
	    white-space: nowrap;
    }

    .inline {
	    white-space: nowrap!important;
    }

    .tags {
        width:     calc(100% + var(--containerPadding));
	    white-space: normal;
	    font-size: 0;

        .tag {
	        margin:         0 var(--contentPaddingX) var(--contentPaddingY) 0;
	        display:        inline-flex;
	        transition:     background 0.5s;

	        font-family:    monospace;
	        font-size:      12px;
	        line-height:    12px;
        }

        .category {
	        padding:        5px var(--containerPadding);
	        background:     var(--background);
	        border-radius:  calc(var(--innerRaidus) - 1px);

            &.tag {
	            border: 1px solid var(--accent1);

	            &:hover {
		            color:      var(--textColourInvert);
		            background: var(--accent1);
	            }
            }

		    &:hover {
			    cursor:         pointer;}
		    &:hover::selection {
			    color: 		var(--accent1);
			    background: var(--background);
            }
        }
    }

    .new {
        background: linear-gradient(-45deg, var(--accent2), var(--accent3), var(--accent4));
        background-size:     800% 800%;
	    animation:  gradient 15s ease infinite;

	    border-radius:  var(--innerRaidus);
	    border:         none;
	    padding:        1px;

        > .category {
            border: none;
        }

        &:hover {
            border-color: var(--accent1)!important;
	        animation:  wiggle 0.5s ease infinite;
        }
    }


    .highlight {
	    border:     1px solid var(--accent3)!important;

        &:hover {
	         background-color: var(--accent3)!important;
        }
	    &:hover::selection {
		    color: 				var(--accent3)!important;
	    }
    }
</style>