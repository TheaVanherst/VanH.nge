<script>
    export let portableText = null;
    let style = portableText?.value?.style ? portableText.value.style : portableText;
</script>

{#if style === "wave"}
    <div class="divider wave"></div>
{:else if style === "normal"}
    <div class="divider line"></div>
{:else}
    <div class="divider line"></div>
{/if}

<style lang="scss">
	.divider {
		display:    block;
		position:   relative;

		width:          100%;
        margin-bottom: var(--containerPadding);
	}

    .wave {
	    height: 5px;

	    &::after,
	    &::before {
		    height:     inherit;
		    width:      inherit;
		    position:   absolute;

		    content:            "";
		    background-size:    6px 100%;
	    }
	    &::before {
		    top: -1px;
		    background-image: linear-gradient(45deg, var(--darkAccent1) 35%, transparent 0),
		    linear-gradient(-45deg, var(--darkAccent1) 35%, transparent 0);
	    }

	    &::after {
		    top: 0;
		    background-image: linear-gradient(45deg, var(--background) 35%, transparent 0),
		    linear-gradient(-45deg, var(--background) 35%, transparent 0);
	    }
    }

    .line {
        height: 1px;
        border-bottom: 1px solid var(--textColour);
    }
</style>