<script>
    export let portableText = null;

    let style = portableText.value.style,
        id = "header-" + portableText.value._key;
</script>

<div>
    {#if style === 'h1'}
        <h1 id="{id}">
            <slot />
        </h1>
    {:else if style === 'h2'}
        <h2 id="{id}">
            <slot />
        </h2>
    {:else if style === 'h3'}
        <h3 id="{id}">
            <slot />
        </h3>
    {:else}
        <h4 id="{id}">
            <slot />
        </h4>
    {/if}
</div>

<style lang="scss">
    h1, h2, h3, h4 {
	    padding:	 	0 0 0 20px;
	    margin:			0 0 var(--contentPaddingY) calc(var(--contentPaddingX) * -1);
    }
</style>