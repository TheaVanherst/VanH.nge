<script>
	export let
		colour = 	"green",
		borders = 	true;
</script>


<div
	class="wrapper {colour}"
	class:borders={borders}>
	<div class="header">
		<div class="title {borders}">
			<p>
				<slot/>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@mixin cgm($colour){
		&.borders {
			&:before {	background: 	$colour;}
			&:after {	background: 	$colour;}}
		.header {
						border:			1px solid $colour;}
		.title {  		border-color:   $colour;
			> p {   	color:          $colour;}}}

	.green {   @include cgm(var(--accent1));}
	.yellow {  @include cgm(var(--accent3));}
	.orange {  @include cgm(var(--darkAccent3));}
	.red {     @include cgm(var(--darkAccent4));}

	.wrapper {
		margin-bottom:  var(--containerPadding);}

	.borders {
		display: flex;
		position: relative;

		@mixin sle(){
			content: 		"";
			width: 			10px;
			height: 		auto;
			border-radius: 	5px;}

		&:before {	margin-right: 	10px;
					@include sle();}
		&:after {	margin-left: 	10px;
					@include sle();}
	}

	.header {
		width:          min-content;
		white-space:    nowrap;
		border-radius: 	5px;
		overflow: 		hidden;

		.title {
			background: var(--backgroundTrans);

			> p {
				padding:    	10px 5px;
				font-size:  	32px;
				transform:      scale(1, 1.5);
				font-weight:    700;}}}
</style>