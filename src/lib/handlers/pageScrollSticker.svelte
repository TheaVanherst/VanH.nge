<script>
    import { scrollPos } from "$lib/stores/accessibilityController.js"

    export let min = 0;
    export let max = 65535; //fallback (basically, infinite)

    let parent, element;
    let offset = undefined;

    $: $scrollPos && !offset && element?.offsetParent ? reCalc() : undefined
        // this jank as fuck and I can't think of an alternative.
        // I've spent 4 hours on this.

    const reCalc = () => { //updates on element load.
        let val = element?.offsetParent?.offsetTop;
        max = parseInt(max) + val;
        min = val;
        offset = val;

        console.log(min)
    };

    let sticky =    false; // sticks itself to the page
    let stuck =     false;  // sticks itself at the specified vertical offset

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

<div bind:this={parent}>
    <div
        class="scroller"
        style="--topOffset: {max}px;"
        bind:this={element}
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
            padding-right:  var(--containerPadding);
            position:       fixed;
            top:            var(--containerPadding);}

        &.stuck {
            position:   absolute;
            top:        var(--topOffset);}
    }
</style>