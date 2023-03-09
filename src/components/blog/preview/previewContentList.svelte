<script>
    import TitleCard        from "$components/globals/containerTitle.svelte"
    import Container        from "$components/globals/containers/container.svelte";

    import scrollIntoView   from "$lib/stores/scrollHandler.js";
    export let list = null;
</script>

<Container padding={0}>
    <TitleCard>
        Contents:
    </TitleCard>
    <div>
        {#each list as data}
            <p href="#post-{data.slug}" on:click|preventDefault={scrollIntoView}>
                {data.title}
            </p>
        {/each}
    </div>
</Container>

<style lang="scss">
    div {
        padding: var(--containerPadding);
    }

	p {
		cursor:     alias;
		color:	 	var(--textColour);
		padding:    0 0 10px 0;

        &:last-of-type {
            padding:    0;
        }
	}
</style>