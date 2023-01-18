<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
</script>

<div class="table vertical">
    {#each push as image}
        <div class="col">
            <SanityImage image={image}/>
        </div>
    {/each}
</div>

<style>
	.table {
		border-radius: var(--outerRadius);
		margin-bottom: var(--contentPaddingY);
		overflow: hidden;
	}
</style>