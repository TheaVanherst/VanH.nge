<script>
	import '../styles.css';
</script>

<div class="app">
	<div class="spaceBg2 backGround"></div>
	<div class="spaceBg1 backGround"></div>

	<main>
		<slot />
	</main>
</div>

<style>

	:root {
		--res1: 234px;
		--res2: 400px;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.spaceBg1 {
		-webkit-animation:		backgroundScroll1 10s linear infinite;
		animation: 				backgroundScroll1 10s linear infinite;
		background-position: 	center;
		background-image: 		url("/starTest.gif");

		height: calc(var(--res1) * (var(--res1) / 100));
		min-height: calc(100vh + var(--res1));


		z-index:   -2;}
	.spaceBg2 {
		-webkit-animation:		backgroundScroll2 25s linear infinite;
		animation: 				backgroundScroll2 25s linear infinite;
		background-position: 	center;
		background-image: 		url("/starTest2.gif");

		height: calc(var(--res2) * (var(--res2) / 100));
		min-height: calc(100vh + var(--res2));

		left:  -250px;
		z-index:   -1;
		opacity: 	0.5;}
	.backGround {
		width: 	150%;
		top: 	0;

		position: 	fixed;
	}


	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--contentPaddingX);
	}

	footer a {
		font-weight: bold;
	}

	@keyframes backgroundScroll1 {
		0% {  	transform: translateY(calc(var(--res1) * -1));}
		100% {  transform: translateY(0px);} }
	@keyframes backgroundScroll2 {
		0% {  	transform: translateY(calc(var(--res2) * -1));}
		100% {  transform: translateY(0px);} }

</style>
