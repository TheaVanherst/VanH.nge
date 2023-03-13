<script>
    import LoadingBlinking from '$lib/handlers/loadingBlinking.svelte'

    import { loading, urlStoreArr } from '$lib/stores/directoryController.js';
    import { urlChanger } from '$lib/stores/directoryController.js';
    import navigation from "$lib/stores/navigationDirectories.js";

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

<div class="content">
    <div class="wrapper">
        <div class="sleeve">
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

            {#if $loading}
                <LoadingBlinking/>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    h1 {
        padding-right:  10px;
        line-height: inherit;
        display:    inline-block;}

    /* Scrollbar overflow preset */
    .content {
        display:        grid;
        .wrapper {
            display:        grid;
            overflow-x:     scroll;
            white-space:    nowrap;

            .sleeve {
                padding: 10px;}}}

    .content {
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

                &:hover {
                    opacity: 1;}}

            &.transitioning {
                opacity:    0.3;}}}
</style>