<script>
    import Header from '$components/pageHeader.svelte'
</script>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="Blog posts"/>
</svelte:head>

<Header/> <!-- TODO: adjust this to be chained -->
<slot/>

<style lang="scss">

</style>
