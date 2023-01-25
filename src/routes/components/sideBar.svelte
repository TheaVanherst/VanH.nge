<script>

</script>

<nav>
    <notice>
        <div class="warning">
            <p>TESTING</p>
        </div>
        <p>This is just a testing site. Please do not take what you see as a true representation of the final site.</p>
    </notice>
    <p>
        test
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

        > p {
           padding-top:     var(--containerPadding);
        }
	}

	notice {
        display: block;
        border: 1px solid var(--accent3);

		.warning {
			$textColour: #ffc402;

			padding: 7px 5px 3px;
			border-bottom: 1px solid var(--accent3);
			background-image:
					repeating-linear-gradient( 45deg,
							transparent,        transparent 1rem,
							$textColour 1rem,   $textColour 2rem);
			background-size: 200% 200%;
			animation: barberpole 10s linear infinite;

			p {
				font:           20px 'Press Start 2P', cursive;
				font-weight:    bolder;
				color:          black;

				margin:         0 auto;
				width:          max-content;

				text-wrap:      none;
				text-shadow:
						-1px -1px 0 $textColour, 0px -1px 0 $textColour, 1px -1px 0 $textColour,
						-1px  1px 0 $textColour, 0px  1px 0 $textColour, 1px  1px 0 $textColour;
			}
		}

        > p {
            color: var(--accent1);
            padding: 10px 10px 10px 10px;
        }
    }

	@keyframes barberpole {
		0% {
			background-position: 100% 100%;}
	}
</style>
