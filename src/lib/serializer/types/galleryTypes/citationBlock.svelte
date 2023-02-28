<script>
    import LinkAppend from "$lib/serializer/types/linkAppend.svelte";
    export let push = undefined, titles = undefined;
</script>

{#if push}
    {#each push as row, i}
        {#if titles[i] !== undefined}
                <span>
                    {titles[i]}
                </span>
        {/if}
        <div class="GalleryCite">
            {#each row as comment, e}
                {#if comment && comment[1]}
                    <p>
                        {#if comment[0]}
                            <span class="position">
                                {comment[0]}
                            </span>
                        {/if}

                        <span class="comment">
                            {comment[1]}
                        </span>

                        {#if comment[2] && comment[3]}
                            <span>
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
                    </p>
                {/if}
            {/each}
        </div>
    {/each}
{/if}

<style lang="scss">

    * {
        font-size:      12px;

        ::selection {
            background-color: 	var(--darkAccent1)!important;}
    }

    .GalleryCite {
        margin: 0 var(--contentPaddingX) var(--contentPaddingY) var(--contentPaddingX);


        span {
            color: var(--fadedColour);

            &.position {
                color: var(--darkAccent1);}
        }
    }
</style>