<script>

</script>

<nav>
    <notice>
        <div class="warning">
            <div><p>T</p><p>E</p><p>S</p><p>T</p><p>I</p><p>N</p><p>G</p></div>
        </div>
        <n>Please note:</n>
        <p>This site is currently in development - please do not take what you see as a true representation of the final site.</p>
    </notice>
</nav>
<nav>
    <p>
        lol xd
    </p>
</nav>


<style lang="scss">
	nav {
        font-size:  14px;

        max-width:  100%;
		padding:    var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);

		&:not(:first-child),
        & > p:not(:first-child) {
            margin-top:     var(--containerPadding);
        }
	}

	notice {
        display: block;
        border: 1px solid var(--accent3);
		margin: -5px;

		.warning {
			$textColour: #ffc402;

			padding: 8px 7px 5px;

			border-bottom: 1px solid var(--accent3);
			background-image:
					repeating-linear-gradient( 45deg,
							transparent,        transparent 1rem,
							$textColour 1rem,   $textColour 2rem);
			background-size: 200% 200%;
			animation: barberpole 10s linear infinite;

            div {
	            font:           20px 'Press Start 2P', cursive;
	            line-height:    100%;
	            font-weight:    bolder;
	            color:          black;
	            margin:         0 auto;
	            width:          max-content;

	            p {
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

		> n {
			width:              max-content;
            text-decoration:    underline;
			display:            block;
		}

        > *:not(div) {
            color: var(--accent1);

	        padding: 0px 10px 10px 10px;
	        &:not(:last-child) {
		        padding: 7px 10px 7px 10px;
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
