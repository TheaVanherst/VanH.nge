<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
    let randomId = Math.floor(Math.random() * 999);
</script>

<div class="carousel">
    <div style="--yWid: {push.length}">
        {#each push as image, e}
            <div class="col">
                {#if e < push.length - 1}
                    <label for="{randomId}-{e + 1}" class="next">
                        &#x203a;</label>{/if}
                {#if e > 0}
                    <label for="{randomId}-{e - 1}" class="prev">
                        &#x2039;</label>{/if}

                <input type="radio" name="radio" id="{randomId}-{e}"/>
                <SanityImage image={image}/>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
	.carousel {
		margin-bottom:  var(--contentPaddingY);
		border-radius:  var(--outerRadius);
		overflow:       scroll hidden;
		-webkit-overflow-scrolling: touch;

		width:      calc(100% - 2px);
		position:   relative;

		scrollbar-width:    thin;

		scroll-snap-type:   x mandatory;
		scroll-behavior:    smooth;
        background: var(--backgroundAccent2);

		div {
			vertical-align: bottom;
			height:     350px;
			width:      calc(100% * var(--yWid));
			display:    inline-flex;

			.col {
				scroll-behavior:    smooth;
				scroll-snap-align:  start;

				height:     350px;
				width:      100%;
				max-width:  inherit;

				display:    inline-block;
				position:   relative;
				overflow:   hidden;}
        }
	}

	input {
        position:       absolute;
        opacity:        0;
        margin-top:    -25px;
		pointer-events: none;}

	label {
        display: block;
        position: absolute;

		padding:    30px 10px;
		top:        50%;
		z-index:    100;
		transform:  translateY(-50%);
		background: rgba(0, 0, 0, 0.50);
		transition: background .2s ease-out;

		&.next {
            right:  0;
            border-radius:  5px 0 0 5px;}
		&.prev {
			left:   0;
			border-radius:  0 5px 5px 0;}
        &:hover {
	        background: rgba(0, 0, 0, 1);
        }
	}
</style>