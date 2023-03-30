<script>
    import SanityImage 		from "$lib/serializer/imageBuilder.svelte";

    export let author = undefined;

    let h = false;
	let p, c;
    let o;

    $: if(!!c) {
        o = p.offsetLeft + (p.scrollWidth / 2) - (c?.scrollWidth / 2);}

    // TODO: This needs compensation to prevent it overflowing the window
</script>

<span
	class="holder"
	bind:this={p}
	on:mouseover={	() => h = true}
	on:mouseleave={	() => h = false}>
	<a href="/authors/{author.slug.current ?? author.slug}">
		<span class="author">
        	{author.fullName}
        </span>
	</a>
</span>
{#if h}
	<div id="tooltip"
		 bind:this={c}
		 style="left:{o}px">

		<div class="container">
			<div class="profileBanner">
				<SanityImage image={author.profileBanner}/>
			</div>
			<div class="table">
				<div class="pfp">
					<SanityImage image={author.userPortrait}/>
				</div>
				<div class="profile">
					<h4>
						{author.fullName}
					</h4>
					<p class="handle">
						@{author.handle}
					</p>
				</div>
			</div>
		</div>

	</div>
{/if}

<style lang="scss">
	span {
		font-size: unset;}

	#tooltip {
		padding-top: 	10px;
		position: 		absolute;
		z-index: 		100;
		width:			max-content;
	}

	.container {
		background: 	var(--backgroundTrans);
		border: 		1px solid var(--background);
		backdrop-filter: blur(2px);}

	.profileBanner {
		height: 		35px;}

	.table {
		display: 	flex;

		.pfp {
			width:	72px;
			height:	72px;

			margin:    -30px 0 -25px 5px;
			border: 	1px solid var(--background);
			z-index: 	1;}

		.profile {
			padding: 5px 15px 8px 8px;
			.handle {
				margin-top: 3px;
				color: 	var(--accent3);} }
	}

	.author {
		margin:     0 -.25rem;
		padding:    .125rem  .25rem;

		text-decoration:    underline 1px;
		transition:         color .2s ease-in-out, box-shadow .2s ease-in-out;

		color:      var(--accent2);
		box-shadow: inset 0 0 0 0 var(--accent1);

		&::selection {
			background: var(--accent2);}

		&:hover {
			color:       var(--background);
			box-shadow: inset 0 0 0 100px var(--accent2);}

		&:hover { text-decoration: none;}}
</style>