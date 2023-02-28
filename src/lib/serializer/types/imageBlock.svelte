<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    import CommentBlock from "$lib/serializer/types/galleryTypes/citationBlock.svelte";

    export let portableText = "";

    let comments = [[
        undefined,
        portableText.value.alt,
        portableText.value.citation,
        portableText.value.citeURL
    ]];
</script>

<div class="solo">
    <SanityImage image={portableText.value}/>
</div>

{#if comments[1]}
    <CommentBlock push={comments}/>
{/if}

<style lang="scss">
    .solo {
        border-radius: var(--innerRaidus);
        overflow: hidden;
        display: block;

        &:not(:last-child) {
	         margin-bottom: 10px;
        }
    }
</style>