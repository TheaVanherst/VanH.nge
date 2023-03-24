<script>
    import { scrollIntoView }   from "$lib/controllers/accessibilityController.js";

    export let title = "Contents"

    let hov = false;
</script>

<div class="container {!hov ? 'green' : 'orange'}">
	<div
		class="title"
		on:mouseenter={() => hov = true	}
		on:mouseleave={() => hov = false}
		on:click|preventDefault={scrollIntoView}>
		<p>
			{title}
		</p>
	</div>

	<div class="contents">
		<slot/>
	</div>
</div>

<style lang="scss">
	@mixin cgm($colour){ border: 1px solid $colour;}

	.container {
		margin-bottom:  var(--containerPadding);

		break-inside:   avoid-column;
		background:		var(--backgroundTrans);

		&.green {   @include cgm(var(--accent1));}
		&.orange {  @include cgm(var(--darkAccent3));}
	}

	.title {
		cursor:			alias;
		width:      	100%;
		background: 	var(--accent1);

		p {
			font-size: 		100%;
			font-family: 	"Arimo", sans-serif;
			color: 			var(--textColourInvert);
			font-weight: 	800;

			padding: 		10px 15px 10px 15px;}

		&:hover {
			background: 	var(--darkAccent3);}
	}

	.contents {
		padding: 		calc(var(--containerPadding) - 5px);
	}
</style>