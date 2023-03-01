<script>
	import ArtPost from "$components/art/artComponent.svelte"

	export let data = null;
</script>

<div class="content">
	{#each data[0] as post, i}
		<div>
			<ArtPost post={post}/>
		</div>
	{/each}
</div>


<style lang="scss">
	.content {
		max-width: 	calc(100% - var(--containerPadding)); /* TODO: this is stupid */
		gap: 		var(--containerPadding);
		column-count: 2;
		box-sizing: border-box;

		> * {
			display: block;
		}
	}
</style>