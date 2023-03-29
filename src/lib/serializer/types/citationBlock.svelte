<script>
    import PostModule   from "$lib/serializer/genericSerializer.svelte"
    export let push = undefined, titles = undefined;
    console.log(push);
</script>

<div class="parentCite">
    {#each push as row, i}
        {#if titles[i] !== undefined}
            <span class="title">
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
                        <span class="cite">
                            <PostModule postData={comment[1]}/>
                        </span>
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
        vertical-align: bottom;
        display: grid;

        .title {
            &:first-of-type {
                margin-top: 5px;}}

        .GalleryCite {
            margin: 5px 0 5px 5px;
            display: table;
        }
    }

    .citation {
        display: flex;
        > * {
            vertical-align: top;}

        .position {
            white-space: nowrap;
            padding-right: 3px;
            color: var(--darkAccent1);}
        .cite {
            > :global(p) {
                color: var(--backgroundAccent1);}}
        .referral {
            white-space: nowrap;
            padding-left: 5px;}

        &:hover {
            .position {
                color: var(--accent1);}
            .cite {
                > :global(p) {
                    color: var(--textColour);}}}
    }
</style>