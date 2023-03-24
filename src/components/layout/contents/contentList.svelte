<script>
    import Container 			from "$components/globals/containers/container.svelte";
    import { scrollIntoView }   from "$lib/controllers/accessibilityController.js";
    import ContentsListItem 	from "$components/layout/contents/contentsListItem.svelte";

    export let
		list = 	[],
		title = "";

    const arrayGen = (arr) => {
        let relArray = [],
        	sar = arr.map(x => x.style.replace("h",""))

        const nest = (data, pId = null) => {
            return data.reduce((r, e) => {
                let obj = Object.assign({}, e)
                if (pId === e.pId) {
                    let children = nest(data, e.id)
                    	children.length ? obj.children = children : null;
                    r.push(obj)
                }
                return r;
            }, [])
        }

        let l = 0, p = 0;

        for (let i = 0; i < sar.length; i++) {
            relArray[i] = {
                id: 	i,
				level: 	"h" + (l + 1),
                pId: 	l !== 0 ? p : null, // fallback to go to parent element
                text: 	arr[i].children[0].text,
                key:	arr[i]._key,
            };

            // loops through array to find how indented it should be relative to previous element
            if (sar[i] < sar[i + 1]){
                l++;}
            else if (sar[i] > sar[i + 1]){
				let t = sar[i] - sar[i + 1];
                l = (l - t) < 0 ? 0 : l - t;}

            // generates a parent ID from the relative indentation
            if (sar?.[i + 1] > sar[i]){ //if relativity placement is greater than next position, retain parent pos.
                p = i;}
            else if (sar?.[i + 1] === sar[p] && sar[p]) {
                p = relArray[p].pId;} // ngl, I'm surprised this works as well as it does.
        }
        return nest(relArray)
	}

    let hov = false;
</script>

<Container padding={0} colour={!hov ? "green" : "orange"}>
	<div
		class="title"
		on:mouseenter={() => hov = true	}
		on:mouseleave={() => hov = false}
		on:click|preventDefault={scrollIntoView}>
		<p>
			{title}
		</p>
	</div>

	<div class="contents">
		<ContentsListItem dataset={arrayGen(list)}/>
	</div>
</Container>

<style lang="scss">
	.title {
		cursor:			alias;
		width:      	100%;
		background: 	var(--accent1);

		p {
			font-size: 		100%;
			font-family: 	"Arimo", sans-serif;
			color: 			var(--textColourInvert);
			font-weight: 	800;

			padding: 		10px 15px 10px 15px;}

		&:hover {
			background: 	var(--darkAccent3);}
	}

	.contents {
		padding: 	calc(var(--containerPadding) - 5px);
	}
</style>
