<script>
    export let hoverBool = false;
    export let overflowBool = true;
</script>

<div class:hoverable={hoverBool} class:overflow={overflowBool}>
    <slot/>
</div>

<style lang="scss">
	div {
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