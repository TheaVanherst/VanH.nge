<script>
    export let list;

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
            for (let e = 0; e < arr[i] - arr[i + 1]; e++){
                if (placement > 0){
                    placement--;
                }
            }
        } else if (arr[i] === arr[i - 1]) {
            let temp = placementArr.findLast((element) => element === arr[i]);
            placementArr[i] = placementArr[temp - 1];
        }
    }

    placementArr = placementArr.map(i => 'e' + i);

    let arrayElements = []

    // for (let i = 0; i < arr.length; i++) {
    //     arrayElements[placementArr[i]].push("yes")
    // }

    $:console.log(placementArr, arr)
</script>

<div class="contents">
    <a href="#{list.slug.current}">
        <h4>
            {list.title}
        </h4>
    </a>

    {#each list.titles as title, i}
        <a href="#{title._key}" class="list {placementArr[i]}">
            {#if title.children.length > 1}
                {#each title.children as child}
                    {child.text}
                {/each}
            {:else}
                {title.children[0].text}
            {/if}
        </a>
    {/each}
</div>

<style lang="scss">
    * {
        text-decoration: none;
        color: white;
    }

    .contents {
        padding:        10px;
	    margin-bottom:  10px;

        background-color: var(--backgroundAccent2);
        border-radius: var(--innerRaidus);

        a {
            margin-bottom: 2px;
            width: 100%;
            display: block;

            h4 {
                padding: 5px 6px;
                background-color: var(--background);
            }
        }

        //.list {
        //    padding-left: 5px;
        //    border-left: 3px solid var(--darkAccent4);
        //    &.e1 {
        //        margin-left: 10px;}
	    //    &.e2 {
		//        margin-left: 20px;}
	    //    &.e3 {
		//        margin-left: 30px;}
        //}
    }
</style>