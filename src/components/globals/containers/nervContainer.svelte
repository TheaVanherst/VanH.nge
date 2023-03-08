<script>
    export let
		colour = "green",
		tabColour =  "green",
		stripeColour =   "orange";

    export let
		title = "NERV:",
		subtitle = "CODE " + Math.floor(Math.random() * 404),
    	warningString = "ACCESS RESTRICTED : NON NERV PERSONNEL";

    export let
		warning = false,
		barBool = false;
</script>

<div class={"nervWrapper " + colour}>

	<div class="tab">
		<div class="tilt">
			<p class="def tabName {tabColour}">
				{title}
			</p>
		</div>
		<p class="caption {tabColour}">
			{subtitle}
		</p>
	</div>

	<div class="container">
		{#if barBool}
			{#if warning}
				<div class=" bar">
					<div class="warning steep {stripeColour}"></div>

					<div class="emergencyWrapper gap scroll">
						<p class="alt">
							{warningString}
						</p>
					</div>

					<div class="warning steep {stripeColour}"></div>
				</div>
			{:else}
				<div class="bar warning steep {stripeColour}"></div>
			{/if}
		{/if}
		<slot/>
	</div>

</div>

<style lang="scss">
	@mixin cgm($colour){
		.container {
			border: 	1px solid $colour;}
		.tab {
			border-left: 	1px solid $colour;
			.tilt {
				border-right:	3px solid $colour;
				border-top:     1px solid $colour;}}}
	.green {   @include cgm(var(--accent1));}
	.yellow {  @include cgm(var(--accent3));}
	.orange {  @include cgm(var(--darkAccent3));}
	.red {     @include cgm(var(--darkAccent4));}

	.nervWrapper {
		display: grid;

		.container {
			break-inside: avoid-column;
			background:		var(--backgroundTrans);
			margin-bottom:  var(--containerPadding);

			.bar {
				margin: 6px 6px 0 6px;}

			& > *:not(.bar):first-child {
				position: 	relative;
				display: 	block;
				margin: 	17px 0 0 0;}
		}
	}

	.tab {
		font-family:    Arial, Helvetica, sans-serif;
		overflow:       hidden;
		white-space:    nowrap;
		display:        inline-flex;
		margin-bottom: -24px;

		.caption {
			padding:    4px 4px 5px 4px;
			margin:     auto auto 0 -5px;

			background: var(--background);

			display:    block;
			position:   relative;

			text-transform: uppercase;
			font-weight:    600;
		}

		.tilt {
			background: var(--background);
			width:     	min-content;
			padding:    0 4px 0 2px;
			transform:  skew(14deg);

			p {
				transform:  	skew(-14deg) scale(1, 0.8);
				padding:    	0 0 0 3px;
				text-transform: uppercase;
			}
		}
	}
</style>