<script>

    export let title;

</script>


<div>
    <h1>
        {title}
    </h1>
</div>

<style lang="scss">
	div {
		border: 	var(--border-thickness) solid var(--accent1);
		padding: 	var(--containerPadding);
		border-radius: 	var(--outerRadius);
		background:		var(--backgroundTrans);
		color: 			var(--textColour);
        margin-bottom: var(--containerPadding)
	}
</style>