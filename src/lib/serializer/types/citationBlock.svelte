<script>
    import LinkAppend from "$lib/serializer/types/linkAppend.svelte";
    export let push = undefined, titles = undefined;
</script>

<div class="parentCite">
    {#each push as row, i}
        {#if titles[i] !== undefined}
            <span>
                {titles[i]}
            </span>
        {/if}
        <div class="GalleryCite">
            {#each row as comment, e}
                {#if comment && comment[1]}
                    <div class="citation">
                        {#if comment[0]}
                            <span class="position">
                                {comment[0]}
                            </span>
                        {/if}

                        <span class="comment">
                            {comment[1]}
                        </span>

                        {#if comment[2] && comment[3]}
                            <span class="cite">
                                , Via;
                            </span>
                            <sup class="referral">
                                <LinkAppend portableText={comment[3]}>
                                    {comment[2]}
                                </LinkAppend>
                            </sup>
                        {:else if comment[3]}
                            <span class="cite">
                                <sup class="referral">
                                    <LinkAppend portableText={[comment[3], comment[4]]}>
                                        [via]
                                    </LinkAppend>
                                </sup>
                            </span>
                        {/if}
                    </div>
                {/if}
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">

    span {
        font-size:      12px;}
    sup {
        padding-left: 3px;
        display: inherit;}

    * {
        ::selection {
            background-color: 	var(--darkAccent1)!important;}
    }

    .parentCite {
        margin-bottom: 10px;

        .GalleryCite {
            margin: 5px 0 5px 5px;
            display: table;

            .citation {
                display: flex;
                > * {
                    vertical-align: top;
                }

                .position {
                    white-space: nowrap;
                    padding-right: 3px;
                    color: var(--darkAccent1);}
                .comment {
                    color: var(--backgroundAccent1);}
                .cite {
                    color: var(--backgroundAccent1);}
                .referral {
                    white-space: nowrap;
                    padding-left: 5px;}

                &:hover {
                    .position {
                        color: var(--accent1);}
                    .comment {
                        color: var(--textColour);}
                    .cite {
                        color: var(--accent1);}
                }
            }
        }
    }
</style>