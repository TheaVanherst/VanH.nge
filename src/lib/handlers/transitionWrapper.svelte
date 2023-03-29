<script>
    // local navigation checks & multipliers
    import { navigate, loading, directionProcessing,
            directionX, directionY}         from '$lib/controllers/directoryController.js';
    import { motion }                       from '$lib/controllers/accessibilityController';
    // transition imports
    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions     from 'svelte/easing'
    // navigation checks
    import { afterNavigate, beforeNavigate } from '$app/navigation';

    const awaitTimeout = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));};

    afterNavigate(async (navigation) => {
        if (!$loading) {            //TODO: ONLY PAGE REFRESHES
            let to = navigation?.to?.url.pathname ?? "/";
            await directionProcessing("/", "/", to);} //resets x, y positions
                //TODO: this would be nice to push inb4 a page refresh.
        else {                      //TODO: AUTOMATED DIRECTING
            loading.set(false); // indicates page is fully preloaded.
            navigate.set(true); //sets navigation to default value
            await awaitTimeout(transTimeOut);}

        await awaitTimeout(transTimeIn); // waits for fade in to complete
        navigate.set(false); // indicates page has transitioned
    });

    beforeNavigate(async (navigation) => { //TODO: ONLY BROWSER NAVIGATION
        let to = navigation?.to?.url.pathname ?? "/",
                from = navigation?.from?.url.pathname ?? "/";
        await directionProcessing(from, to);
        loading.set(true);  //fallback for if the URL manager isn't doing it.
    });

    // transition types
    export let
        transitionReqType =     "fly",
        easingName =            "easeInOut";

    // transition position vars
    let transition
    $:  transition = !$motion ? transitionFunctions[transitionReqType] : transitionFunctions["fade"];
    let easing = easingFunctions[easingName];

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