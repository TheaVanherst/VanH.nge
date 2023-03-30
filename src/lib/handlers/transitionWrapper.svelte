<script>
    // local navigation checks & multipliers
    import { navigate, loading,
            directionProcessing,
             directionX, directionY}    from '$lib/controllers/directoryController.js';
    import { motion }                   from '$lib/controllers/accessibilityController';
    // transition imports
    import * as transitionFunctions from 'svelte/transition'
    import * as easingFunctions     from 'svelte/easing'
    // navigation checks
    import { afterNavigate, beforeNavigate } from '$app/navigation';

    const awaitTimeout = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));};

    // this is fucking retarded
    afterNavigate(async (n) => {
        navigate.set(true); //sets navigation to default value

        if (!$loading) {            //TODO: ONLY BROWSER NAVIGATION
            let to =    n.to.url.pathname ?? "/",
                from =  n.type === "enter" ? to :
                        n?.from?.url.pathname ?? "/"; //checks reload vs browser
            await directionProcessing(from, to, to);} //resets x, y positions

        else {                      //TODO: AUTOMATED DIRECTING
            loading.set(false); // indicates page is fully preloaded.
            await awaitTimeout(transTimeOut);}

        await awaitTimeout(transTimeIn); // waits for fade in to complete
        navigate.set(false); // indicates page has transitioned
    });

    beforeNavigate(async (n) => {   //TODO: ONLY BROWSER NAVIGATION
        let to =    n?.to?.url.pathname ?? "/",
            from =  n?.from?.url.pathname ?? "/";

        if (to !== from) { // checks for page reload
            if (n.willUnload || // prevents _blank internal redirects
                $navigate || $loading) { // haults the current transition if already transitioning.
                document.preventDefault();}
            else {
                loading.set(true);
                await directionProcessing(from, to);}}

        await awaitTimeout(transTimeIn);
    });

    // transition types
    export let
        transitionReqType =     "fly",
        easingName =            "easeInOut";

    // transition position vars
    let transition
    $:  transition = !$motion ? transitionFunctions[transitionReqType] : transitionFunctions["fade"];
    let easing = easingFunctions[easingName];

    // transition timeout vars
    export let
        transTimeIn = 200,
        transTimeOut = 200;
    export let // allows page delays
        delayIn = 0,
        delayOut = 0;

    export let // transition position multipliers
        transX = 30,
        transY = 30;
</script>

{#if !$loading && !$navigate} <!-- loading checks -->
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