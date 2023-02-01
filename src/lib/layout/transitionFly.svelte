<script>
    import { fly } from 'svelte/transition';
    import { afterUpdate  } from 'svelte';

    // page memory vars
    export let name;
    let previousName = Math.random();

    // transition timeout vars
    export let transTimeIn = 500;
    export let transTimeOut = 100;

    $: if (transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    export let TransXIn = 30;
    export let TransXOut = 50;

    let transitioning = false;
    // checks if the previous page is different to the new page.
    $:  if(name !== previousName) {
            transitioning = true;
        }

    afterUpdate(() => {
        transitioning = false;
        previousName = name
    });
</script>

{#if !transitioning}
    <div class="transitionWrapper"
         in:fly={{ x: TransXIn, in: transTimeIn}}
         out:fly={{ x: TransXOut, in: transTimeOut}}>
        <slot />
    </div>
{/if}
