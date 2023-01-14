<script>
	import '../styles.css';
	import Header from "./components/header.svelte"

	let y;
</script>

<pageData style="--yPos: -{y}px">
	<div class="spaceBg3 backGround"></div>
	<div class="spaceBg2 backGround"></div>
	<div class="spaceBg1 backGround"></div>

	<main>
		<Header/>
		<table>
			<div class="col1 col">
				test lol xd test lol xdtest lol xdtest lol xdtest lol xd
			</div>
			<div class="col2 col">
				<slot/>
			</div>
		</table>
	</main>
</pageData>

<svelte:window bind:scrollY={y} />

<style>
	/* TODO: column management */

	:root {
		--row1: 250px;
		--row2: 600px;}

	main {
		width: 		max-content;
		padding: 	1rem;
		margin: 	0 auto;
		box-sizing: border-box;}

	table {
		width: 		max-content;
		gap: 		var(--containerPadding);
		display: 	flex;}

	.col {
		height: max-content;
		width: inherit;
		display:	block;}
	.col1 {
		max-width: var(--row1);}
	.col2 {
		max-width: var(--row2);}

	/* TODO: background management */

	:root {
		--res1: 234px;
		--res2: 400px;}

	.spaceBg1 {
		-webkit-animation:		backgroundScroll1 15s linear infinite;
		animation: 				backgroundScroll1 15s linear infinite;
		background-position-x: 	center;
		background-position-y: 	calc(var(--yPos) / 2);
		background-image: 		url("/starTest3.gif");

		height: 	calc(var(--res1) * (var(--res1) / 100));
		min-height: calc(100vh + var(--res1));
		z-index:   -2;}
	.spaceBg2 {
		-webkit-animation:		backgroundScroll2 45s linear infinite;
		animation: 				backgroundScroll2 45s linear infinite;
		background-position-x: 	center;
		background-position-y: 	calc(var(--yPos) / 3);
		background-image: 		url("/starTest2.gif");

		height: 	calc(var(--res2) * (var(--res2) / 100));
		min-height: calc(100vh + var(--res2));

		left:  	   -250px;
		z-index:   -1;
		opacity: 	0.7;}
	.spaceBg3 {
		-webkit-animation:		backgroundScroll1 45s linear infinite;
		animation: 				backgroundScroll1 45s linear infinite;
		background-position-x: 	center;
		background-position-y: 	calc(var(--yPos) / 4);
		background-image: 		url("/starTest3.gif");

		height: 	calc(var(--res1) * (var(--res1) / 100));
		min-height: calc(100vh + var(--res1));

		left:  	   -355px;
		z-index:   -1;
		opacity: 	0.5;}
	.backGround {
		width: 		150%;
		top: 		0;
		position: 	fixed;}

	@keyframes backgroundScroll1 {
		0% {  	transform: translateY(calc(var(--res1) * -1));}
		100% {  transform: translateY(0px);} }
	@keyframes backgroundScroll2 {
		0% {  	transform: translateY(calc(var(--res2) * -1));}
		100% {  transform: translateY(0px);} }

</style>
