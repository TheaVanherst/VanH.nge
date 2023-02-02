<script>
    import { loading, directory } from '$lib/directoryController.js';

    import { fade } from 'svelte/transition';

    // transition timeout vars
    export let transTimeIn = 500;
    export let transTimeOut = 100;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // checks if the previous page is different to the new page.
    $:  if($loading === true) {
        setTimeout(() => {
            $loading = false;
        }, transTimeIn);
    }
</script>

{#if $directory && !$loading}
    <div class="transitionWrapper"
         in:fade={{ in: transTimeIn}}
         out:fade={{ in: transTimeOut}}>
        <slot/>
    </div>
{/if}
