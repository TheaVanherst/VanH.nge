<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
    export let targetBool = false;

    export let overflowBool = true;
    export let centreBool = false;

    export let colour = "green"
    export let roundedBool = false;
</script>

{#if !push}
    <div class={colour}
         class:centre={centreBool}
         class:overflow={overflowBool}>
        <slot/>
    </div>
{:else}
    <a href={push}
       on:click={() => push ? urlChanger(push) : ''}
       target="{targetBool ? '_blank' : '_self'}">
        <div
            class={colour}
            class:rounded={roundedBool}
            class:centre={centreBool}
            class:overflow={overflowBool}>
            <slot/>
        </div>
    </a>
{/if}

<style lang="scss">
    .green {background: var(--accent1)}
    .yellow {background: var(--accent3)}
    .orange {background: var(--darkAccent3)}
    .red {background: var(--darkAccent4)}

	div {
		white-space:    nowrap;

        &.rounded {
            border-radius: 5px;
        }
		color:              var(--background);

		padding:    5px 10px;
		width:      auto;

		font-size:      13px;
        font-weight:    800;
        font-family:    'Arimo', sans-serif;

        &.overflow {
	        margin-bottom:  var(--contentPaddingY);
	        overflow:       hidden;
        }

		&.centre {
			text-align: center;
		}
	}
</style>
