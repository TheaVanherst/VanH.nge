<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    import CommentBlock from "$lib/serializer/types/galleryTypes/citationBlock.svelte";
    export let push, comments;
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

{#if comments}
    <CommentBlock push={push} req="dynamicVertical"/>
{/if}

<style lang="scss">
	.dynamicVertical {
		margin-bottom: var(--contentPaddingY);

		column-count:   2;
		gap:            var(--imageSpacing);
		display:        flex;

		.row {
			width:  50%;
			gap:    var(--imageSpacing);

			display:        grid;
			flex-direction: column;

			.col {
				display:    flex;
				overflow:   hidden;
				background: var(--backgroundAccent2);
				border-radius: var(--innerRaidus);
            }
        }
    }
</style>