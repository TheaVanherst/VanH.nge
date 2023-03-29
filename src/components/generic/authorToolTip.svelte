<script>
    import SanityImage 		from "$lib/serializer/imageBuilder.svelte";

    export let author = undefined;

    let h = false;
	let p, c;
    let o;

    $: if(!!c) o = p.offsetLeft + (p.scrollWidth / 2) - (c?.scrollWidth / 2);
</script>

<span
	class="holder"
	bind:this={p}
	on:mouseover={	() => h = true}
	on:mouseleave={	() => h = false}>
	<a href="/authors/{author.slug}">
		<slot />
	</a>

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
</span>

<style lang="scss">
	#tooltip {
		padding-top: 10px;
		position: 	absolute;
		z-index: 	100;
	}

	.container {
		background: 	var(--backgroundTrans);
		border-radius: 	4px;
		border: 		1px solid var(--background);
		backdrop-filter: blur(2px);}

	.profileBanner {
		height: 		35px;}

	.table {
		display: 	flex;

		> { vertical-align: top;
			display: 		table-cell;}

		.pfp {
			width:	72px;
			height:	72px;

			margin:    -30px 0 -25px 5px;
			border: 	1px solid var(--background);
			z-index: 	1;
		}
	}

	.profile {
		padding: 5px 15px 8px 8px;
		.handle {
			margin-top: 3px;
			color: 	var(--accent3);}
	}
</style>