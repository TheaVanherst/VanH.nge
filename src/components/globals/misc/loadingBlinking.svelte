
<div class="loadingHolder">
	<div class="loading">

	</div>
</div>

<style lang="scss">

	.loadingHolder {
		display: contents;
		height: inherit;
	}

	.loading {
		animation:      blinkUq .5s calc(0.2s) step-end infinite alternate;
		vertical-align: top;
		overflow:       hidden;
		display:        inline-block;
		position:       relative;

		width:  min-content;
		height: calc(100% - 10px);
		margin: 6px 0 4px 5px;
		top:    -0px;
		left:  -16px;
	}

	@keyframes blinkUq {
		0% {    border-right: 12px solid;}
		50% {   border-color: transparent;}}
</style>