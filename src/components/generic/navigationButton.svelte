<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
</script>

<div class:clickable={!!push} on:click={urlChanger(push)}>
    <p>
        <slot/>
    </p>
</div>

<style lang="scss">
    div {
        display:    block;

        background-color:   var(--accent1);
        color:              var(--textColourInvert);
        border-radius:      var(--innerRaidus);

        font: 14px monospace;

	    padding:        7px;
        transition:     background .2s ease-in-out;

        > p {
	        line-height: 	12px;
            margin: 0 auto;
            width: min-content;
        }

	    &:not(:last-child){
		    margin-bottom: 10px;
	    }
    }

    .clickable {
	    &:hover {
		    background-color:   var(--accent3);
	    }
    }
</style>