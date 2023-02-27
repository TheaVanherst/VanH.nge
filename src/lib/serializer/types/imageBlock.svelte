<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'

    export let portableText = null;
</script>

<div class="solo">
    <SanityImage image={portableText.value}/>
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