<script>
    import LoadingBlinking from '$lib/handlers/loadingBlinking.svelte'

    import { directory, loading, urlStoreArr } from '$lib/stores/directoryController.js';
    import { urlChanger } from '$lib/stores/directoryController.js';
    import navigation from "$lib/stores/navigationDirectories.js";

    let localRoute; //backend management url string
    $: localRoute = $directory.split("/");
    $: localRoute.shift();

    let previewRoute; //frontend viewable url string
    $: previewRoute = $directory.replaceAll("-"," ").split("/")
    $: previewRoute.shift();

    const serializer = (r) => {
        let t = navigation.map(e => e.path).indexOf("/" + r)
        if (t !== -1){
            return navigation[t].title
        } else {
            return r
        }
    }

    const urlGenerator = (pos) => {
        let returnURL = [];

        for (let i = 0; i < pos + 1; i++) {
            returnURL += $urlStoreArr[i];
            returnURL += i !== pos ? "/" : "";
        }

        return returnURL;
    }
</script>

<div class="inline">
    {#each $urlStoreArr as route, i}
        <div class="wrapper"
             class:transitioning={$loading}
             class:clickable={i < previewRoute.length - 1}>
            <div class={$urlStoreArr[i]}
                 on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                <h1 class="dir">
                    }
                </h1>
                <h1>
                    {serializer(route)}
                </h1>
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