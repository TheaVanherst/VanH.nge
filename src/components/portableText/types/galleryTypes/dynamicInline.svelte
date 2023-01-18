<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
</script>

<div class="dynamicInline" style="--yWid: {push.length}">
    {#each push as image}
        <div class="col">
            <SanityImage image={image}/>
        </div>
    {/each}
</div>

<style lang="scss">
	.dynamicInline {
		border-radius:  var(--outerRadius);
		margin-bottom:  var(--contentPaddingY);
		overflow:       hidden;
		vertical-align: bottom;

		display:    inline-flex;
		gap:        var(--imageSpacing);

		.col {
			max-width:  calc(110% / var(--yWid));
            min-width:  calc(50% / var(--yWid));
			background-color:   var(--backgroundAccent2);
			border-radius:      var(--innerRaidus);
			overflow:           hidden;}
	}
</style>