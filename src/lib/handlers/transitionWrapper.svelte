<script>
    // local navigation checks & multipliers
    import { navigating, loading, directionX, directionY }  from '$lib/stores/directoryController.js';
    import { motion }                                       from '$lib/stores/accessibilityController';
    // transition imports
    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions     from 'svelte/easing'
    // navigation checks
    import { afterNavigate, beforeNavigate } from '$app/navigation';

    afterNavigate(async () => { //required on the front age to indicate load in
        loading.set(false);
    });

    beforeNavigate(async () => {
        navigating.set(true); //fallback in weird instances

        if ($loading){ // fallback in an instance where the page hasn't loaded in yet
            setTimeout(() => {
                navigating.set(false);
            }, transTimeOut);
        } else {
            navigating.set(false);
        }
    });
    // these are jank solutions, but generally work for the time being.
    // this all needs being replaced with a history scraper.

    // transition types
    export let
        transitionReqType = "fly",
        easingName = "easeInOut";

    // transition position vars
    let transition
    $:  transition = !$motion ? transitionFunctions[transitionReqType] : transitionFunctions["fade"];
    let easing = easingFunctions[easingName];

    // transition timeout vars
    export let
        transTimeIn = 300,
        transTimeOut = 300;
    export let // allows page delays
        delayIn = 0,
        delayOut = 0;

    export let // transition position multipliers
        transX = 30,
        transY = 30;
</script>

{#if !$navigating && !$loading} <!-- loading checks -->
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