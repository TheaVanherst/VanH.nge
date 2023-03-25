<script>
	export let
		tiny = false,
		small = false,
		medium = false,
		large = false;

    export let
		colour = "green",
		offset = "0px";
</script>


<div class="lineScale {colour}" style="--xPos:{offset + 'px'}">  <!-- scroll offset calc -->
	{#if tiny}		<div class="tiny"></div>	{/if}
	{#if small}		<div class="small"></div>	{/if}
	{#if medium}	<div class="medium"></div>	{/if}
	{#if large}		<div class="large"></div>	{/if}
</div>

<style lang="scss">
	div.lineScale {
		position: 	relative;
		height: 	15px;

		> * {
			width:      100%;
			position:   absolute;
			background-position-x: 	var(--xPos);}

		@mixin cgm($colour, $lineWidth, $width){
			$offset: 			$width - $lineWidth;
			background-image: 	repeating-linear-gradient( 90deg,
				transparent 0px, transparent $offset,
				$colour $offset, $colour $width);}

		@mixin bsm($colour){
			.tiny {		@include cgm($colour, 1px, 5px);}
			.small {	@include cgm($colour, 1px, 15px);}
			.medium {	@include cgm($colour, 1px, 30px);}
			.large {	@include cgm($colour, 3px, 60px);}}

		&.green {    @include bsm(var(--accent1));}
		&.yellow {   @include bsm(var(--accent3));}
		&.orange {   @include bsm(var(--darkAccent3));}
		&.red {      @include bsm(var(--darkAccent4));}

		.tiny {		height:     5px;
					margin:     5px 0;}
		.small {	height:     7px;
					margin:     4px 0;}
		.medium {	height:     9px;
					margin:     3px 0;}
		.large {	height:     13px;
					margin:     1px 0 1px 1px;}
	}
</style>