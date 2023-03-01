<script>
    import TitleCard        from "$components/generic/components/containerTitle.svelte"
    import Container        from "$components/generic/containers/container.svelte";

    import scrollIntoView   from "$stores/scrollHandler.js";
    export let list = null;
</script>

<Container>
    <TitleCard>
        Contents:
    </TitleCard>
    {#each list as data}
        <p href="#post-{data.slug}" on:click|preventDefault={scrollIntoView}>
            {data.title}
        </p>
    {/each}
</Container>

<style lang="scss">
	p {
		cursor:     alias;
		color:	 	var(--textColour);
		padding:    0 0 10px 0;

        &:last-of-type {
            padding:    0;
        }
	}
</style>