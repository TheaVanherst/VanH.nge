<script>
    import SanityImage from '../imageBuilder.svelte'

    export let portableText = null;

    console.log(portableText)
    let image = portableText.value
</script>

<div class="solo">
    <SanityImage image={image}/>
</div>

<style lang="scss">
    .solo {
        border-radius: var(--innerRaidus);
        overflow: hidden;
        display: block;

        &:not(:last-child) {
	         margin-bottom: 10px;
        }
    }
</style>