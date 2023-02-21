<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
    export let targetBool = false;

    export let overflowBool = true;
    export let centreBool = false;
</script>

{#if !push}
    <div class:centre={centreBool}
         class:overflow={overflowBool}>
        <slot/>
    </div>
{:else}
    <a href={push}
       on:click={() => !targetBool ? urlChanger(push) : ''}
       target="{targetBool ? '_blank' : '_self'}">
        <div class:centre={centreBool}>
            <slot/>
        </div>
    </a>
{/if}

<style lang="scss">
	div {
		white-space:    nowrap;

		background-color:   var(--accent1);
		color:              var(--background);

		padding:    5px 10px;
		width:      auto;
		font-size:  13px;

        &.overflow {
	        border-radius:  var(--innerRaidus);
	        margin-bottom:  var(--contentPaddingY);
	        overflow:       hidden;
        }

		&.centre {
			text-align: center;
		}
	}
</style>
