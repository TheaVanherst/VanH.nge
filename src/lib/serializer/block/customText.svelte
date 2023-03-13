<script>
    export let portableText = null;
</script>

<p>
    <slot/>
</p>

<style lang="scss">
    p {
        font-size:      13px;
        line-height:    100%;
        font-family:    'Arimo', sans-serif;

        font-weight:    400;
        color:          var(--textColour);

        margin:         0;

        &:not(:last-child){
	        padding:    0 0 10px 0;
        }
    }
</style>