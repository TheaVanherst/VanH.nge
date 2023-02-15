
<div></div>

<style lang="scss">
	div {
		animation:      blinkUq .5s calc(0.2s) step-end infinite alternate;
		border-right:   2px solid var(--textColour);

		width:  min-content;
        height: 40px;
        top:    5px;
        left:  -10px;

        position:       relative;
		vertical-align: top;
		overflow:       hidden;
        display:        inline-block;

		&::selection {
			color: 				var(--accent1);
			background-color: 	black;}
	}

	@keyframes blinkUq {
		0% {    border-right: 12px solid;}
		50% {   border-color: transparent;}}
</style>