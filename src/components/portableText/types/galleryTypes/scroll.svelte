<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
</script>

<div class="table">
    <div>
        {#each push as image}
            <div class="col">
                <SanityImage image={image}/>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
	.table {
		border-radius:  var(--innerRaidus);
		margin-bottom:  var(--contentPaddingY);

		overflow:   scroll hidden;
		position:   relative;
		display: grid;

		div {
            gap:        var(--imageSpacing);
            display:    inline-flex;

	        .col {
		        background-color:   var(--backgroundAccent2);
		        border-radius:      var(--innerRaidus);
		        overflow:           hidden;
		        vertical-align:     bottom;

		        height:     400px;
		        width:      max-content;

		        display:    inline-block;
		        position:   relative;
		        overflow:   hidden;} }
    }
</style>