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

        background-color:   black;
        color:              var(--accent1);
        border-radius:      var(--innerRaidus);

	    padding:        5px;
	    border:         1px solid var(--darkAccent1);
        border-left:    2px solid var(--accent1);
	    border-right:   2px solid var(--accent1);

        transition:     border .1s ease-in-out;

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
		    color: var(--accent3);
		    border-color: var(--accent3);
	    }
    }
</style>