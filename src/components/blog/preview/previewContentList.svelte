<script>
    import TitleCard from "$components/generic/containerTitle.svelte"
    import Container from "$components/generic/container.svelte";

    import scrollIntoView from "$lib/scrollHandler.js";
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
    $margin: calc(var(--containerPadding) * -1);

	p {
		cursor:     alias;
		color:	 	var(--textColour);
		font:       15px monospace;
		padding:    0 0 4px 0;

        &:last-of-type {
            padding: 0 0 0 0;
        }
	}
</style>