<script>
    import { directory, loading } from '$stores/directoryController.js';

    import LoadingBlinking from '$lib/handlers/loadingBlinking.svelte'

    import { fade } from 'svelte/transition';
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
        <wrapper
                class:transitioning={$loading}
                class:clickable={i < previewRoute.length - 1}>
            <span transition:fade>
                <h1 on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                    <span class="dir">}</span> <span>{router}</span>
                </h1>
            </span>
        </wrapper>
    {/each}

    {#if !$loading}
        <LoadingBlinking/>
    {/if}
</div>

<style lang="scss">
    .inline {
        margin: 0 var(--containerPadding) 17px var(--containerPadding);

	    wrapper {
		    &:not(:last-child){
			    padding-right:  10px;
            }
        }

	    span {
		    h1 {
			    .dir {
				    display:    inline-block;
				    top:        -4px;
				    position:   relative;
			    }
            }

		    img {
			    width:  24px;
			    height: 24px;
			    filter: invert(1);
            }
	    }
    }

    wrapper {
	    transition: opacity .3s ease-in-out;
        display:    inline-block;
        position:   relative;

	    &.clickable {
		    cursor: alias;
		    opacity: 0.5;

		    &:hover {
			    opacity: 1;
		    }
	    }

	    &.transitioning {
		    opacity: 0.3;
	    }
    }
</style>