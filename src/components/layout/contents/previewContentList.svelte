<script>
    import Container        from "$components/globals/containers/container.svelte";

    import scrollIntoView   from "$lib/controllers/scrollHandler.js";
    export let
        href = "",
        titles = "";
</script>

<Container padding={0}>
    <div class="title"
        on:click|preventDefault={scrollIntoView}>
        <p>
            Contents
        </p>
    </div>
    <div class="contents">
        {#each href as url, i}
            <p href="#{url}"
               on:click|preventDefault={scrollIntoView}>
                {titles[i]}
            </p>
        {/each}
    </div>
</Container>

<style lang="scss">
    p {	cursor:	alias;}

    .title {
        width:      	100%;
        background: 	var(--accent1);

        p {
            font-size: 		100%;
            font-family: 	"Arimo", sans-serif;
            color: 			var(--textColourInvert);
            font-weight: 	800;

            padding: 10px 15px 10px 15px;
        }
    }

    .contents {
        padding: var(--containerPadding);

        p {
            color:	 	var(--textColour);
            padding:    0 0 10px 0;

            &:last-of-type {
                padding:    0;}}
    }
</style>