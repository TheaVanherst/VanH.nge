<script>
    import SanityImage from '../serializer/imageBuilder.svelte'

    export let titleHeader = undefined, title = undefined;

    let random = Math.floor(Math.random() * 3 + 1);
</script>

<div class="titleCard">
    <div class="headerBackground">
        {#if titleHeader}
            <SanityImage image={titleHeader}/>
        {:else}
            <img src="/titleContent{random}.gif">
        {/if}
    </div>

    <div class="title">
        <h1 class="capitalize">{title}</h1>
    </div>
</div>

<style lang="scss">
    .titleCard {
        overflow:       hidden;
        width:          100%;

        display:        flex;
        align-items:    center;
        position:       relative;

        .title {
            background-color: var(--background);
            padding:    5px;

            border: 1px solid var(--accent1);

            h1 {
                color:      var(--textColour);
                transform:  scale(1, 0.9);
                padding:    0 5px;
                z-index:    100;
            }
        }

        .headerBackground {
            filter:     blur(var(--imageBlurring));
            display:    block;
            position:   absolute;
            width:      110%;
            opacity:    0.5;}
    }
</style>