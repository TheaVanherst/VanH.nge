<script>
    import { scrollPos } from "$lib/stores/accessibilityController.js"

    export let min = 0;
    export let max = 65535; //fallback (basically, infinite)

    let parent;
    let w;

    $: parent ? reCalc() : undefined;
        // I can't think of an alternative.
        // I've spent 4 hours on this and don't want to spend more time.

    const reCalc = () => { //updates on element load.
        let val = parent.offsetTop; // TODO: this MIGHT need fixing at a later date.
        max = parseInt(max) + val;
        min = val;
    };

    let sticky =    false; // sticks itself to the page
    let stuck =     false; // sticks itself at the specified vertical offset

    $: if ($scrollPos <= min){
        stuck =     false;
        sticky =    false;
    } else if ($scrollPos > min && $scrollPos < (max + min)) {
        stuck =     false;
        sticky =    true;
    } else {
        stuck =     true;
        sticky =    false;
    }
</script>

<div bind:this={parent} bind:clientWidth={w}>
    <div
        class="scroller"
        style="--topOffset: {max}px; width: {w}px"

        class:sticky={sticky}
        class:stuck={stuck}>
        <slot/>
    </div>
</div>

<style lang="scss">
    .scroller {
        width:      inherit;
        position:   absolute;

        &.sticky {
            position:       fixed;
            top:            var(--containerPadding);}

        &.stuck {
            position:   absolute;
            top:        var(--topOffset);}
    }
</style>