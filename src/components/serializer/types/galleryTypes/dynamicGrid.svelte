<script>
    import SanityImage from '../../imageBuilder.svelte'
    import CommentBlock from "$components/serializer/types/galleryTypes/citationBlock.svelte";
    export let push, comments;
</script>

<div class="dynamicGrid">
    {#each push as row}
        <div class="row">
            {#each row as image}
                <div class="col">
                    <SanityImage image={image}/>
                </div>
            {/each}
        </div>
    {/each}
</div>

{#if comments}
    <CommentBlock push={push} req="dynamicGrid"/>
{/if}

<style lang="scss">
	.dynamicGrid {
		margin-bottom:  var(--contentPaddingY);
	}

	.row {
		display: inline-flex;
		gap: var(--imageSpacing);
		vertical-align: bottom;

		&:not(:last-of-type) {
			padding-bottom: var(--imageSpacing);}

		.col {
			background-color:   var(--backgroundAccent2);
			border-radius:      var(--innerRaidus);
			overflow:           hidden;

			&:not(:only-child) {
				max-width: 60%;
			}
		}
	}
</style>