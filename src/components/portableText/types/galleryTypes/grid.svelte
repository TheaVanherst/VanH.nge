<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
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

<style lang="scss">
	.grid {
	    border-radius:  var(--outerRadius);
	    margin-bottom:  var(--contentPaddingY);
        overflow:       hidden;

        .row {
	        vertical-align: bottom;
            width:    100%;
            display:  inline-flex;
            gap:      var(--imageSpacing);}
        .row:not(:last-of-type) {
            padding:  0 0 var(--imageSpacing) 0;}

        .col {
	        background-color:   var(--backgroundAccent2);
	        border-radius:      var(--innerRaidus);
	        overflow:           hidden;
            display:  inline-block;
            width:    50%;}
        .col:only-child {
            width:    inherit;}
  }
</style>