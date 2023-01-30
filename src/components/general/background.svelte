
<backgroundElement>
    <div class="spaceBg3 backGround"></div>
    <div class="spaceBg2 backGround"></div>
    <div class="spaceBg1 backGround"></div>
</backgroundElement>

<style lang="scss">
    $res1: 234px;
    $res2: 400px;

	.backGround {
		width: 		150%;
		top: 		0;

		position: 				fixed;
		background-position-x: 	center;

		&.spaceBg1 {
			-webkit-animation: 	backgroundScroll1 15s linear infinite;
			animation: 			backgroundScroll1 15s linear infinite;
			background-position-y: 	calc(var(--yPos) / 2);
			background-image: 		url("/starTest3.gif");

			height: 		calc($res1 * ($res1 / 100px));
			min-height: 	calc(100vh + $res1);
			z-index: 		-2;}

		&.spaceBg2 {
			-webkit-animation: 	backgroundScroll2 45s linear infinite;
			animation: 			backgroundScroll2 45s linear infinite;
			background-position-y: 	calc(var(--yPos) / 3);
			background-image: 		url("/starTest2.gif");

			height: 		calc($res2  * ($res2  / 100px));
			min-height: 	calc(100vh + $res2 );

			left: 		-250px;
			z-index: 	-1;
			opacity: 	 0.7;}

		&.spaceBg3 {
			-webkit-animation: 	backgroundScroll1 45s linear infinite;
			animation: 			backgroundScroll1 45s linear infinite;
			background-position-y: 	calc(var(--yPos) / 4);
			background-image: 		url("/starTest3.gif");

			height: 		calc($res1 * ($res1 / 100px));
			min-height: 	calc(100vh + $res1);

			left: 		-355px;
			z-index: 	-1;
			opacity: 	 0.5;}}

	@keyframes backgroundScroll1 {
		0% {  	transform: translateY(calc($res1 * -1));}
		100% {  transform: translateY(0px);} }
	@keyframes backgroundScroll2 {
		0% {  	transform: translateY(calc($res2 * -1));}
		100% {  transform: translateY(0px);} }
</style>