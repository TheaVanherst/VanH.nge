<script>
    import { page } from '$app/stores';
</script>

{#if $page?.error}
    <div>
        <h1>{$page?.status}</h1>
        <p>{$page?.error?.message}.</p>
    </div>
{/if}

<style lang="scss">
	div {
        display: block;
		font-size:  14px;

		max-width:  100%;
		padding:    var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);

        > h1 {
	        border-left: 	5px solid var(--accent1);

	        padding:	 	0 0 0 20px;
	        margin:			0 0 var(--contentPaddingY) calc(var(--contentPaddingX) * -1);
        }

        > p {
	        border-right: 9px solid var(--textColour);
            width: max-content;
	        $borderColour: white;
	        animation:
			        blink .5s step-end infinite alternate;
        }
	}
</style>