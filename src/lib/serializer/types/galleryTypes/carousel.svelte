<script>
    import SanityImage from '$lib/serializer/imageBuilder.svelte'
    //TODO: THIS ALL NEEDS RE-DOING BECAUSE IT'S REALLY BAD

    let randomId = Math.floor(Math.random() * 999);

    const scrollIntoView = async ({target}) => {
        document.querySelector("#a"+randomId).scrollLeft =
            document.querySelector(target.getAttribute('href')).offsetLeft;
    }

    let x = 0, containerWidth = 0;

    $: if ((x % containerWidth) < 15) {
        document.querySelector(".active")?.classList.remove("active")
        document.querySelector("#a"+randomId+"-"+(Math.round(x / containerWidth))).classList.add("active");
    }

    export let push;
</script>

<div class="carousel" id="a{randomId}"
     bind:clientWidth={containerWidth}
     on:scroll={({target}) => {x = target.scrollLeft}}>
    <div class="row" style="--yWid: {push.length}">

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

                <container>
                    <SanityImage image={image}/>
                </container>

            </div>
        {/each}
    </div>
</div>

<style lang="scss">
	.carousel {
		overflow:       scroll hidden;
		background:     var(--backgroundAccent2);

		scrollbar-width:    thin;
		-webkit-overflow-scrolling: touch;

		scroll-snap-align:  start;
		scroll-snap-type:   x mandatory;
		scroll-snap-stop:   always;
		scroll-behavior:    smooth;

		&::-webkit-scrollbar {
			height: 		var(--innerRaidus);}
		&::-webkit-scrollbar-track {
			background: 	var(--backgroundAccent2);}
		&::-webkit-scrollbar-thumb {
			border-radius: 	2px;
			border: 		1px solid var(--background);
			background: 	var(--accent1);}
		&::-webkit-scrollbar-thumb:hover {
			background: 	var(--darkAccent1);}
    }

    .row {
	    vertical-align: bottom;
	    display:        inline-flex;
	    width:          calc(100% * var(--yWid));

	    .image {
		    scroll-behavior:    smooth;
		    scroll-snap-align:  start;
		    width:      100%;
		    position:   relative;

		    label {
			    padding:    30px 10px;
			    top:        50%;

			    position: absolute;
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

		    container {
			    transition:         opacity .6s, filter .4s;
			    -webkit-transition: opacity .6s, filter .4s;
			    -moz-transition:    opacity .6s, filter .4s;
			    -ms-transition:     opacity .6s, filter .4s;
			    -o-transition:      opacity .6s, filter .4s;

			    opacity:    0.6;
			    filter:     blur(var(--imageBlurring));
            }

		    &.active {
			    container {
				    filter:     none;
				    opacity:    1 !important;
                }
            }
        }
    }
</style>