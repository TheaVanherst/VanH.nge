<script>
    import { scrollPos } from "$stores/accessibilityController.js"

    export let min = 47; //temporary value
    export let max = 65535;

    // TODO: There's a better way of handling this properly - please update
</script>

<div class="{$scrollPos >= min && $scrollPos < max ? 'fixed' : 'relative'}"
     style="top: {$scrollPos >= min ? $scrollPos < max ? '15px' : max : 'unset' }">
    <slot/>
</div>

<style lang="scss">
    div {
        &.fixed {
            position: fixed;
            padding-right: var(--containerPadding); // this is dumb
        }
    }
</style>