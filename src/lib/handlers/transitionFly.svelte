<script>
    import { loading, directory } from '$lib/directoryController.js';

    import { fly } from 'svelte/transition';

    // transition timeout vars
    export let transTimeIn = 500;
    export let transTimeOut = 100;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    export let TransXIn = 30;
    export let TransXOut = 50;

    // checks if the previous page is different to the new page.
    $:  if($loading === true) {
        setTimeout(() => {
            $loading = false;
        }, transTimeIn);
    }
</script>

{#if $directory && !$loading}
    <div class="transitionWrapper"
         in:fly={{ x: TransXIn, in: transTimeIn}}
         out:fly={{ x: TransXOut, in: transTimeOut}}>
        <slot/>
    </div>
{/if}