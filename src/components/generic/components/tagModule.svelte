<script>
    export let time = null;
    export let tags = [];

    let tagHighlight = "📌 Pinned";

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}

    tags.sort((a, b) => a.localeCompare(b));
</script>

{#if tags.length !== 0}
    <div class="tags">

        <div class="lineDiv orange"></div>
        <div class="lineScale">
            <div class="small"></div>
            <div class="medium"></div>
            <div class="large"></div>
            <div class="xLarge"></div>
        </div>

        {#if relativeTime(new Date(time))}
            <div class="tag new">
                <span class="hov inv">
                    🌈 NEW
                </span>
            </div>
        {/if}

        {#if tags.length > 1}
            {#each tags as tag, i}
                <div class="tag category {tags[i] === tagHighlight ? 'highlight' : ''}">
                    <span class="hov">
                        {tag}
                    </span>
                </div>
            {/each}
        {:else}
            <div class="tag category {tags[0] === tagHighlight ? 'highlight' : ''}">
                <span class="hov">
                    {tags[0]}
                </span>
            </div>
        {/if}
    </div>
{/if}

<style lang="scss">
    .tags {
        color:          var(--textColourInvert);
	    white-space:    normal;
	    font-size:      0;

        width:          100%;

        overflow-x:     hidden;
        margin:         5px 0 var(--containerPadding) 0;

        .tag {
            counter-increment: section; /* Increment the value of section counter by 1 */

            padding:        5px var(--containerPadding);
            margin:         15px var(--contentPaddingY) 0 0;

            display:        inline-flex;
            transition:     background 0.3s;

            font-weight:    800;
            font-family:    'Arimo', sans-serif;
            font-size:      12px;
            line-height:    12px;

            border-radius:  5px;

            &:before {
                position:       absolute;
                margin:         -20px 0 0 -21px;
                padding:        0 0 5px 5px;

                border-left:    1px solid var(--darkAccent3);
                color:          var(--darkAccent3);

                content: "+" counter(section);
            }

            &:after {
                position:       absolute;
                margin:         15px 0 0 -21px;
                padding-left:   5px;

                content:        " ";
                height:         3px;
                border-left:    1px solid var(--darkAccent3);
                color:          var(--darkAccent3);
            }
        }

        .category {
	        background:     var(--background);
	        cursor:         pointer;

            &.tag {
                border: 1px solid var(--darkAccent3);
                color:  var(--darkAccent3);

                ::selection {
                    background: var(--darkAccent3)!important;}

                &.highlight {
                    border: 1px solid var(--accent1);
                    color:  var(--accent1);

                    ::selection {
                        background: var(--accent1)!important;}}

                &:hover {
                    border: 1px solid var(--accent3);
                    color:  var(--accent3);}
            }
        }
    }

    .new {
        border: 1px solid var(--accent1);
        color:  var(--accent1);
        ::selection {
            color: 		var(--accent1)!important;
            background: var(--background)!important;}
    }
</style>