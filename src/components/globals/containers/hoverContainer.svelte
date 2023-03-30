<script>
    export let
        colour = 		"orange",
        hoverColour = 	"yellow";
    export let
        urlDirect = 	"/",
        id = 			undefined;
    export let
		padding = 		"15px";

    let hover = false;
</script>

<a href="{urlDirect}" id="{id}"
   on:mouseover={() => {hover = true}}
   on:mouseleave={() => {hover = false}}>
	<div
		class="post {colour} {(hoverColour ? ' g' + hoverColour : '')}"
		class:hover="{hover}" style="padding: {padding}">

		<slot/>
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
	}
</style>