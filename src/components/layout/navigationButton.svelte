<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
</script>

<a href={push}
   class:clickable={!!push}
   on:click={urlChanger(push)}>
    <p>
        <slot/>
    </p>
</a>

<style lang="scss">
    a {
        display:    block;

        background-color:   var(--accent1);
        border-radius:      var(--innerRaidus);

        font: 14px monospace;

	    padding:        7px;
        transition:     background .2s ease-in-out;

	    > p {
		    line-height:    12px;
		    text-align:     center;
		    width:          100%;
		    color:          var(--textColourInvert);
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