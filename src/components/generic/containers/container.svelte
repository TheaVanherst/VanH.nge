<script>
    export let hoverBool = false;
    export let overflowBool = true;

    export let id = undefined;
</script>

<div id={id}
     class:hoverable={hoverBool}
     class:overflow={overflowBool}>
    <slot/>
</div>

<style lang="scss">
	div {
		break-inside: avoid-column;
		border-radius: 	var(--outerRadius);
		background:		var(--backgroundTrans);
		border:         1px solid var(--accent1);

        margin-bottom:  var(--containerPadding);
        padding:        var(--containerPadding);

		&.hoverable {
			transition: border 0.2s ease-in-out;
			&:hover {
				border: 1px solid var(--accent3);
			}
		}

		&.overflow {
            overflow: hidden;
		}
	}
</style>