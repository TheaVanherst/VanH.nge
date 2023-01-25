<script>
    import { page } from '$app/stores';
</script>

<slot>
    <div>
        <h1>{$page?.status}: {$page?.error?.message}</h1>
    </div>
</slot>

<style lang="scss">
	div {
        display: block;
		font-size:  14px;

		max-width:  100%;
		padding:    var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);

		> p {
			padding-top:     var(--containerPadding);
		}
	}
</style>