<script>
    export let hoverBool = false;
    export let overflowBool = true;

    export let colour =     "green";
    export let tabColour =  "green";

    export let title =      "NERV:";
    export let subtitle =   "CODE " + Math.floor(Math.random() * 404);

    export let warningScroll = false;
    export let warningString = "ACCESS RESTRICTED : NON NERV PERSONNEL"

    export let barBool =        false;
    export let stripeColour =   "orange";

    export let id = undefined;
</script>

<div class={"nervWrapper " + colour + " " + ("t" + tabColour)} >
	<div class="tab">
		<div class="tilt">
			<p class="def tabName">
				{title}
			</p>
		</div>
		<p class="caption">
			{subtitle}
		</p>
	</div>

	<div id={id}
		 class="container"
		 class:hoverable={hoverBool}
		 class:overflow={overflowBool}>

		{#if barBool}
			{#if warningScroll}
				<div class=" bar">
					<div class="warning steep {stripeColour}"></div>

					<div class="emergencyWrapper gap scroll">
						<p class="alt">{warningString}</p>
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
	.tgreen {
		.tabName {color:    var(--accent1);}
		.caption {color:    var(--accent1);}}
	.tyellow {
		.tabName {color:    var(--accent3);}
		.caption {color:    var(--accent3);}}
	.torange {
		.tabName {color:    var(--darkAccent3);}
		.caption {color:    var(--darkAccent3);}}
	.tred {
		.tabName {color:    var(--darkAccent4);}
		.caption {color:    var(--darkAccent4);}}

	.green {
		.container {
			border: 1px solid var(--accent1);}
		.tab {
			border-left:    1px solid var(--accent1);
			.tilt { border-right:   1px solid var(--accent1);
				border-top:     1px solid var(--accent1);}}}
	.yellow {
		.container {
			border: 1px solid var(--accent3);}
		.tab {
			border-left:    1px solid var(--accent3);
			.tilt { border-right:   1px solid var(--accent3);
				border-top:     1px solid var(--accent3);}}}
	.orange {
		.container {
			border: 1px solid var(--darkAccent3);}
		.tab {
			border-left:    1px solid var(--darkAccent3);
			.tilt { border-right:   1px solid var(--darkAccent3);
				border-top:     1px solid var(--darkAccent3);}}}
	.red {
		.container {
			border: 1px solid var(--darkAccent4);}
		.tab {
			border-left:    1px solid var(--darkAccent4);
			.tilt { border-right:   1px solid var(--darkAccent4);
				border-top:     1px solid var(--darkAccent4);}}}

	.nervWrapper {
		display: inline;

		.container {
			break-inside: avoid-column;

			border-radius: 	var(--outerRadius);
			background:		var(--backgroundTrans);

			margin-bottom:  var(--containerPadding);

			&.padding {
				padding:    var(--containerPadding);
			}

			&.hoverable {
				transition: border 0.2s ease-in-out;
				&:hover {
					border: 1px solid var(--accent3);
				}
			}

			&.overflow {
				overflow: hidden;
			}

			.bar {
				margin: 6px 6px 0 6px;
			}

			& > *:not(.bar):first-child {
				position: relative;
				display: block;
				margin: 17px 0 0 0;
			}
		}
	}

	.tab {
		font-family:    Arial, Helvetica, sans-serif;
		overflow:       hidden;
		white-space:    nowrap;

		margin-bottom: -24px;

		display:        inline-flex;
		vertical-align: bottom;
		width:  100%;

		.caption {
			padding:    4px 4px 5px 4px;
			margin:     auto auto 0 -5px;

			background:     var(--background);

			display:    block;
			position:   relative;

			text-transform: uppercase;
			font-weight:    600;
		}

		.tilt {
			background:     var(--background);

			width:          min-content;
			border-radius:  5px;

			padding:    0 5px 0 10px;
			margin:     0 0 0 -8px;
			transform:  skew(14deg);

			p {
				transform:  skew(-14deg) scale(1, 0.8);
				padding:    0 0 0 3px;
				text-transform: uppercase;
			}
		}
	}
</style>