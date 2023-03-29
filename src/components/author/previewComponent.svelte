<script>
    import HoverContainer 	from "$components/globals/containers/hoverContainer.svelte";
    import SanityImage 		from "$lib/serializer/imageBuilder.svelte";

	export let author = undefined;
</script>

<HoverContainer
		id={author._id} urlDirect="/authors/{author.slug}"
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
			<div class="authorName">
				<h3>{author.fullName}</h3>
				<h4>{author.verified.emoji}</h4> <!-- this needs the alt -->
			</div>
			<p class="handle">
				@{author.handle}
			</p>
			<p class="description">
				{author.shortDesc}
			</p>

			<div class="wrapper">
				<div class="tags">
					{#if author.categories}
						{#each author.categories as tag}
							<span>{tag.title}</span>
						{/each}
					{/if}
				</div>
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

		> div {
			min-height: 100px;
		}
	}

	.table {
		display: 	flex;
		margin: 	var(--containerPadding);
		overflow: 	hidden;

		> {
			vertical-align: top;
			display: 		table-cell;}
	}


	.pfp {
		$pfp: calc(100px + (var(--containerPadding) * 2));
		z-index:	1;
		max-width:	94px; max-height:	94px;
		min-width:	94px; min-height:	94px;

		display: 	block;
		border-radius: 5px;

		overflow: 		hidden;}

	.profile {
		margin-left: var(--containerPadding);
		display:	 grid;

		.authorName {
			display: flex;
			height: 1.4rem;

			> * {
				margin: 		0 5px auto 0;
				line-height: 	1.5rem;}
		}

		.handle {
			margin-top: 3px;
			color: 		var(--backgroundAccent1);}
		.description {
			margin-top: 10px;}
		.wrapper {
			overflow:	visible scroll;
			margin-top: 10px;}
	}

	.tags {
		height: 		100%;
		white-space: 	nowrap;
		display: 		flex;

		span {
			padding: 		3px 10px;
			background: 	var(--darkAccent3);
			border-radius: 	5px;

			&:not(:last-of-type){
				margin-right: 	5px;
			}
		}
	}


</style>