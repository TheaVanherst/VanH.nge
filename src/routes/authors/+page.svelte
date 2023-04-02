<script>
	import PreviewComponent from "$components/author/previewComponent.svelte";
	export let data = [];
</script>

{#each data.authorRequests as author}
	<PreviewComponent author={author}/>
{/each}
