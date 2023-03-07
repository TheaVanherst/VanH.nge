<script>
	import ArtPost from "$components/generic/galleryComponent.svelte"

	export let data = [];
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
		gap: 			var(--containerPadding);
		column-count: 	2;	//fuck this tbh.
	}
</style>