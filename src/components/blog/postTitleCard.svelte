<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'

    export let titleHeader = undefined;
    export let title = undefined;

    let random = Math.floor(Math.random() * 6 + 1);
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
        display:        flex;
        align-items:    center;
        position:       relative;

        .title {
            min-width:  50%;
            width:      min-content;
            padding:    6px 10px;

            transform-origin:   left;

            background:		    var(--backgroundTrans);
            backdrop-filter:    blur(1px) saturate(300%);
            transform:          scale(0.9, 1);

            h2 {
                text-transform: uppercase;
                margin: 0 0 4px 2px;}
        }

        .headerBackground {
            position:   absolute;
            width:      100%; // this retains the image to it's max size
                // relative to the container. DON'T REMOVE.
        }
    }
</style>