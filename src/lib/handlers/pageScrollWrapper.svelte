<script>
    import { scrollPos } from "$lib/stores/accessibilityController.js"

    export let max = 65535;
    export let min = 0;

    // atm this is only a good solution for elements in relation to the slot itself.
    // TODO: add a system to detect the next child.

    let element;
    $: min = element?.offsetParent?.offsetTop

    let pos = 0;
    $: pos =
        $scrollPos >= min ?
            $scrollPos < max ?
                ($scrollPos - min) + 'px'
                : max
            : 'unset';
</script>

<div
    bind:this={element}
    style="margin-top: {pos}">
        <slot/>
</div>

<style lang="scss">
    div {
        position:   absolute;
        width:      100%;
    }
</style>