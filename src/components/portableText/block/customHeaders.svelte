<script>
    export let portableText

    $: anchorId = `heading-${portableText.indexInParent}`
    $: style = portableText.value.style
</script>

{#if style === 'h1'}
    <h1><slot /></h1>
{:else if style === 'h2'}
    <h2><slot /></h2>
{:else if style === 'h3'}
    <h3><slot /></h3>
{:else}
    <h4><slot /></h4>
{/if}
