<script>
    import SanityImage from '../../../sanityImage.svelte'
    export let push
    let randomId = Math.floor(Math.random() * 999);

    const scrollIntoView = async ({target}) => {
        document.querySelector("#a"+randomId).scrollLeft =
            document.querySelector(target.getAttribute('href')).offsetLeft;
    }

    let x = 0,
        containerWidth;

    $: if ((x % containerWidth) < 15) {
        document.querySelector(".active")?.classList.remove("active")
        document.querySelector("#a"+randomId+"-"+(Math.round(x / containerWidth))).classList.add("active");
    }
</script>

<div class="carousel" id="a{randomId}"
     bind:clientWidth={containerWidth}
     on:scroll={({target}) => {x = target.scrollLeft}}>
    <div class="container" style="--yWid: {push.length}">

        {#each push as image, e}
            <div class="{e === 0 ? 'image active' : 'image'}" id="a{randomId}-{e}">
                <label  class="next"
                        on:click|preventDefault={scrollIntoView}
                        href="#a{randomId}-{(e === push.length - 1 ? 0 : e + 1)}">
                    &#x203a;
                </label>
                <label  class="prev"
                        on:click|preventDefault={scrollIntoView}
                        href="#a{randomId}-{(e !== 0 ? e - 1 : push.length - 1)}">
                    &#x2039;
                </label>
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

		scroll-snap-align:  start;
		scroll-snap-type:   x mandatory;
		scroll-snap-stop:   always;
		scroll-behavior:    smooth;

        background: var(--backgroundAccent2);

		.container {
			vertical-align: bottom;
			height:     350px;
			width:      calc(100% * var(--yWid));
			display:    inline-flex;

			.image {
				scroll-behavior:    smooth;
				scroll-snap-align:  start;

				height:     350px;
				width:      100%;
				max-width:  inherit;

				display:    inline-block;
				position:   relative;
				overflow:   hidden;
                opacity:    0.1;
				transition: opacity .6s;

				&.active {
					opacity: 1 !important;
				}
            }
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