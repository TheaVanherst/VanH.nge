
<div></div>

<style lang="scss">
	div {
		animation:      blinkUq .5s calc(0.2s) step-end infinite alternate;
		vertical-align: top;
		overflow:       hidden;
        display:        inline-block;
		position:       relative;
		border-right:   2px solid var(--textColour);

		width:  min-content;
		height: 32px;
		top:    -0px;
		left:  -16px;
	}

	@keyframes blinkUq {
		0% {    border-right: 12px solid;}
		50% {   border-color: transparent;}}
</style>