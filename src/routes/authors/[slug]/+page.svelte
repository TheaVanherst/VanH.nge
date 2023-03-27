<script>
	import AuthorComponent from "$components/author/authorComponent.svelte";

	export let data = null;
</script>

<AuthorComponent author={data.requestedAuthor[0]}/>

<style lang="scss">

</style>