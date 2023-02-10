
<span class="loader"></span>

<style lang="scss">
	.loader {
		color:          #fff;
		font-family: 	'Oswald', sans-serif;
		font-weight:    bold;

		font-size:      32px;
        line-height:    32px;
		opacity:        1;

		&:before, &:after {
			display: inline-block;
		}
		&:before {
			content:    "{";
			animation:  pulse 0.4s alternate infinite ease-in-out;
		}
		&:after {
			content:    "}";
			animation:  pulse 0.4s 0.3s alternate infinite ease-in-out;
		}
	}

	@keyframes pulse {
		to {
			transform:  scale(0.8);
			opacity:    0.5;
		}
	}
</style>