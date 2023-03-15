<script>
    export let bool = true;
    export let label = "";
</script>

<div on:click={() => bool = !bool}>
    <label class="switch">
        <input type="checkbox" bind:checked={bool}/>
        <span class="slider"/>
    </label>
    <label>
        {label}
    </label>
</div>

<style lang="scss">
    label {
	    font-family:    monospace;
	    display:        inline-block;
    }

	.switch {
		position:   relative;
		width:      42px;
		height:     16px;
		pointer-events: none;

        input {
			opacity:    0;
			width:      0;
			height:     0;

	        &:checked + .slider {
		        background-color: var(--accent1);}

	        &:checked + .slider:before {
		        -webkit-transform: translateX(26px);
		        -ms-transform: translateX(26px);
		        transform: translateX(26px);}
		}

	}

	.slider {
		top:        0;
		left:       0;
		right:      0;
		bottom:     0;
        position:   absolute;

        cursor:     pointer;
        background: var(--accent3);

		-webkit-transition: 0.4s;
		transition:         0.4s;

        &:before {
	        position:   absolute;
	        content:    "";

	        height:     14px;
	        width:      14px;
	        left:       1px;
	        bottom:     1px;

	        background-color:   var(--background);

	        -webkit-transition: 0.4s;
	        transition:         0.4s;
        }
	}
</style>