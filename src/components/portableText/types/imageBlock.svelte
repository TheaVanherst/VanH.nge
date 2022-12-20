<script>
    import SanityImage from '../../../libaries/sanityImage.svelte'

    export let portableText
    $: ({value} = portableText)
</script>

<soloImg>
    <SanityImage image={value} />
</soloImg>

<style>
    soloImg {
        height: 100%;
        width: 100%;
        display: block;
    }
</style>