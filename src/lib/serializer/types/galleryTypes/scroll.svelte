<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    export let push;
</script>

<div class="table">
    <div class="row">
        {#each push as image}
            <div class="col">
                <SanityImage image={image}/>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
	.table {
		margin-bottom:  var(--contentPaddingY);

		position:   relative;

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

		.row {
            gap:        var(--imageSpacing);
            display:    block;
            overflow:   scroll;
            position:   relative;

            white-space: nowrap;

	        .col {
		        background-color:   var(--backgroundAccent2);

                display: inline-block;
		        overflow:   hidden;
		        height:     400px;
		        width:      100%;
            }
        }
    }
</style>