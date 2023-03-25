<script>
    // local navigation checks & multipliers
    import { navigate, loading, directionProcessing, directory,
            directionX, directionY}         from '$lib/controllers/directoryController.js';
    import { motion }                       from '$lib/controllers/accessibilityController';
    // transition imports
    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions     from 'svelte/easing'
    // navigation checks
    import { afterNavigate, beforeNavigate } from '$app/navigation';

    // TODO: Automated navigation controller
    afterNavigate(async () => {
        navigate.set(true);
        await awaitTimeout(transTimeOut);
        await awaitTimeout(transTimeIn);
        navigate.set(false);
        loading.set(false);
    });

    // TODO: Manual navigation controller
    beforeNavigate(async (navigation) => {
        navigate.set(true);

        let to = navigation.to.url.pathname,
            from = navigation.from ? navigation.from.url.pathname : "/";

        if (from === $directory) {
            $directory = to;
            await directionProcessing(from, to);}
    });

    const awaitTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

    // these are jank solutions, but generally work for the time being.
    // this all needs being replaced with a history scraper.

    // transition types
    export let
        transitionReqType =     "fly",
        easingName =            "easeInOut";

    // transition position vars
    let transition
    $:  transition =    !$motion ?
                            transitionFunctions[transitionReqType] :
                            transitionFunctions["fade"];
    let easing =        easingFunctions[easingName];

    // transition timeout vars
    export let
        transTimeIn = 200,
        transTimeOut = 200;
    export let // allows page delays
        delayIn = 0,
        delayOut = 0;

    export let // transition position multipliers
        transX = 30,
        transY = 30;
</script>

{#if !$loading && !$navigate} <!-- loading checks -->
    <div class="transitionWrapper"
         in:transition={{
                transTimeIn, delayIn, easing,
                x: transX * -$directionX,
                y: transY * $directionY}}
         out:transition={{
                transTimeOut, delayOut, easing,
                x: transX * $directionX,
                y: transY * -$directionY}}>
        <slot/>
    </div>
{/if}

<style lang="scss">
    div { //fallback
        min-width:  100%;
        max-width:  100%;
        width:      100%;
    }
</style>