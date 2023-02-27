<script>
    import LoadingBlinking from '$lib/handlers/loadingBlinking.svelte'

    import { directory, loading } from '$stores/directoryController.js';
    import { urlChanger } from '$stores/directoryController.js';

    let localRoute; //backend management url string
    $: localRoute = $directory.split("/");
    $: localRoute.shift();

    let previewRoute; //frontend viewable url string
    $: previewRoute = $directory.replaceAll("-"," ").split("/")
    $: previewRoute.shift();

    const urlGenerator = (pos) => {
        let routeUrl = "";
        for (let i = 0; i < pos + 1; i++){
            routeUrl += "/" + localRoute[i];
        }
        return routeUrl;
    }
</script>

<div class="inline">
    {#each previewRoute as router, i}
        <div class="wrapper"
             class:transitioning={$loading}
             class:clickable={i < previewRoute.length - 1}>
            <div on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                <h1 class="dir">}</h1> <h1>{router}</h1>
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