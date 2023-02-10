<script>
    import { directory, loading } from '$stores/directoryController.js';
    import LoadingAnimation from '$lib/handlers/loadingAnimation.svelte'

    import { fade } from 'svelte/transition';
    import { urlChanger } from '$stores/directoryController.js';

    import Container from "$components/generic/container.svelte";

    let localRoute;
    $: localRoute = $directory.split("/");
    $: localRoute.shift();

    const urlGenerator = (pos) => {
        let routeUrl = "";
        for (let i = 0; i < pos + 1; i++){
            routeUrl += "/" + localRoute[i];
        }
        return routeUrl;
    }
</script>

<Container>
    <div class="inline">
        {#each localRoute as router, i}
            <wrapper
                   class:transitioning={$loading}
                   class:clickable={i < localRoute.length - 1}>
                <div class="route">
                    <h1 transition:fade
                        on:click|preventDefault={() => urlChanger(urlGenerator(i))}>
                        } {router}
                    </h1>
                </div>
            </wrapper>
        {/each}

        {#if $loading}
            <LoadingAnimation/>
        {/if}
    </div>
</Container>

<style lang="scss">
    .inline {
	    display: inline-table;
	    vertical-align: middle;

	    div {
		    display: table-cell;
		    padding-right: 10px;

		    h1 {
			    margin: 0;
			    text-wrap: none;

                &.pointer {
                    margin-top: -3px
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
        display: inline-block;
        position: relative;

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