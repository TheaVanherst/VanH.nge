<script>
	export let
		colour = 	"green",
		size =		"large",
		borders = 	true;
</script>

<div
	class="header {colour}"
	class:borders={borders}>
	<div class="title {size}">
		<p>
			<slot/>
		</p>
	</div>
</div>

<style lang="scss">
	div.header {
		margin-bottom:  var(--containerPadding);
		width:          min-content;
		white-space:    nowrap;

		&.borders {
			border-style: solid;
			border-width: 0 10px;

			> .title {
				white-space: nowrap;
				margin:     0 var(--containerPadding);} }

		@mixin cgm($colour){
			& {         border-color:   $colour;}
			> .bar {    background:     $colour;}
			> .title {  border-color:   $colour;
				> p {   color:          $colour;}}}
		&.green {   @include cgm(var(--accent1));}
		&.yellow {  @include cgm(var(--accent3));}
		&.orange {  @include cgm(var(--darkAccent3));}
		&.red {     @include cgm(var(--darkAccent4));}

		> .title {
			&.small > p {   font-size:  24px;}
			&.medium > p {  font-size:  30px;}
			&.large > p {   font-size:  36px;}

			background: var(--backgroundTrans);

			border-style: solid;
			border-width: 1px 3px;

			> p {
				padding:    10px 5px;
				transform:      scale(1, 1.5);
				font-weight:    700;
			}
		}
	}
</style>