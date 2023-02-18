<script>
    export let portableText = null;
</script>

<p>
    <slot/>
</p>

<style lang="scss">
    p {
        margin:     0;

	    color:      var(--textColour);
        font-weight: 400;
        line-height: 100%;

        &:not(:last-child){
	        padding:    0 0 10px 0;
        }
    }
</style>