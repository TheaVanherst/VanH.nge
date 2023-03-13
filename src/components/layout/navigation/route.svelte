<script>
    import { loading, urlStoreArr } from '$lib/stores/directoryController.js';
    import { urlChanger } from '$lib/stores/directoryController.js';
    import navigation from "$lib/stores/navigationDirectories.js";

    let parent;
    let pw = 0, cw = 0, uw = undefined;

    const scrollToRight = async (node) => {
        if (pw < uw) {
            node.scroll({ left: 0, behavior: 'smooth' });

            setTimeout(() => {
                uw = cw - 20;
            }, 1000);}
        else {
            uw = cw - 20;

            node.scroll({ left: uw, behavior: 'smooth' });
        }
    };

    $: cw !== uw && parent ? scrollToRight(parent) : undefined

    const serializer = (r) => {
        // this just calculates the publicly named directory via the sidebar names.
        let i = navigation.map(e => e.path).indexOf("/" + r)
        return i !== -1 ? navigation[i].title : r;
    }

    const urlGenerator = (pos) => {
        // generates URL based on the current URL.
        let returnURL = [];
        for (let i = 0; i < pos + 1; i++) {
            returnURL[i] = $urlStoreArr[i];} // fetches current address
        return returnURL ? returnURL.join("/") : "/";
    }
</script>

<div class="router">
    <div class="wrapper"
         bind:clientWidth={pw}
         bind:this={parent}>

        <div class="sleeve"
             style="width: {uw}px">
            <div class="routeWidth"
                 bind:clientWidth={cw}>

                {#each $urlStoreArr as route, i}
                    <div class="routeBlock"
                         class:transitioning={$loading}
                         class:clickable={i < $urlStoreArr.length - 1}>
                        <div class="{$urlStoreArr[i]} cell"
                             on:click|preventDefault={() => urlChanger(urlGenerator(i))}>

                            {#if i !== 0} <!-- replaces the first array elm, as it's duplicated on "/" -->
                                <h1 class="dir">
                                    }
                                </h1>
                                <h1>
                                    {serializer(route).replaceAll("-"," ")}
                                </h1>
                            {:else}
                                <h1>
                                    Vanh.art
                                </h1>
                            {/if}

                        </div>
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

    /* Scrollbar overflow preset */
    .router {
        display:        grid;

        //-webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) 20%);

        .wrapper {
            white-space:        nowrap;
            overflow-x:         scroll;

            -ms-overflow-style: none;       /* IE and Edge */
            scrollbar-width:    none;       /* Firefox */
            ::-webkit-scrollbar {
                display:        none;}}}    /* Chrome, Safari and Opera */

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

            &.clickable {
                cursor:     alias;
                                opacity:    0.5;
                &:hover {       opacity:    1;}}
            &.transitioning {   opacity:    0.3;}
            &:not(.clickable) {
                position: relative;
                z-index: 99;
            }
        }
    }
</style>