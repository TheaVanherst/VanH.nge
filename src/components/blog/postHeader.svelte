<script>
    import SanityImage from '../serializer/imageBuilder.svelte'

    export let titleHeader = null, title = null;
</script>

<div class="title">
    <div class="headerBackground">
        <SanityImage image={titleHeader}/>
    </div>
    <h1>
        {title}
    </h1>
</div>

<style lang="scss">
    .title {
        overflow:       hidden;
        width:          100%;

        display:        flex;
        align-items:    center;
        position:       relative;

        h1 {
            z-index:    100;
            margin:     0;
            padding:    var(--contentPaddingY) var(--containerPadding);}

        .headerBackground {
            filter:     blur(var(--imageBlurring));
            display:    block;
            position:   absolute;
            width:      110%;
            opacity:    0.6;}
    }
</style>