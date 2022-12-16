<script>
    import SanityImage from '../../../libaries/sanityImage.svelte'
    export let portableText
    $: ({value} = portableText)
</script>

{#if value.asset}
    <SanityImage image={value} />
    {#if value.caption}
        <figcaption>{value.caption}</figcaption>
    {/if}
{/if}

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>