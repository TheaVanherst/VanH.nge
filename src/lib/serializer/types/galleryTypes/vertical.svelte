<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    export let push;
</script>

<div class="table vertical">
    {#each push as image}
        <div>
            <SanityImage image={image}/>
        </div>
    {/each}
</div>

<style lang="scss">
	.table {
		margin-bottom:  var(--contentPaddingY);

        > div {
	        overflow:       hidden;

            &:not(:last-of-type){
	            margin-bottom:  var(--imageSpacing);
            }
        }
    }
</style>