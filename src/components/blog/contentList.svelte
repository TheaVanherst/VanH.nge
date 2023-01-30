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
                    placement--;}}
        } else if (arr[i] === arr[i - 1]) {
            placementArr[i] = placementArr[i - 1];}
    }

    placementArr = placementArr.map(i => 'e' + i);
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
        background-color:   var(--backgroundAccent2);
        border-radius:      var(--innerRaidus);
        overflow:           hidden;

        &:not(:last-of-type) {
            margin-bottom:  15px;}

        a {
            width:      100%;
            display:    block;

            h4 {
                padding: 8px 10px 10px 10px;
                background-color: var(--accent1);
                color: black;
            }
        }

        .list {
	        padding:    2px 10px;
	        font:       15px monospace;

            &:last-child {
                padding-bottom: 10px;
            }
            //padding-left: 5px;
            //border-left: 3px solid var(--darkAccent4);
            //&.e1 {
            //    margin-left: 10px;}
	        //&.e2 {
		    //    margin-left: 20px;}
	        //&.e3 {
		    //    margin-left: 30px;}
        }
    }
</style>