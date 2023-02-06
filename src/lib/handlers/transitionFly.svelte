<script>
    import { loading, directory } from '$lib/directoryController.js';
    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions from 'svelte/easing'

    export let transitionReqType = "fly";
    export let easingName = "easeInOut";

    // transition timeout vars
    export let transTimeIn = 500;
    export let transTimeOut = 100;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    export let transXIn = 30;
    export let transXOut = 50;

    export let delayIn = 30;
    export let delayOut = 50;

    let transition = transitionFunctions[transitionReqType]
    let easing = easingFunctions[easingName];

    // checks if the previous page is different to the new page.
    $:  if($loading === true) {
        setTimeout(() => {
            $loading = false;
        }, transTimeIn);
    }
</script>

{#if $directory && !$loading}
    <div class="transitionWrapper"
         in:transition={{transTimeIn, delayIn, easing, x: transXIn}}
         out:transition={{transTimeOut, delayOut, easing, x: transXOut}}>
        <slot/>
    </div>
{/if}