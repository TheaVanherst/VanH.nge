<script>
    import { page } from '$app/stores';
</script>

{#if $page?.error}
    <div class="flexContainer">
        <img src="/error.gif"/>
        <div>
            <h1>{$page?.status}</h1>
            <p>{$page?.error?.message}</p>
        </div>
    </div>
{/if}

<style lang="scss">
	.flexContainer {
		display: flex;
        gap:     30px;

		padding:    var(--containerPadding);

		background-color:   var(--backgroundTrans);
		border-radius:      var(--outerRadius);
		border:             1px solid var(--accent1);

		font-size:  14px;

        img {
			width:      60%;
            object-fit: cover;
			height:     100%;
		}

		h1 {
            font-size:      65px;
			border-left: 	5px solid var(--accent1);

			padding:	 	0 0 0 20px;
			margin:			0 0 var(--contentPaddingY) calc(var(--contentPaddingX) * -1);
		}

		p {
			border-right: 9px solid var(--textColour);
			width: max-content;
			$borderColour: white;
			animation:
					blink .5s step-end infinite alternate;
		}
	}
</style>