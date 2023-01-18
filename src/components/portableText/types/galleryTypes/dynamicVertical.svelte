<script>
    import SanityImage from '../../../sanityImage.svelte'
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
		border-radius: var(--outerRadius);
		margin-bottom: var(--contentPaddingY);
        overflow: hidden;

		display: flex;
		column-count: 2;
		gap: 5px;

		.row {
			display: flex;
			gap: 5px;
			width: 50%;
			flex-direction: column;}
		.col {
			display: contents;
			background-color: var(--backgroundAccent2);
			border-radius: var(--innerRaidus);
			overflow: hidden;}
	}

</style>