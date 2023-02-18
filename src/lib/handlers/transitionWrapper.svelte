<script>
    import { navigating, loading } from '$stores/directoryController.js';
    import { motion } from '$stores/accessibilityController';

    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions from 'svelte/easing'

    import { afterNavigate, beforeNavigate } from '$app/navigation';

    afterNavigate(() => {
        loading.set(false);
    })

    beforeNavigate(() => {
        navigating.set(true);
        setTimeout(() => {
            navigating.set(false);
        }, transTimeOut + 50);
    })

    // transition types
    export let
        transitionReqType = "fly",
        easingName = "easeInOut";

    // transition position vars
    let direction = 'back';
    $: direction;

    let transition
    $: transition = !$motion ? transitionFunctions[transitionReqType] : transitionFunctions["fade"];
    let easing = easingFunctions[easingName];

    // transition timeout vars
    export let
        transTimeIn = 300,
        transTimeOut = 300;
    export let
        delayIn = 0,
        delayOut = 0;

    export let transX = 30;
</script>

{#if !$navigating && !$loading}
    <div class="transitionWrapper"
         in:transition={{transTimeIn, delayIn, easing, x: direction === 'forwards' ? transX : -transX}}
         out:transition={{transTimeOut, delayOut, easing, x: direction === 'forwards' ? transX : -transX}}>
        <slot/>
    </div>
{:else if $navigating}
    <div>

    </div>
{/if}

<style>
    div {
        position: absolute;
        width: 100%;
    }
</style>