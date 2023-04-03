<script>
    // local navigation checks & multipliers
    import { navigationStatus, loadingStatus, directionProcessing,
        directionX, directionY }    from '$lib/controllers/directoryController.js';
    import { motion }               from '$lib/controllers/accessibilityController';

    import LoadingFull from "$components/globals/components/loadingFull.svelte";

    // transition imports
    import * as transitionFunctions from 'svelte/transition';
    import * as easingFunctions     from 'svelte/easing';

    // navigation checks
    import { afterNavigate, beforeNavigate} from '$app/navigation';

    let pageUpdate = {};

    afterNavigate(async (n) => {
        if (!$loadingStatus) {            //TODO: ONLY BROWSER NAVIGATION
            let to =    n.to.url.pathname ?? "/",
                from =  n.type === "enter" ? to :
                        n?.from?.url.pathname ?? "/"; //checks reload vs browser
            await directionProcessing(from, to, to);} //resets x, y positions
        else {                      //TODO: AUTOMATED DIRECTING
            navigationStatus.set(true); //sets navigation to default value
            loadingStatus.set(false);} // indicates page is fully preloaded.

        navigationStatus.set(false); // indicates page has transitioned
    });

    beforeNavigate(async (n) => {   //TODO: ONLY BROWSER NAVIGATION
        let to =    n?.to?.url.pathname ?? "/",
            from =  n?.from?.url.pathname ?? "/";

        if (to !== from) { // checks for page reload
            pageUpdate = {};

            if (n.willUnload || // prevents _blank internal redirects
                    $navigationStatus || $loadingStatus) { // haults the current transition if already transitioning.
                event.preventDefault();}
            else {
                loadingStatus.set(true);
                await directionProcessing(from, to);}}
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
        transTimeIn = 250,
        transTimeOut = 250;
    export let // allows page delays
        delayIn = 250,
        delayOut = 0;
    export let // transition position multipliers
        transX = 25,
        transY = 25;

    // TODO: This needs to be stored
</script>

{#key pageUpdate}
    <div class="transitionWrapper"
        in:transition={{
            ease:       easing,
            duration:   transTimeIn,
            delay:      delayIn,
            x: transX * -$directionX,
            y: transY * $directionY}}
        out:transition={{
            ease:       easing,
            duration:   transTimeOut,
            delay:      delayOut,
            x: transX * $directionX,
            y: transY * -$directionY}}>
        <div class="absol">
            <slot/>
        </div>
    </div>
{/key}

{#if !(!$loadingStatus && !$navigationStatus)}
    <div class="loader">
        <LoadingFull/>
    </div>
{/if}



<style lang="scss">
    .loader {
        top: 0px;
        width:  110px;
        height: 110px;
        margin: 50px 0 0 -50px;
        position: absolute;
    }

    :global(.transitionWrapper > .absol:nth-child(1)) {
        position: relative;}
    :global(.transitionWrapper > .absol:nth-child(0)) {
        position: absolute;}
</style>