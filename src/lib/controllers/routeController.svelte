<script>
    import { loading, urlStoreArr } from '$lib/controllers/directoryController.js';
    import { urlChanger }           from '$lib/controllers/directoryController.js';
    import navigation               from '$lib/controllers/navigationDirectories.js';

    let parent;
    let pw = 0, cw = 0, uw = undefined;
        // wrapper width, child width, child [controlled] width

    const scrollToRight = async (node) => {
        if (pw < uw) { //checks if wrapper is bigger than children.
            node.scroll({ left: 0, behavior: 'smooth' }); // resets the container scroll

            setTimeout(() => { // Waits until the transition is finished.
                uw = cw - 20; //sets parent width - parent padding.
            }, 1000);}
        else {
            uw = cw - 20; //sets parent width - parent padding.
            // This changes the scroll position for overflowing containers automatically,
            //      but only if the route is longer than the container.
            node.scroll({ left: uw, behavior: 'smooth' });} // sets the container scroll pos
    };

    $: if (cw !== uw && parent) scrollToRight(parent); //checks if contents of router is different to parent
        // this will update whenever the route changes, and will change the value of the parent equal to the child.

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

    <div class="wrapper" bind:clientWidth={pw} bind:this={parent}>
        <div class="sleeve" style="width: {uw}px">
            <div class="routeWidth" bind:clientWidth={cw}>

                {#each $urlStoreArr as route, i}
                    <div class="routeBlock"
                         class:transitioning={$loading}
                         class:clickable={i !== $urlStoreArr.length - 1}>

                        {#if i !== 0} <!-- replaces the first array elm, as it's duplicated on "/" -->
                            <a class="{$urlStoreArr[i]} cell"
                               href="{urlGenerator(i)}"
                               on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                                <h1 class="dir">
                                    }
                                </h1>
                                <h1>
                                    {serializer(route)}
                                </h1>
                            </a>
                        {:else} <!-- website title [Brings you to the home page] -->
                            <a class="{$urlStoreArr[i]} cell"
                               href="/featured"
                               on:click|preventDefault={() => urlChanger("/featured")}>
                                <h1>
                                    Vanh.art
                                </h1>
                            </a>
                        {/if}
                    </div>
                {/each}

            </div>
        </div>
    </div>

</div>

<style lang="scss">
    h1 {
        padding-right:  10px;
        line-height:    inherit;
        display:        inline-block;}

    .router { /* Scrollbar overflow preset */
        display:        grid;
        .wrapper {
            white-space:        nowrap;
            overflow-x:         scroll;

            -ms-overflow-style: none;       /* IE and Edge */
            scrollbar-width:    none;       /* Firefox */
            &::-webkit-scrollbar {
                display:        none;}      /* Chrome, Safari and Opera */
        }}

    .sleeve {
        position:   relative;
        width:      min-content;
        padding:    10px;

        .routeWidth {
            width:  min-content;}}


    .router {
        width:          100%;
        margin:         0 0 var(--containerPadding);
        background:     var(--backgroundTrans);
        text-transform: capitalize;

        .routeBlock {
            display:        inline-block;
            transition:     opacity .3s ease-in-out;

            > div {
                display: flex;

                .dir {
                    display: block;
                    top:    -2px;}}

            &.clickable {       cursor:     alias;
                                opacity:    0.5;
                &:hover {       opacity:    1;}}
            &.transitioning {   opacity:    0.3;}
            &:not(.clickable) { pointer-events: none;
                                position:   relative;
                                z-index:    99;}
        }
    }
</style>