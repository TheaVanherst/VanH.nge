<script>
    // TODO: redo this

	export let
		upper = 	undefined,
        lesser = 	undefined;

    export let
		external = 	undefined;

    export let
        padding = 	"0 0 0 0";
 </script>

<div
	class="statusBlock"
	style="padding: {padding}">

	{#if external}
		<div class="citation">
			{external}
		</div>
	{/if}

	<div class="wrapper">
		<div class="padding">
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
	</div>
</div>

<style lang="scss">
	.statusBlock {
		filter: 	drop-shadow(0px 0px 1px var(--darkAccent3));
		display: 	block;
		opacity:	0.8;
	}

	.wrapper {
		border-radius: 	8px;
		border: 		1px solid var(--accent3);
		border-right: 	2px solid var(--accent3);
		border-left: 	2px solid var(--accent3);

		width: min-content;

		.padding {
			margin: 	3px 5px 5px 5px;
			padding: 	0 0 3px 0;
		}

		p {
			font-weight: 	700;
			color: 			var(--accent3);

			display: 		table-row;
			white-space: 	nowrap;

			&.upper {
				transform: 		scale(1, 1.5);
				font-size:      30px;
			}
		}
	}

	.citation {
		padding: 		2px;
		color: 			var(--accent3);
		font-weight:    800;
	}
</style>