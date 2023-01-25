<script>
    import { fade } from 'svelte/transition';
    import error from '../../routes/+error.svelte';

    // page memory vars
    export let name;
    let previousName = name;

    // transition timeout vars
    export let transTimeIn = 500;
    export let transTimeOut = 100;

    $: if(transTimeIn < transTimeOut) {
        transTimeOut = transTimeIn - 100;
    } //fallback to prevent container overflow

    // transition position vars
    export let TransXIn = 30;
    export let TransXOut = 50;

    let transitioning = false;

    $: if (name) {

    }

    // checks if the previous page is different to the new page.
    $:  if(name !== previousName) {
            transitioning = true;
            setTimeout(() => {
                transitioning = false;
                previousName = name
            }, transTimeIn);
        }

    $:console.log(name)

</script>

{#if !transitioning}
    <div class="transitionWrapper"
         in:fade={{ x: TransXIn, in: transTimeIn}}
         out:fade={{ x: TransXOut, in: transTimeOut}}>
        <slot/>
    </div>
{/if}

<style>
	.transitionWrapper {

	}
</style>