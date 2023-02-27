<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    import CommentBlock from "$lib/serializer/types/galleryTypes/citationBlock.svelte";
    export let push, comments;
</script>

<div class="table">
    <div>
        {#each push as image}
            <div class="col">
                <SanityImage image={image}/>
            </div>
        {/each}
    </div>
</div>

{#if comments}
    <CommentBlock push={push} req="scroll"/>
{/if}

<style lang="scss">
	.table {
		border-radius:  var(--innerRaidus);
		margin-bottom:  var(--contentPaddingY);

		overflow:   scroll hidden;
		position:   relative;
		display:    grid;

		scrollbar-width:            thin;
		-webkit-overflow-scrolling: touch;

		scroll-snap-align:  start;
		scroll-snap-type:   x mandatory;
		scroll-snap-stop:   always;
		scroll-behavior:    smooth;

		&::-webkit-scrollbar {
			height: 		var(--innerRaidus);}
		&::-webkit-scrollbar-track {
			background: 	var(--backgroundAccent2);}
		&::-webkit-scrollbar-thumb {
			border-radius: 	2px;
			border: 		1px solid var(--background);
			background: 	var(--accent1);}
		&::-webkit-scrollbar-thumb:hover {
			background: 	var(--darkAccent1);}

		div {
            gap:        var(--imageSpacing);
            display:    inline-flex;

	        .col {
		        background-color:   var(--backgroundAccent2);
		        border-radius:      var(--innerRaidus);

		        overflow:   hidden;
		        height:     400px;
		        width:      max-content;}}
    }
</style>