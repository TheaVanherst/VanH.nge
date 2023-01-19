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
		gap:            var(--imageSpacing);

		overflow:           hidden;
		vertical-align:     bottom;
		justify-content:    center;
        display:            flex;

        label {
	        min-width:  calc(100% / var(--yWid));
	        max-width:  calc(100% / var(--yWid));
	        overflow:   hidden;
	        transition: min-width .4s, max-width .5s, opacity .5s;

	        .col {
		        background-color:   var(--backgroundAccent1);
		        border-radius:      var(--innerRaidus);

		        filter: blur(var(--imageBlurring));

		        transition:         opacity .6s, filter .4s, scale 2s ease-out;
		        -webkit-transition: opacity .6s, filter .4s, scale 2s ease-out;
		        -moz-transition:    opacity .6s, filter .4s, scale 2s ease-out;
		        -ms-transition:     opacity .6s, filter .4s, scale 2s ease-out;
		        -o-transition:      opacity .6s, filter .4s, scale 2s ease-out;

		        display:    inline-flex;
		        width:      100%;
		        height:     100%;}}

		input {
			position: absolute;
			opacity: 0;

			&:checked {
				+ label {
					min-width:  calc(100% - (12.5% * var(--yWid)));
					max-width:  calc(100% - (12.5% * var(--yWid)));
					.col {
						opacity:    1;
						filter:     none}

					opacity: 1;}}
			&:not(:checked) {
				+ label {
					min-width:  100px;
                    .col {
	                    opacity:    0.2;
						scale:      1.025;}

					&:hover {
						min-width:  30.0%;
						max-width:  40.0%;
						.col {
							opacity:    0.6;
							filter:     none}}}}}}
</style>