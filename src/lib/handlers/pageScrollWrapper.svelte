<script>
    import { scrollPos } from "$stores/accessibilityController.js"

    export let min = 47; //temporary value
    export let max = 65535;

    let pos = 0;
    $: pos = $scrollPos >= min ? $scrollPos < max ? ($scrollPos - min) + 'px' : max : 'unset'; //lazy
</script>

<div style="margin-top: {pos}">
    <slot/>
</div>

<style lang="scss">
    div {
        position:   absolute;
        width:      100%;
    }
</style>