<script>
    export let hoverBool = false;
</script>

<div class:hoverable={hoverBool}>
    <slot/>
</div>

<style lang="scss">
	div {
		border-radius: 	var(--outerRadius);
		background:		var(--backgroundTrans);
		border:         1px solid var(--accent1);

		overflow:       hidden;
        margin-bottom:  var(--containerPadding);
        padding:        var(--containerPadding);

		&.hoverable {
			transition: border 0.2s ease-in-out;

			&:hover {
				border:         1px solid var(--accent3);
			}
		}
	}
</style>