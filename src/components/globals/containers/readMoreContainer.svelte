<script>
    export let
		colour = 		"orange",
		hoverColour = 	"yellow";
	export let
        urlDirect = 	"/",
        id = 			undefined;

    let hover = false;
</script>

<a 	href="{urlDirect}" id="{id}"
   	on:mouseover={() => {hover = true}}
   	on:mouseleave={() => {hover = false}}>
	<div
		class="post {colour} {(hoverColour ? ' g' + hoverColour : '')}"
		class:hover={hover}>

		<slot/>

		<div class="readMore">
			<img src="/icons/downArrowPreview.webp">
		</div>
	</div>
</a>

<style lang="scss">
	.green {    border: 1px solid var(--accent1);
		img {   background-color:   var(--accent1);}}
	.yellow {   border: 1px solid var(--accent3);
		img {   background-color:   var(--accent3);}}
	.orange {   border: 1px solid var(--darkAccent3);
		img {   background-color:   var(--darkAccent3);}}
	.red {      border: 1px solid var(--darkAccent4);
		img {   background-color:   var(--darkAccent4);}}

	.hover {
		&.ggreen { 	border: 1px solid var(--accent1);
			img {   background-color:   var(--accent1);}}
		&.gyellow {	border: 1px solid var(--accent3);
			img {   background-color:   var(--accent3);}}
		&.gorange {	border: 1px solid var(--darkAccent3);
			img {   background-color:   var(--darkAccent3);}}
		&.gred {   	border: 1px solid var(--darkAccent4);
			img { 	background-color:   var(--darkAccent4);}}}

	.post {
		position: 		relative;
		overflow: 		hidden;
		break-inside:   avoid-column;

		background:			var(--backgroundTrans);
		//backdrop-filter:    blur(2px);
		//transform:          translate3d(0, 0, 0);
		/*TODO: this causes issues with Z-INDEX of author tooltips.*/

		margin-bottom:  var(--containerPadding);
		padding: 		var(--containerPadding);

		&:before {
			width:      100%;
			height:     150px;
			z-index:    1;

			bottom:     0;
			left:       0;
			margin:     0;

			content:    "";
			position:   absolute;
			display:    block;

			pointer-events:     none;
			background-image:   linear-gradient(to bottom,
					rgba(0,0,0, 0), rgba(0,0,0, 1) 90%);
		}

		> .readMore {
			position:   absolute;
			bottom:     var(--containerPadding);
			z-index:    20;
			width: 		calc(100% - (var(--containerPadding) * 2));

			img {
				display:    block;
				text-wrap: 	none;

				padding:    4px;
				width:      16px;
				height:     16px;
				margin:     0 auto;
			}
		}
	}
</style>