<script>
    export let
        overflowBool =  true,
        id =            undefined;

    export let
        padding =   10,
        colour =    "green";
</script>

<div id={id}
     class= {colour}
     style="padding: {padding}px"
     class:overflow={overflowBool}>
    <slot/>
</div>

<style lang="scss">

    @mixin cgm($colour){    border: 1px solid $colour;}

    .green {   @include cgm(var(--accent1));}
    .yellow {  @include cgm(var(--accent3));}
    .orange {  @include cgm(var(--darkAccent3));}
    .red {     @include cgm(var(--darkAccent4));}

	div {
		break-inside:   avoid-column;
		background:		var(--backgroundTrans);
        margin-bottom:  var(--containerPadding);

        &.padding {     padding:    var(--containerPadding);}
		&.overflow {    overflow:   hidden;}

        .bar {
            margin: 6px 6px 0 6px;}

        & > *:not(.bar):first-child {
            position:   relative;
            display:    block;
            margin:     17px 0 0 0;
        }
	}

    .tab {
        font-family:    Arial, Helvetica, sans-serif;
        overflow:       hidden;
        white-space:    nowrap;

        margin-bottom: -24px;
        width:          100%;

        display:        inline-flex;
        vertical-align: bottom;

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