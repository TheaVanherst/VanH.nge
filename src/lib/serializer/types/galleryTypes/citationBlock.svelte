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
                                Via;
                                <LinkAppend portableText={comment[3]}>
                                    {comment[2]}
                                </LinkAppend>
                            </span>
                        {:else if comment[3]}
                            <span>
                                <LinkAppend portableText={comment[3]}>
                                    <sup>
                                        [ref]
                                    </sup>
                                </LinkAppend>
                            </span>
                        {/if}
                    </div>
                {/if}
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">

    * {
        font-size:      12px;
        ::selection {
            background-color: 	var(--darkAccent1)!important;}
    }

    .parentCite {
        margin-bottom: var(--containerPadding);

        .GalleryCite {
            margin: 5px 0 5px 5px;

            .citation {
                .position {
                    color: var(--darkAccent1);}
                .comment {
                    color: var(--backgroundAccent1);}
                .cite {
                    color: var(--backgroundAccent1);}

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