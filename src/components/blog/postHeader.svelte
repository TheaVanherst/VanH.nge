<script>
    import SanityImage from '$components/serializer/imageBuilder.svelte'

    export let titleHeader = undefined;
    export let title = undefined, subtitle = undefined;

    let random = Math.floor(Math.random() * 3 + 1);
</script>

<div class="titleCard">
    <div class="headerBackground">
        <div>
            {#if titleHeader}
                <SanityImage image={titleHeader}/>
            {:else}
                <img src="/titleContent{random}.gif">
            {/if}
        </div>
    </div>

    <div class="title subCard">
        <h2 class="capitalize titlecard" title="{title}">{title}</h2>
    </div>
</div>

<style lang="scss">
    .titleCard {
        overflow:       hidden;
        width:          100%;

        display:        flex;
        column-count:   2;
        align-items:    center;
        position:       relative;

        margin-bottom:  var(--containerPadding);

        > * {
            display:    inline-block;
        }

        .title {
            max-width:  80%;
            min-width:  50%;
            width:      min-content;

            padding:    6px 10px;

            transform:          scale(0.9, 1);
            transform-origin:   left;

            z-index:    100;
            background: var(--background);

            h4 {
                font-family: "Arimo", sans-serif;
                float:      left;
                padding:    6px 0 0 0;
            }
        }

        .headerBackground {
            overflow:   hidden;
            position:   absolute;
        }
    }
</style>