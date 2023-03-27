<script>
	// TODO: redo this

    export let
		colour = 		"orange",
		tabColour =  	"orange",
		textColour = 	"orange";
    export let
		title = 		"NERV",
		subtitle = 		`CODE ${Math.floor(Math.random() * 404)}:`;

    export let
		warning = false;
</script>

<div class="container {colour}">

	<div class="tab">
		<div class="tilt">
			<p class="def {tabColour}">
				{title}
			</p>
		</div>
		<p class="caption {tabColour}">
			{subtitle}
		</p>
	</div>

	<div class="wrapper {textColour}">
		<slot/>
	</div>

</div>

<style lang="scss">
	.container {
		display: grid;

		@mixin cgm($colour){
			.wrapper {
				border: 	1px solid $colour;}
			.tab {
				border-left: 	1px solid $colour;
				.tilt {
					border-right:	3px solid $colour;
					border-top:     1px solid $colour;}}}

		&.green {   @include cgm(var(--accent1));}
		&.yellow {  @include cgm(var(--accent3));}
		&.orange {  @include cgm(var(--darkAccent3));}
		&.red {     @include cgm(var(--darkAccent4));}

		.wrapper {
			padding-top: 	15px;
			background:		var(--backgroundTrans);
			margin-bottom:  var(--containerPadding);

			font-size:      10px;
			font-family:    Lucida Console, sans-serif;
		}
	}

	.tab {
		overflow:       hidden;
		white-space:    nowrap;
		display:        inline-flex;
		margin-bottom: -24px;

		.def {
			font-size:      36px;
			font-weight:    700;

			@mixin cgm($colour){
				color: $colour;};

			&.green {   @include cgm(var(--accent1));}
			&.yellow {  @include cgm(var(--accent3));}
			&.orange {  @include cgm(var(--darkAccent3));}
			&.red {     @include cgm(var(--darkAccent4));}
		}

		.caption {
			padding:    5px 7px 5px 0;
			margin:     auto auto 0 -5px;

			background: var(--background);
			position:   relative;

			text-transform: uppercase;
			font-weight:    700;}

		.tilt {
			background: var(--background);
			width:     	min-content;
			padding:    0 9px 0 6px;
			transform:  skew(14deg);

			p {
				transform:  	skew(-14deg) scale(1, 0.9);
				padding:    	0 0 0 3px;
				text-transform: uppercase;
			}
		}
	}
</style>