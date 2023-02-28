<script>
    export let time = null;
    export let tags = [];

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}

    tags.sort((a, b) => a.localeCompare(b)); //this prioritizes unicode.

    function isDoubleByte(str) {
        for (var i = 0, n = str.length; i < n; i++) {
            if (str.charCodeAt( i ) > 255) { return true; }
        }
        return false;
    }
</script>

<div class="tags">
    <div class="lineDiv orange"></div>
    <div class="lineScale">
        <div class="small"></div>
        <div class="medium"></div>
        <div class="large"></div>
        <div class="xLarge"></div>
    </div>

    <div class="tagWrapper">
        <div class="tagSleeve">
            {#if relativeTime(new Date(time))}
                <div class="tag new">
                        <span class="hov inv">
                            🌈 NEW
                        </span>
                </div>
            {/if}

            {#if tags.length !== 0}
                {#if tags.length > 1}
                    {#each tags as tag, i}
                        <div class:highlight={isDoubleByte(tags[i])}
                             class="tag category">
                                <span class="hov">
                                    {tag}
                                </span>
                        </div>
                    {/each}
                {:else}
                    <div class:highlight={isDoubleByte(tags[0])}
                         class="tag category">
                            <span class="hov">
                                {tags[0]}
                            </span>
                    </div>
                {/if}
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
        }
    }

    .tags {
        margin:         5px 0 10px 0;

        .tag {
            counter-increment: section;
            display:        inline-grid;
            position:       relative;

            padding:        5px var(--containerPadding);
            margin:         16px var(--contentPaddingY) 5px 0;

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
                    color:  var(--accent3);}
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