<script>
    import Container from "$components/generic/container.svelte";
</script>

<Container>
    <notice>
        <div class="warning">
            <div>
                <p>T</p><p>E</p><p>S</p><p>T</p><p>I</p><p>N</p><p>G</p>
            </div>
        </div>
        <div class="body">
            <p class="title">
                Please note:
            </p>
            <p>
                This site is currently in development - please do not take what you see as a true representation of the final site.
            </p>
        </div>
    </notice>
</Container>
<Container>
    <cite>
        lol xd
    </cite>
</Container>


<style lang="scss">
	notice {
        display:    block;
        border:     1px solid var(--accent3);
        font-size:  12px;
		margin:     -5px;

		.warning {
			$textColour: #ffc402;

			padding: 8px 7px 5px;

			border-bottom:  1px solid var(--accent3);
			background-image:
					repeating-linear-gradient( 45deg,
							transparent,        transparent 1rem,
							$textColour 1rem,   $textColour 2rem);
			background-size: 200% 200%;
			animation: barberpole 10s linear infinite;

            div {
	            font-family:    'Press Start 2P', cursive;
	            font-weight:    bolder;
	            color:          black;
	            margin:         0 auto;
	            width:          max-content;

	            p {
                    font-size:      20px;
		            display:        inline-block;
		            width:          max-content;

		            animation: wave-text 1s ease-in-out infinite;

		            text-wrap:      none;
		            text-shadow:
				            -1px -1px 0 $textColour, 0px -1px 0 $textColour, 1px -1px 0 $textColour,
				            -1px  1px 0 $textColour, 0px  1px 0 $textColour, 1px  1px 0 $textColour;
	            }

	            @for $i from 1 through 7 {
		            p:nth-child(#{$i}) {
			            animation-delay:  $i * 0.1s;
		            }
	            }
            }
		}

        .body {
            padding: 10px;

            > p {
	            color:  var(--accent1);
            }

	        .title {
		        width:              max-content;
		        text-decoration:    underline;
		        display:            block;
                padding-bottom:     10px;
	        }
        }
    }

	@keyframes barberpole {
		0% {background-position: 100% 100%;}
	}
	@keyframes wave-text{
		50%{    transform: translateY(0);}
		60%{    transform: translateY(-5px);}
		70%{   transform: translateY(0);}
	}

</style>
