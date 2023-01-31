<script>
    export let portableText = null;

    let bool = false;
    const readMore = () => {
        bool ^= true;
    }
</script>

<readMore>
    {#if bool}
        <p class="more">
            <slot/>
        </p>
    {/if}

    <div class="Pre" on:click={readMore}>
        {#if !bool}
            <img src="/icons/expand.webp">
        {:else}
            <img src="/icons/fold.webp">
        {/if}
    </div>
</readMore>

<style lang="scss">

    readMore {
        display:    block;
        position:   relative;

        .more {
	        border-left: 1px solid var(--accent4);
	        padding: 2px 0 0 var(--contentPaddingX);
            margin-left: -16px;

	        &::selection {
		        color: 				var(--background);
		        background-color: 	var(--accent4)}

            ~ div {
                cursor:             zoom-out;
                background-color:   var(--accent4);
	            margin:            -16px 0 0 -25px;

                top: 100%;

	            &:hover {
		            background-color: var(--darkAccent1);
	            }
            }
        }

        div {
	        display:    inline-flex;
            overflow:   hidden;
            position:   absolute;

	        border:             2px solid black;
	        border-radius:      50%;

	        width:      15px;
	        height:     15px;

	        cursor:             zoom-in;
	        background-color:   var(--accent1);
	        margin:            -6px 0 0 -25px;
            top:               -12px;

            transition: background-color 0.3s ease-in-out,
                        margin 0.5s ease-out,
                        top 0.3s ease-out;

            img {
	            display:    block;
                width:      15px;
	            padding:    0;
            }

            &:hover {
                background-color: var(--darkAccent4);
            }
        }
    }
</style>