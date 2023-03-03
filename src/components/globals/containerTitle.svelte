<div>
    <p>
        <slot/>
    </p>
</div>

<style lang="scss">
    div {
	    margin:     var(--containerPaddingInv) 0 var(--containerPadding) var(--containerPaddingInv);
	    width:      calc(100% + var(--containerPadding) + var(--containerPadding));
	    background: var(--accent1);

	    p {
            font-family: "Arimo", sans-serif;
		    padding:    10px 15px 10px 15px;
		    color:      black;
            font-weight: 800;
            font-size: 16px;
	    }
    }
</style>