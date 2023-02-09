<script>
    import { navigating, loading } from '$stores/directoryController.js';

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
        }, transTimeOut + 50)
    })

    // transition types
    export let
        transitionReqType = "fly",
        easingName = "easeInOut";
    // transition timeout vars
    export let
        transTimeIn = 300,
        transTimeOut = 300;

    export let
        delayIn = 0,
        delayOut = 0;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    let direction = 'back'
    $: direction;

    export let transX = 30;

    let transition = transitionFunctions[transitionReqType]
    let easing = easingFunctions[easingName];
</script>

{#if !$navigating && !$loading}
    <div class="transitionWrapper"
         in:transition={{transTimeIn, delayIn, easing, x: direction === 'forwards' ? transX : -transX}}
         out:transition={{transTimeOut, delayOut, easing, x: direction === 'forwards' ? transX : -transX}}>
        <slot/>
    </div>
{/if}