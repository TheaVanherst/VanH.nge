<script>
    import { directory, loading } from '$stores/directoryController.js';
    import LoadingAnimation from '$lib/handlers/loadingAnimation.svelte'
</script>

<div class="router">
    <div class="titleCard">
        <div>
            <h1>
                {$directory}
            </h1>
        </div>
        <div class="right">
            {#if $loading}
                <LoadingAnimation/>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .router {
        border:         1px solid var(--accent1);
        border-radius:  var(--outerRadius);
        overflow:       hidden;
        margin:     0 0 var(--containerPadding) 0;
        max-width:  100%;
        position:   relative;
    }

    .titleCard {
	    padding: 	var(--containerPadding);
	    background:		var(--background);
	    color: 			var(--textColour);

	    div {
		    display: inline-block;
		    margin: auto;
	    }

	    .right {
		    float:right;
	    }
    }
</style>