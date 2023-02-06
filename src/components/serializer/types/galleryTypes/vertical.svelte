<script>
    import SanityImage from '../../imageBuilder.svelte'
    export let push
</script>

<div class="table vertical">
    {#each push as image}
        <SanityImage image={image}/>
    {/each}
</div>

<style>
	.table {
		border-radius:  var(--outerRadius);
		margin-bottom:  var(--contentPaddingY);
		overflow:       hidden;}
</style>