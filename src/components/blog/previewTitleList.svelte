<script>
    import scrollIntoView from "$lib/scrollHandler.js";
    export let list = null;
</script>

<div class="contentList">
    <h4>Contents:</h4>
    {#each list as data}
        <p href="#post-{data.slug}" class="list" on:click|preventDefault={scrollIntoView}>{data.title}</p>
    {/each}
</div>

<style lang="scss">
	.contentList {
		border-radius: 	var(--outerRadius);
		background:		var(--backgroundTrans);
		border:         1px solid var(--accent1);

		overflow:       hidden;
	}

	h4 {
		cursor:     alias;
		padding:    8px 10px 10px 10px;

		background-color:   var(--accent1);
		color:              black;
	}

	.list {
		cursor:     alias;
		font:       15px monospace;

		padding:    2px 15px;

		&:last-child {
			padding-bottom: 15px;
		}
	}
</style>