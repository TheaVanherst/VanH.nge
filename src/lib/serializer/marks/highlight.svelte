<script>
    export let portableText = null;
</script>

<h>
    <slot/>
</h>

<style lang="scss">
    h {
        padding:        0 var(--textPaddingAccent);
        border-radius:  var(--textRadiusAccent);

        white-space: break-spaces;
            // retains padding around elements for the highlight

        color:          var(--textColourInvert);
        background:     var(--accent1);
        &::selection {
            background: 	var(--accent1);}
    }
</style>