<script>
    export let portableText = null;
</script>

<h>
    <slot/>
</h>

<style lang="scss">
    h {
        padding:        0 3px;
        color:          var(--textColourInvert);
        border-radius:  3px;
        background:     var(--accent2);

        &::selection {
          background: 	var(--accent2);}
    }
</style>