<script>
    import { navigating, loading } from '../../stores/directoryController.js';

    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions from 'svelte/easing'

    // transition types
    export let
        transitionReqType = "fly",
        easingName = "easeInOut";
    // transition timeout vars
    export let
        transTimeIn = 500,
        transTimeOut = 100;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    export let
        transYIn = 30,
        transYOut = 30;
    // transition delay values
    export let
        delayIn = 0,
        delayOut = 0;

    let transition = transitionFunctions[transitionReqType]
    let easing = easingFunctions[easingName];
</script>

{#if !$navigating}
    <div class="transitionWrapper"
         on:outroend={() => navigating.set(false)}
         in:transition={{transTimeIn, delayIn, easing, y: transYIn}}
         out:transition={{transTimeOut, delayOut, easing, y: transYOut}}>
        <slot/>
    </div>
{/if}