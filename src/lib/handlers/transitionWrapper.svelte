<script>
    import { navigating, loading, directionX, directionY }  from '$lib/stores/directoryController.js';
    import { motion }               from '$lib/stores/accessibilityController';

    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions     from 'svelte/easing'

    import { afterNavigate, beforeNavigate } from '$app/navigation';

    afterNavigate(() => {
        loading.set(false);
    });

    beforeNavigate(() => {
        navigating.set(true);
        setTimeout(() => {
            navigating.set(false);
        }, transTimeOut + 50);
    });

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
    export let
        delayIn = 0,
        delayOut = 0;

    export let
        transX = 30,
        transY = 30;
</script>

{#if !$navigating && !$loading}
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

<style>
    div {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
    }
</style>