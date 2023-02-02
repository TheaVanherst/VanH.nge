<script>

</script>

<div class="lds-grid">
    <div></div><div></div><div></div>
    <div></div><div></div><div></div>
    <div></div><div></div><div></div>
</div>

<style lang="scss">
	$Offset: 14px;
	$width: 8px;
	$diam: $Offset * 3;

	.lds-grid {
		display: flex;
		position: relative;
		width: $diam - ($Offset - $width);
		height: $diam - ($Offset - $width);

		div {
			position: absolute;
			width: $width;
			height: $width;
			border-radius: 50%;
			animation: lds-grid 2s linear infinite;

			@for $i from 0 through 3 {
				@for $e from 0 through 3 {
					&:nth-child(#{($e + ($i * 3 + 1))}) {
						animation-delay: ($i + $e) * -0.4s;
						left: $e * $Offset;
						top: $Offset * $i;
					}
				}
			}
		}
	}

	@keyframes lds-grid {
		0% {    background: var(--accent2);}
        33% {   background: var(--accent3)}
		66% {   background: var(--accent4);}
		100% {  background: var(--accent2);}
	}
</style>