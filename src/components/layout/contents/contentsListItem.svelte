<script>
    import { scrollIntoView }   from "$lib/controllers/accessibilityController.js";
	export let dataset;
</script>

<div class="{dataset[0].level} contentsEl">
	{#each dataset as embed}
		<p href="#{embed.type}{embed.key}"
		   on:click|preventDefault={scrollIntoView}>
			{embed.text}
		</p>
		{#if embed.children}
			<svelte:self dataset="{embed.children}"/>
		{/if}
	{/each}
</div>

<style lang="scss">
	div:not(.h1) {		border-left:	1px solid var(--darkAccent1);}
	div:not(.h1, .h2) {	margin-left: 	10px;}

	:global(div.contentsEl) {
		> *:has(> p:hover){	border-left:	1px solid var(--accent4);}

		p {
			cursor:		alias;
			color:      var(--textColour);
			padding: 	5px 10px;

			&:hover {
				font-weight: 		800;
				color: 				var(--textColourInvert);
				background-color: 	var(--darkAccent3);
				padding-left: 		10px;

				+ div {				border-left: 	1px solid var(--darkAccent3);
					:global(div) { 	border-left: 	1px solid var(--accent3);}} }}}
</style>
