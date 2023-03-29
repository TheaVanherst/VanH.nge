<script>
	import PreviewComponent from "$components/author/previewComponent.svelte";

	export let data = [];

    console.log(data);
</script>

<div class="content">
	{#each data.authorRequests as author}
		<PreviewComponent author={author}/>
	{/each}
</div>

<style lang="scss">
	.content {
		max-width: 70%;
	}
</style>