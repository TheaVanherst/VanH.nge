<script>
    import { relativeTime } from "$lib/dateBuilder.js";

    export let time = 0;    // so it doesn't cause errors with time relativity in the calc
    export let tags = [];   // forms array as a fallback to check the length of later

    const regex = /\p{Extended_Pictographic}/ug;
    if (tags > 0) { //causes errors on reload if you don't have this
        tags.sort(a => a.title.match(!regex)); //this prioritizes unicode [Emojis],
            // aka. puts them at the forefront of the array [unicode -> (everything else)]
    }

    let carousel;
    let x;
</script>

<div class="tags">
    <div class="lineDiv orange"></div>

    <div class="tagWrapper"
         bind:this={carousel}
         on:scroll={() => x=carousel.scrollLeft}>
        <div class="tagSleeve">
            <div class="lineScale green" style="--xPos:{x / 0.4 + 'px'}">
                <div class="small"></div>
                <div class="medium"></div>
                <div class="large"></div>
                <div class="xLarge"></div>
            </div>

            {#if relativeTime(new Date(time)) / 86400 < 14}
                <div class="tag new">
                        <span class="hov inv">
                            🌈 NEW
                        </span>
                </div>
            {/if}

            {#if tags.length > 1}
                {#each tags as tag, i}
                    <div class:highlight={tag._type === "category"}
                         class="tag category">
                                <span class="hov">
                                    {tag.title}
                                </span>
                    </div>
                {/each}
            {:else if tags.length === 1}
                <div class:highlight={tags[0]._type === "category"}
                    class="tag category">
                        <span class="hov">
                            {tags[0].title}
                        </span>
                </div>
            {/if}

        </div>
    </div>
</div>

<style lang="scss">
    .tagWrapper {
        display:    block;
        overflow:   scroll hidden;

        .tagSleeve {
            display:    block;
            width:      max-content;
            min-width:  calc(100% - 1px); // this causes scroll overflow,
                // and I don't have time to fix it.
        }
    }

    .tags {
        margin:         5px 0 10px 0;

        .tag {
            counter-increment: section;
            display:        inline-grid;
            position:       relative;

            padding:        5px var(--containerPadding);
            margin:         16px var(--contentPaddingY) 0 0;

            font-weight:    800;
            font-size:      12px;
            line-height:    12px;

            &:before {
                position:       absolute;
                margin:         -15px 0 0 -6px;
                padding:        0 0 5px 5px;

                border-left:    1px solid var(--darkAccent3);
                color:          var(--darkAccent3);

                content: "+" counter(section);
            }

            &:after {
                position:       absolute;
                margin:         20px 0 0 -6px;
                padding-left:   5px;

                content:        " ";
                height:         3px;
                border-left:    1px solid var(--darkAccent3);
                color:          var(--darkAccent3);
            }

            &:last-of-type {
                margin-right: 0;
            }
        }

        .category {
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
                    color:  var(--accent3);

                    ::selection {
                        background: var(--accent3)!important;}}
            }
        }

        &:last-child {
            margin-bottom: 0;
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