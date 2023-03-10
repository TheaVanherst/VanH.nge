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

<div class="inline">
    {#each $urlStoreArr as route, i}
        <div class="wrapper"
             class:transitioning={$loading}
             class:clickable={i < $urlStoreArr.length - 1}>
            <div class={$urlStoreArr[i]}
                 on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                {#if i !== 0} <!-- replaces the first array elm, as it's duplicated on "/" -->
                    <h1 class="dir">
                        }
                    </h1>
                    <h1>
                        {serializer(route)}
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

<style lang="scss">
    .inline {
        width:  calc(100% - (var(--containerPadding) * 2));
        margin:  0 var(--containerPadding) var(--containerPadding);

	    .wrapper {
		    &:not(:last-child){
			    padding-right:  10px;}}

        .dir {
		    top:    -4px;}

        h1 {
	        display:    inline-block;}
    }

    .wrapper {
	    transition: opacity .3s ease-in-out;
        display:    inline-block;
        position:   relative;

	    &.clickable {
		    cursor:     alias;
		    opacity:    0.5;

		    &:hover {
			    opacity: 1;}
	    }

	    &.transitioning {
		    opacity:    0.3;}
    }
</style>