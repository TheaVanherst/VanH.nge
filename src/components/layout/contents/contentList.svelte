<script>
    import Container from "$components/globals/containers/container.svelte";

    import scrollIntoView from "$lib/controllers/scrollHandler.js";

    export let
		list = 	[];
    export let
		title = "",
        ref = 	"";

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

        let p = 0,
            pid = 0;

        for (let i = 0; i < sar.length; i++) {
            relArray[i] = {
                id: 	i,
                pId: 	p !== 0 ? pid : null, // fallback to go to parent element
                text: 	arr[i].children[0].text,
                key:	arr[i]._key,
            };

            // loops through array to find how indented it should be relative to previous element
            if (sar[i] < sar[i + 1]){
                p++;
            } else if (sar[i] > sar[i + 1]){
				let t = sar[i] - sar[i + 1];
                p = (p - t) < 0 ? 0 : p - t;}

            // generates a parent ID from the relative indentation
            if (sar?.[i + 1] > sar[i]){ //if relativity placement is greater than next position, retain parent pos.
                pid = i;
            } else if (sar?.[i + 1] === sar[pid] && sar[pid]) {
                pid = relArray[pid].pId;} // ngl, I'm surprised this works as well as it does.
        }
        return nest(relArray)
	}
</script>

<Container padding={0}>
	<div
		class="title"
		on:click|preventDefault={scrollIntoView}>
		<p>
			{title}
		</p>
	</div>

	<div class="contents">
		<div class="h1">
			{#each arrayGen(list) as h1}
				<p href="#header-{h1.key}"
				   on:click|preventDefault={scrollIntoView}>
					{h1.text}
				</p>
				{#if h1.children}
					<div class="h2">
						{#each h1.children as h2}
							<p href="#header-{h2.key}"
							   on:click|preventDefault={scrollIntoView}>
								{h2.text}
							</p>
							{#if h2.children}
								<div class="h3">
									{#each h2.children as h3}
										<p href="#header-{h3.key}"
										   on:click|preventDefault={scrollIntoView}>
											{h3.text}
										</p>
										{#if h3.children}
											<div class="h4">
												{#each h3.children as h4}
													<p href="#header-{h4.key}"
													   on:click|preventDefault={scrollIntoView}>
														{h4.text}
													</p>
												{/each}
											</div>
										{/if}
									{/each}
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</Container>

<style lang="scss">
	$textPadX: 10px;
	$textPadY: 5px;

	p {	cursor:	alias; }

	.title {
		width:      	100%;
		background: 	var(--accent1);

		p {
			font-size: 		100%;
			font-family: 	"Arimo", sans-serif;
			color: 			var(--textColourInvert);
			font-weight: 	800;

			padding: 10px 15px 10px 15px;}}

	.contents {
		padding: 	calc(var(--containerPadding) - $textPadY);

		.h1 { div {	border-left:	1px solid var(--darkAccent1);}}
		.h2 { div {	margin-left: 	10px;}}

		p {
			color:      var(--textColour);
			padding: 	$textPadY $textPadX;

			&:hover {
				font-weight: 		800;
				color: 				var(--textColourInvert);
				background-color: 	var(--accent1);

				+ div {
					border-left: 	1px solid var(--accent1);
					div {
						border-left: 	1px solid var(--accent1);}}}}
	}
</style>
