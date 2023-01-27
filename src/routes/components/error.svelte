<script>
    import { page } from '$app/stores';

    export let error = null;
    export let onError = null;
    let ENV =
        typeof process !== 'undefined' && process.env && process.env.NODE_ENV;
    let DEV = ENV !== 'production';
    $: if ($error && onError) onError($error);
</script>

{#if $page?.error}
    <div class="flexContainer">
        <div class="pony">
            <img src="/error.png"/>
        </div>
        <div>
            <h1>{$page?.status}</h1>
            <p>Page {$page?.error?.message}.</p>
        </div>
    </div>
{:else}
    <slot />
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
			width: 200px;
			height: 100%;
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