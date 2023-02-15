<script>
    import TitleCard from "$components/generic/containerTitle.svelte"
    import Container from "$components/generic/container.svelte";

    import scrollIntoView from "$lib/scrollHandler.js";
    export let list = null;

    let arr = []
    for (let i = 0; i < list.titles.length; i++) {
        arr[i] = parseInt((list.titles[i].style).replace("h",""))
    }

    let placement = 0;
    let placementArr = [];

    for (let i = 0; i < arr.length; i++) {
        placementArr[i] = placement;
        if (arr[i] < arr[i + 1]){
            placement++;
        } else if (arr[i] > arr[i + 1]){
            for (let e = 0; e <= arr[i] - arr[i + 1]; e++){
                if (placement > 0){
                    placement--;}}
        } else if (arr[i] === arr[i - 1]) {
            placementArr[i] = placementArr[i - 1];}
    }

    placementArr = placementArr.map(i => 'e' + i);
</script>

<Container>
    <TitleCard link="#post-{list.slug.current}">
        {list.title}
    </TitleCard>

    {#each list.titles as title, i}
        <p href="#header-{title._key}"
           class="{placementArr[i]}"
           on:click|preventDefault={scrollIntoView}>
            {#if title.children.length > 1}
                {#each title.children as child}
                    {child.text}
                {/each}
            {:else}
                {title.children[0].text}
            {/if}
        </p>
    {/each}
</Container>

<style lang="scss">
    p {
	    cursor:     alias;
	    font:       15px monospace;
	    color:      var(--textColour);
	    padding:    0 0 4px 0;

	    &:last-of-type {
		    padding: 0 0 0 0;
	    }

	    &.e0 {
		    margin-left: 0;
		    &:not(:first-of-type){
			    margin-top: 2px;
		    }
        }
	    &.e1 {
		    margin-left: 10px;
        }
	    &.e2 {
		    margin-left: 20px;
        }
	    &.e3 {
		    margin-left: 35px;
        }
    }
</style>