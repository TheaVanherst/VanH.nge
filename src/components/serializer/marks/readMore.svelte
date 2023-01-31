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
        {#if bool}
            <img src="/icons/expand.webp">
        {:else}
            <img src="/icons/fold.webp">
        {/if}
    </div>
</readMore>

<style lang="scss">

    readMore {
        margin-top: -10px;

        display:    block;
        position:   relative;

        .more {
            padding-bottom: 10px;

            ~ div {
                cursor: zoom-out;
	            margin: -25px 0 0 -23px;
            }
        }

        div {
	        cursor:     zoom-in;
	        display:    inline-flex;
            overflow:   hidden;
            position:   absolute;

            margin:     -16px 0 0 -23px;
	        border-radius:      50%;
	        background-color:   var(--accent1);

            img {
	            display:    block;
                width:      15px;
	            padding:    0;
            }

            &:hover {
                background-color: var(--accent2);
            }
        }
    }
</style>