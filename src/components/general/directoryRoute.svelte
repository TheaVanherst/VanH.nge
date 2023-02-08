<script>
    import { directory, loading } from '$stores/directoryController.js';
    import Transition from "$lib/handlers/transitionWrapper.svelte";

    import LoadingAnimation from '$lib/handlers/loadingAnimation.svelte'
</script>


<div class="titleCard">
    <div>
        <h1>
<!--            <Transition transitionReqType="fade">-->
                {$directory} <!-- temporary solution -->
<!--            </Transition>-->
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