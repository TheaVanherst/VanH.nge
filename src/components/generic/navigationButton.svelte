<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
</script>

<div class:clickable={!!push}>
    <a href={push} on:click={urlChanger(push)}>
        <p>
            <slot/>
        </p>
    </a>
</div>

<style lang="scss">
    div {
        display:    block;

        background-color:   var(--accent1);
        border-radius:      var(--innerRaidus);

        font: 14px monospace;

	    padding:        7px;
        transition:     background .2s ease-in-out;

        > a {
	        line-height:    12px;
	        text-align:     center;
            width: min-content;

            > p {
	            color:          var(--textColourInvert);
            }
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