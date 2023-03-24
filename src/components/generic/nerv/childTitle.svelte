<script>
    export let
        upper = 	undefined,
        lesser = 	undefined;

    export let
        padding = 	"0 0 0 0";
</script>

<div
	class="statusBlock"
	style="padding: {padding}">

	{#if lesser}
		<p class="lesser">
			{lesser}
		</p>
	{/if}
	{#if upper}
		<p class="upper">
			{upper}
		</p>
	{/if}
</div>

<style lang="scss">
	.statusBlock {
		width: 		min-content;
		position: 	relative;
		z-index: 	1;

		p {
			font-weight: 	700;
			display: 		table-row;
			white-space: 	nowrap;

			font-size:      20px;

			@mixin cgm($colour){
				color: 		$colour;
				filter: 	drop-shadow(0px 0px 1.5px $colour);}

			&.lesser {	@include cgm(var(--darkAccent4));}
			&.upper {	@include cgm(var(--accent1));}
		}
	}
</style>