<script>
    export let colour = "green"
</script>

<div class="{colour}">
    <p>
        <slot/>
    </p>
</div>

<style lang="scss">
    div {
	    width:      100%;

        &.green {   background: var(--accent1);}
        &.yellow {  background: var(--accent3);}
        &.orange {  background: var(--darkAccent3);}
        &.red {     background: var(--darkAccent4);}

	    p {
            font-size:      100%;
            font-family:    "Arimo", sans-serif;
		    color:          var(--textColourInvert);
            font-weight:    800;

            padding:        10px 15px 10px 15px;
	    }
    }
</style>