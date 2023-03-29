<script>
    export let
        overflowBool =  true,
        id =            undefined;

    export let
        padding =   undefined,
        colour =    "green";
</script>

<div id={id}
     class= {colour}
     style="padding: {padding}px"
     class:overflow={overflowBool}>
    <slot/>
</div>

<style lang="scss">
    @mixin cgm($colour){ border: 1px solid $colour;}

    .green {   @include cgm(var(--accent1));}
    .yellow {  @include cgm(var(--accent3));}
    .orange {  @include cgm(var(--darkAccent3));}
    .red {     @include cgm(var(--darkAccent4));}

	div {
		break-inside:   avoid-column;
        margin-bottom:  var(--containerPadding);
        padding:        var(--containerPadding);

        background:		    var(--backgroundTrans);
        backdrop-filter:    blur(2px);
        transform:          translate3d(0, 0, 0);

		&.overflow {    overflow:   hidden;}
	}
</style>