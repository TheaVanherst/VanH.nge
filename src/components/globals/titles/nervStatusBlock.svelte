<script>
    // TODO: redo this

	export let
		title = 	undefined,
        substitle = undefined,
		position = "top",
		external = 	undefined;

    export let
        padding = 		"0 0 0 0",
		background = 	false,
		transparency = 	false,
		floatRight = 	false;
 </script>

<div
	class="statusBlock"
	class:background={background}
	class:transparency={transparency}
	class:right={floatRight}
	style="padding: {padding}">

	{#if external && position === "top"}
		<div class="citation">
			{external}
		</div>
	{/if}

	<div class="wrapper">
		<div class="padding">
			{#if substitle}
				<p class="lesser">
					{substitle}
				</p>
			{/if}
			{#if title}
				<p class="upper">
					{title}
				</p>
			{/if}
			<slot/>
		</div>
	</div>

	{#if external && position === "bottom"}
		<div class="citation">
			{external}
		</div>
	{/if}
</div>

<style lang="scss">
	.statusBlock {
		filter: 	drop-shadow(0px 0px 1px var(--darkAccent3));
		display: 	block;

		&.background {
			background: var(--backgroundTrans);}
		&.transparency {
			opacity:	0.8;}
		&.right {
			float: right;}
	}

	.wrapper {
		border-radius: 	8px;
		border: 		1px solid var(--accent3);

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