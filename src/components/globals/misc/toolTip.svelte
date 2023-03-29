<script>
    export let title = '';
    let isHovered = false;
    let x;
    let y;

    function mouseOver(event) {
        isHovered = true;
        x = event.pageX + 5;
        y = event.pageY + 5;
    }
    function mouseLeave() {
        isHovered = false;
    }
</script>

<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
	.tooltip {
		position: absolute;
	}
</style>