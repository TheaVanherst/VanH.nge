<script>
    import { directory } from '$lib/directoryController.js';
    import { loading } from '$lib/directoryController.js';
    import Transition from "$lib/handlers/transitionFade.svelte";
    import LoadingAnimation from '$lib/handlers/loadingAnimation.svelte'
</script>


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

<style lang="scss">
	.titleCard {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	var(--containerPadding);
		border-radius: 	var(--outerRadius);
		background:		var(--backgroundTrans);
		color: 			var(--textColour);
        margin-bottom: var(--containerPadding);

        div {
            display: inline-block;
            margin: auto;
        }

        .right {
            float:right;
        }
	}
</style>