<script>
    import LinkAppend from "$lib/serializer/types/linkAppend.svelte";
    export let push = undefined, titles = undefined;
</script>

{#if push}
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
    </div>
{/if}

<style lang="scss">

    * {
        font-size:      12px;
        ::selection {
            background-color: 	var(--darkAccent1)!important;}
    }

    .GalleryCite {
        margin: 5px 0 5px 5px;

        span {
            color: var(--fadedColour);

            &.position {
                color: var(--darkAccent1);} }

        p {
            margin-bottom: 1px;}

        &:last-of-type {
            margin-bottom: var(--containerPadding);}
    }
</style>