<script>
    import SanityImage from '../../imageBuilder.svelte'
    export let push
</script>

<div class="dynamicVertical">
    {#each push as row}
        <div class="row" style="--yWid: {push.length}">
            {#each row as image}
                <div class="col">
                    <SanityImage image={image}/>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
	.dynamicVertical {
		margin-bottom: var(--contentPaddingY);

		column-count:   2;
		gap:            var(--imageSpacing);
		display:        flex;

		.row {
			width:  50%;
			gap:    var(--imageSpacing);

			display:        flex;
			flex-direction: column;

			.col {
				display:            contents;
				background-color:   var(--backgroundAccent2);

				overflow:       hidden;
				border-radius:  var(--innerRaidus);
            }
        }
    }
</style>