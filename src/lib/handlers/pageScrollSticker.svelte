<script>
    import { scrollPos } from "$lib/stores/accessibilityController.js"

    export let min = undefined;
    export let max = 65535; //fallback (basically, infinite)

    let parent;
    let w;
    let bool = false;

    $: !bool && !!parent?.offsetTop && $scrollPos ? reCalc() : undefined;

    const reCalc = () => { //updates on element load.
        let val = parent.offsetTop; // TODO: this MIGHT need fixing at a later date.
        max = parseInt(max) + val;
        min = val;
        bool = true;
    };

    let sticky =    false; // sticks itself to the page
    let stuck =     false; // sticks itself at the specified vertical offset

    $: if ($scrollPos <= min){
        stuck =     false;
        sticky =    false;
    } else if ($scrollPos > min && $scrollPos < (max + min)) {
        stuck =     false;
        sticky =    true;
    } else if ($scrollPos > (max + min)) {
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