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

    const awaitTimeout = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));};

    afterNavigate(async (navigation) => {
        if (!$loading) {
            console.log("refresh / website entry");

            let to = navigation.to ? navigation.to.url.pathname : "/",
                from = navigation.from ? navigation.from.url.pathname : "/";
            await directionProcessing(from, to);
            directory.set(to);} // updates local url
        else {
            console.log("clicked an internal link");

            loading.set(false);
            navigate.set(true); //sets navigation to default value
            await awaitTimeout(transTimeOut);}
        // indicates page is fully preloaded.

        await awaitTimeout(transTimeIn); // waits for fade in to complete
        navigate.set(false); // indicates page has transitioned
    });

    beforeNavigate(async () => { // TODO: this determines page switching from page refresh.
        loading.set(true);  //sets loading to default value
        await awaitTimeout(transTimeOut); // prevents scroller related issues.
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