<script>
    export let bool = true;
    export let label = "";
</script>

<label class="switch">
    <input type="checkbox" bind:checked={bool} />
    <span class="slider" />
</label>
<label>
    {label}
</label>

<style lang="scss">
	.switch {
		position: relative;
		display: inline-block;
		width: 42px;
		height: 16px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--darkAccent1);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 4px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 14px;
		width: 14px;
		left: 1px;
		bottom: 1px;
		background-color: var(--background);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 3px;
	}

	input:checked + .slider {
		background-color: var(--accent1);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>