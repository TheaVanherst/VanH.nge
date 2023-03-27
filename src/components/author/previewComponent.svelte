<script>
    import HoverContainer 	from "$components/globals/containers/hoverContainer.svelte";
    import SanityImage 		from "$lib/serializer/imageBuilder.svelte";

	export let author = undefined;
    console.log(author.categories?.[0]?.title);
</script>

<HoverContainer
		id={author._id} urlDirect="/author/{author.slug}"
		padding="0px">
	<div class="profileBanner">
		<div>
			<SanityImage image={author.profileBanner}/>
		</div>
	</div>
	<div class="table">
		<div class="pfp">
			<SanityImage image={author.userPortrait}/>
		</div>
		<div class="profile">
			<h3>
				{author.fullName}
			</h3>
			<p class="handle">
				@{author.handle}
			</p>
			<p class="description">
				{author.shortDesc}
			</p>
			<div class="tags">
				{#if author.categories}
					{#each author.categories as tag}
						<span>{tag.title}</span>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</HoverContainer>

<style lang="scss">
	.profileBanner {
		display: inline-grid;
		vertical-align: top;
		overflow: hidden;
		width: 		100%;
		height: 	100px;

		> * {
			min-height: 100px;
		}
	}

	.table {
		display: 	flex;
		margin: 	var(--containerPadding);
		overflow: 	hidden;

		> { vertical-align: top;
			display: 		table-cell;}

		.pfp {
			$pfp: calc(100px + (var(--containerPadding) * 2));

			z-index:	1;
			max-width:	94px;
			max-height:	94px;
			min-width:	94px;
			min-height:	94px;

			aspect-ratio: 1/1;
			display: 	block;
			border-radius: 5px;

			overflow: 		hidden;}
	}

	.profile {
		margin-left: var(--containerPadding);
		.handle {
			margin-top: 3px;
			color: 	var(--backgroundAccent1);}
		.description {
			margin-top: 10px;}
		.tags {
			margin-left: -5px;
			margin-top: 10px;

			span {
				padding: 3px 10px;
				margin-right: 5px;
				background: var(--accent3);
				border-radius: 5px;
			}
		}
	}


</style>