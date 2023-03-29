<script>
    import { fade } from 'svelte/transition';

    import { loading, urlStoreArr } from '$lib/controllers/directoryController.js';

    import navigation               from '$lib/controllers/navigationDirectories.js';
    import ScrollAnimationWrapper   from "$components/globals/misc/scrollAnimationWrapper.svelte";

    const
        serializer = (r) => {
            // this just calculates the publicly named directory via the sidebar names.
            let i = navigation.map(e => e.path).indexOf("/" + r);
            return (i !== -1 ? navigation[i].title : r).replaceAll("-"," ");},

        urlGenerator = (pos) => {
            // generates url based on position in router.
            return $urlStoreArr.slice(0, pos + 1).map(i => i).join("/");};
</script>

<div class="router">
    <ScrollAnimationWrapper>
        {#each $urlStoreArr as route, i}
            <div class="routeBlock {i !== $urlStoreArr.length - 1 ? 'clickable' : 'nonClickable'}"
                 transition:fade={{duration: 200}}>

                {#if i !== 0} <!-- replaces the first array elm, as it's duplicated on "/" -->
                    <a href="{urlGenerator(i)}">
                        <h1 class="dir">
                            {serializer(route)}
                        </h1>
                    </a>
                {:else} <!-- website title [Brings you to the home page] -->
                    <a href="/featured">
                        <h1>
                            Vanh.art
                        </h1>
                    </a>
                {/if}
            </div>
        {/each}
    </ScrollAnimationWrapper>
</div>

<style lang="scss">
    .router {
        margin:         0 0 var(--containerPadding);
        padding:        8px 10px 10px;

        background:     var(--backgroundTrans);
        text-transform: capitalize;
        z-index:        100;

        h1 {
            padding:        0 5px;
            line-height:    inherit;
            &.dir:before {
                content: "}";
                padding-right: 10px;}}

        .routeBlock {
            display:    inline-block;
            transition: opacity .3s ease-in-out;
            &.clickable {
                cursor:     alias;
                opacity:    0.5;
                &:hover {
                    opacity:    1;}}
            &.nonClickable {
                pointer-events: none;
                position:       relative;
                z-index:        99;}}
    }
</style>