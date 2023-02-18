<script>
    import SanityImage from '../../imageBuilder.svelte'
    import CommentBlock from "$components/serializer/types/galleryTypes/citationBlock.svelte";
    export let push, comments;
</script>

<div class="table vertical">
    {#each push as image}
        <div>
            <SanityImage image={image}/>
        </div>
    {/each}
</div>

{#if comments}
    <CommentBlock push={push} req="vertical"/>
{/if}

<style lang="scss">
	.table {
		margin-bottom:  var(--contentPaddingY);

        > div {
	        border-radius:  var(--innerRaidus);
	        overflow:       hidden;

            &:not(:last-of-type){
	            margin-bottom:  var(--imageSpacing);
            }
        }
    }
</style>