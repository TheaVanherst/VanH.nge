<script>
    export let portableText = null;

    let moreBool = false;
    const readMore = () => {
        hoverBool = false;
        moreBool ^= true;
    };

    let hoverBool = false;
</script>

<readMore>
    {#if moreBool}
        <p class="more">
            <slot/>
        </p>
        <p class={hoverBool ? 'label hov show' : 'label show'}
           on:mouseenter={() => hoverBool = true}
           on:mouseleave={() => hoverBool = false}
           on:click={readMore}>
            Click here to refold.
        </p>
    {:else}
        <p class={hoverBool ? 'label hov hide' : 'label hide'}
           on:mouseenter={() => hoverBool = true}
           on:mouseleave={() => hoverBool = false}
           on:click={readMore}>
            Click to read more...
        </p>
    {/if}

    <div class={hoverBool ? 'pre hov' : 'pre'}
         on:mouseenter={() => hoverBool = true}
         on:mouseleave={() => hoverBool = false}
         on:click={readMore}>

        {#if !moreBool}
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

        .label {
	        font-weight: 	bold;
	        transition:     color 0.3s ease-in-out;

            &.show {color:  var(--accent2);}
            &.hide {color:  var(--accent1);}

	        &::selection {
		        background-color: 	var(--accent4)!important;}
        }

        .more {
	        border-left:    1px solid var(--accent2);
	        padding:        0 0 5px var(--contentPaddingX);
            margin-left:    -16px;

	        &::selection {
		        color: 				var(--background);
		        background-color: 	var(--accent2);}

            ~ div {
                cursor:             zoom-out;
                background-color:   var(--accent2);
	            margin:            -16px 0 0 -25px;

                top: 100%;}
        }

	    .hov {
		    &.pre { background-color:   var(--accent4);}
		    &.label {   color:          var(--accent4);}
	    }

        div {
            position:   absolute;
	        margin:     9px 0 0 -25px;
	        top:        -12px;

	        border:         2px solid black;
	        border-radius:  50%;
	        cursor:         zoom-in;

	        background:     var(--accent1);

            transition: background 0.3s ease-in-out,
                        margin 0.5s ease-out,
                        top 0.3s ease-out;

            img {
	            display:    block;
                width:      15px;
	            padding:    0;}

            &:hover {background-color: var(--darkAccent2);}
        }
    }
</style>