<script>
    import { scrollPos } from "$lib/stores/accessibilityController.js"

    export let min = 0;
    export let max = 65535; //fallback (basically, infinite)

    let parent, element;

    $: element?.offsetParent ? reCalc() : undefined;
    const reCalc = () => { //updates on element load.
        let val = element?.offsetParent?.offsetTop + element?.parentNode?.offsetTop;
            max = parseInt(max) + parseInt(val);
            min = val;
    };

    $: console.log(min, max)

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