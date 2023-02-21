<script>
    export let time = null;
    export let inline = false;

    export let tags = [];
    export let tagsIds = [];

    let tagHighlight = "505b9480-cf02-42f3-902c-0a9c10c2801b";

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}

    console.log(tags)
</script>

{#if tags.length !== 0}
    <div class="tags {inline ? 'inline' : 'notInline'}">

        {#if relativeTime(new Date(time))}
            <div class="tag new">
                <span class="hov inv">
                    NEW
                </span>
            </div>
        {/if}

        {#if tags.length > 1}
            {#each tags as tag, i}
                <div class="tag category {tagsIds[i] === tagHighlight ? 'highlight' : ''}">
                    <span class="hov">
                        {tag}
                    </span>
                </div>
            {/each}
        {:else}
            <div class="tag category {tagsIds[0] === tagHighlight ? 'highlight' : ''}">
                    <span class="hov">
                        {tags[0]}
                    </span>
            </div>
        {/if}

    </div>
{/if}

<style lang="scss">
    .tags {
	    white-space: normal;
	    font-size: 0;

	    &.notInline {
		    width:     calc(100% + var(--containerPadding));
            .tag {
	            margin:         0 var(--contentPaddingX) var(--contentPaddingX) 0;}
        }

        &.inline {
	        width:          calc(100%);
            overflow-x:     hidden;

            &:not(:last-child) {
	            margin-bottom:  var(--contentPaddingY);
            }

            > *:not(:last-of-type) {
	            margin-right: var(--contentPaddingY);
            }
        }

        .tag {
	        padding:        5px var(--containerPadding);
	        border-radius:  var(--innerRaidus);

	        display:        inline-flex;
	        transition:     background 0.3s;

	        font-family:    monospace;
	        font-size:      12px;
	        line-height:    12px;
        }

        .category {
	        background:     var(--background);
	        cursor:         pointer;

            &.tag {
	            border:     1px solid var(--accent1);

	            &:hover {
		            background: var(--accent1);
		            span {
			            color:  var(--textColourInvert);
			            &::selection {
				            color: 		var(--accent1);
				            background: var(--background);}}}

	            span {
		            color: var(--textColour);
		            &::selection {
			            color: 		var(--background);
			            background: var(--accent1);}}
            }
        }
    }

    .new {
	    border-radius:      var(--innerRaidus);

        background:         linear-gradient(-45deg, var(--accent1), var(--accent3), var(--accent4));
        background-size:    800% 800%;
	    animation:          gradient 15s ease infinite;

        span {
            color:  var(--textColourInvert);

	        &::selection {
		        color: 		var(--accent3);
		        background: var(--background);
	        }
        }

        &:hover {
	        animation:      wiggle 0.5s ease infinite, gradient 15s ease infinite;
        }
    }


    .highlight {
	    border: 1px solid var(--accent3)!important;

        &:hover {
	         background-color:  var(--accent3)!important;}
	    &:hover::selection {
		    color: 				var(--accent3)!important;}
    }
</style>