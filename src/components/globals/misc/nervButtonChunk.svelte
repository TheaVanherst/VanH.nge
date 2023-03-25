<script>
	let obj = [
        {	diag: false, mirror: false,
            id: "A0", 	children: [
                {width: "105px", colour: "red"},
                {width: "105px", colour: "red"},
                {width: "105px", colour: "red"},]},
        {	diag: false, mirror: true,
            id: "15", 	children: [
                {width: "105px", colour: "red"},
                {width: "105px", colour: "red"},
                {width: "105px", colour: "red"},]}
	]
</script>

{#each obj as col}
	<div class="col"
		class:diag={col.diag}
		class:mirror={col.mirror}>

		{#each col.children as row, i}
			<div class="idNo">{col.id}{i}</div>
			<div class="button {row.colour}">
				<div class="powerBar">
					<div></div>
				</div>
			</div>
		{/each}

	</div>
{/each}

<style lang="scss">
	@mixin cgm($colour, $highlight){
		&:before {      color:      $highlight;}
		.powerBar {
			> div {     background: $colour;
				&:before {
					background: $highlight;}}}}

	.col {
		width:		40%;
		display: 	inline-block;

		border-left: 1px solid var(--darkAccent3);

		padding: 0 0 0 26px;

		&.diag {
			padding: 30px 0 20px 26px;
			.idNo {		margin-top: 30px;}
			.powerBar {	transform: 	skewY(-25deg);}}

		&.mirror {

			&.diag {
				padding: 30px 0 20px 26px;
				.idNo {		margin-top: -18px;}
				.powerBar {	transform: 	skewY(25deg);}}
		}
	}

	.idNo {

		margin:    		2px 0 0 -27px;
		border-bottom: 	1px solid var(--darkAccent3);
		padding-left:	3px;
		width:  		24px;

		position:   	absolute;
		font-size:		10px;
		color: 			var(--darkAccent3);
	}

	.button {
		padding-bottom:     10px;
		height: 			25px;
		display:            flex;

		> * {
			display:        inline-flex;
			vertical-align: bottom;}

		.powerBar, .powerBar div {
			width: 100%;}

		.powerBar {
			> div {
				&:before {
					content:    "";
					display:    block;
					width:      25px;
					height:     10px;}}}

		@include cgm(var(--accent1), var(--accent3));
	}
</style>