<div>
    <h4>
        <slot/>
    </h4>
</div>

<style lang="scss">
    div {
	    margin:     var(--containerPaddingInv) 0 var(--containerPadding) var(--containerPaddingInv);
	    width:      calc(100% + var(--containerPadding) + var(--containerPadding));
	    background: var(--accent1);

	    h4 {
		    padding:    10px 15px 10px 15px;
		    color:      black;
	    }
    }
</style>