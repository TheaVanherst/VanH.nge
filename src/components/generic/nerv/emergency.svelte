<script>
	export let
        mirror = 	true,
		trim = 		true;

    export let
		warning = "red",
        containerColour = "red",
		textColour = "red";

    export let
		upper = "EMERGENCY",
    	lesser = undefined;

    export let
		flashing = false;
</script>

<div
	class:trim={trim}
	class:flashing={flashing}
	class="container {containerColour} r{warning}">

	<div class="emergency">
		<div class="bars"></div>
		<div class="bars"></div>
	</div>

	<div class="emergencyWrapper">
		<div>
			<p class="def {textColour}">
				{upper}
			</p>
		</div>
	</div>

	<div class="emergency">
		<div class="bars"></div>
		<div class="bars"></div>
	</div>
</div>

<style lang="scss">
	.def {
		text-transform: uppercase;
		font-size:      36px;
		line-height:    100%;

		font-weight:    700;
	}

	@mixin cgm($colour){	border: 1px solid $colour;}

	@mixin age($colour, $angle){
		background-image:
			repeating-linear-gradient( $angle,
				$colour 0.00rem,        $colour 0.75rem,
				transparent 0.75rem,    transparent 1.50rem);}
	@mixin chm($colour){
		.bars:first-child { @include age($colour, 45deg);}
		.bars:last-child { 	@include age($colour, -45deg);}}

	.container {
		break-inside:   avoid-column;
		background:		var(--backgroundTrans);
		margin-bottom:  var(--containerPadding);

		&.trim {
			&.green {   @include cgm(var(--accent1));}
			&.yellow {  @include cgm(var(--accent3));}
			&.orange {  @include cgm(var(--darkAccent3));}
			&.red {     @include cgm(var(--darkAccent4));}
		}

		&.rgreen {   @include chm(var(--accent1));}
		&.ryellow {  @include chm(var(--accent3));}
		&.rorange {  @include chm(var(--darkAccent3));}
		&.rred {     @include chm(var(--darkAccent4));}
	}

	div.emergency {
		display: 	flex;
		gap: 		0;

		&.inline {
			padding-bottom: var(--containerPadding);

			> *:first-child {
				margin-right: var(--containerPadding);}

			.bars {
				display: flex;
				height: auto;
				width: 100%;}}

		.bars {
			height: 10px;
			width:  50%;

			background-size: 150% 150%;
			&:first-child {    background-position: right;}
			&:last-child {     background-position: left;} }

		&.flashing {
			animation: flashing 0.5s linear infinite;}
	}

</style>