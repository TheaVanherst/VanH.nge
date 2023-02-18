<script>
    import SanityImage from '../../imageBuilder.svelte'
    import CommentBlock from "$components/serializer/types/galleryTypes/citationBlock.svelte";
    export let push, comments;
</script>

<div class="grid">
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
    <CommentBlock push={push} req="grid"/>
{/if}

<style lang="scss">
	.grid {
	    margin-bottom:  var(--contentPaddingY);

        .row {
	        vertical-align: bottom;
	        display: inline-flex;

	        width: 100%;
	        gap: var(--imageSpacing);

	        &:not(:last-of-type) {
		        padding: 0 0 var(--imageSpacing) 0;}

	        .col {
		        background-color:   var(--backgroundAccent2);
		        border-radius:      var(--innerRaidus);

		        overflow: hidden;
		        width:    50%;

		        &:only-child {
			        width:    inherit;}}}}
</style>