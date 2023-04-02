<script>
	export let
		titles = ['UNDE'],
		bools = [false],
		colours = ['red']
</script>

<div class="wrapper">
	<div class="rainbow">
		{#each titles as title, i}
			<div class="racerUI">
				<div class="container">
					<div class="title">
						<p>{title}</p>
					</div>
					<div class="bottomHalf">
						<div class="LED {colours[i]}" class:GO={bools[i]}></div>
					</div>
				</div>
			</div>
			{#if i < titles.length - 1}
				<div class="lines e1"/>
				<div class="lines e2"/>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">

	$topBorder: 2px;

	.wrapper {
		//border-top: $topBorder solid var(--darkAccent3);

		.rainbow {
			//background-image:
			//		linear-gradient( to right,
			//				var(--accent1) 50%,
			//				var(--darkAccent1) 150% );
			//border-top: $topBorder solid var(--accent3);

			border-radius: 	4px;
			//padding: 		3px;
			margin: 		-$topBorder 0 10px 0;

			display: 		flex;
			width: 			max-content;

			> * { display: 	inline-block;}}}

	$lineL: 1px;
	$lineR: 5px;

	.lines {
		width: 		2px;
		height: 	10px;
		background: var(--accent3);

		&.e2 { margin: 0 $lineR 0 $lineL;}
		&.e1 { margin: 0 $lineL 0 $lineR;}}

	.racerUI {
		border-radius: 	3px;
		background: 	var(--backgroundTrans);

		width: 		max-content;
		height: 	max-content;
		padding: 	1px;

		.container {
			border-radius: 	3px;
			border:			1px solid var(--accent3);
			> * { padding: 	1px;}}}

	.title {
		border-bottom: 	1px solid var(--accent3);
		filter: 		drop-shadow(0px 0px 1px var(--darkAccent3));

		> p {
			color: 			var(--accent3);
			transform: 		scale(1, 1.2);
			font-weight: 	700;
			font-size: 		16px;
			padding: 		1px;}}

	.bottomHalf {
		.LED {
			width: 		100%;
			height: 	20px;
			opacity: 	0;
			&.GO {opacity:	1;}
		}}

	.red {		background-color: var(--darkAccent4);}
	.orange {	background-color: var(--darkAccent3);}
	.yellow {	background-color: var(--accent3);}
	.green {	background-color: var(--accent1);}
</style>