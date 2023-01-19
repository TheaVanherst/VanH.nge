<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
    let randomId = Math.floor(Math.random() * 999);
</script>

<div class="dynamicInline" style="--yWid:{push.length}">
    {#each push as image, e}
        <input type="radio" name="radio-{randomId}" checked={e === 0} id="{randomId}-{e}"/>

        <label for="{randomId}-{e}">
            <div class="col">
                <SanityImage image={image}/>
            </div>
        </label>
    {/each}
</div>

<style lang="scss">
	.dynamicInline {
		border-radius:  var(--outerRadius);
		margin-bottom:  var(--contentPaddingY);

		overflow:           hidden;
		vertical-align:     bottom;
		justify-content:    center;

        display: flex;
		gap:        var(--imageSpacing);

		.col {
			background-color:   var(--backgroundAccent1);
			border-radius:      var(--innerRaidus);
			display: inline-flex;

            width:100%;
            height: 100%;
        }

        label {
	        min-width:  calc(100% / var(--yWid));
	        max-width:  calc(100% / var(--yWid));
	        overflow:   hidden;
	        transition: min-width .4s, max-width .5s, opacity .5s;

	        &:active {
                .col {
	                position: scale(2);
                }
	        }

            &:hover {
	            opacity: 0.8;}}

		input {
			position: absolute;
			opacity: 0;

			&:checked {
				+ label {
					min-width:  calc(100% - (12.5% * var(--yWid)));
					max-width:  calc(100% - (12.5% * var(--yWid)));
					opacity: 1;}}
			&:not(:checked) {
				+ label {
					min-width: 15%;
					opacity: 0.2;
					&:hover {
						min-width: 30.0%;
						max-width: 40.0%;
						opacity: 0.6;}}}
		}
	}
</style>