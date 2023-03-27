<script>
    import SanityImage 		from "$lib/serializer/imageBuilder.svelte";

    export let author = undefined;
</script>

<div class="container">
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
			<h4>
				{author.fullName}
			</h4>
			<p class="handle">
				@{author.handle}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		background: 	var(--backgroundTrans);
		border-radius: 	10px;
		overflow: 		hidden;
		width: 			50%;
	}

	.profileBanner {
		display: 		inline-grid;
		vertical-align: top;
		overflow: 		hidden;
		height: 		35px;

		> * {
			min-height: 35px;}
	}

	.table {
		display: 	flex;

		> { vertical-align: top;
			display: 		table-cell;}

		.pfp {
			max-width:	72px;
			max-height:	72px;
			min-width:	72px;
			min-height:	72px;

			margin:    -30px 0 -25px 5px;
			border: 	1px solid var(--background);
			z-index: 	1;

			border-radius: 	5px;
			overflow: 		hidden;}
	}

	.profile {
		padding: 5px 15px 8px;
		.handle {
			margin-top: 3px;
			color: 	var(--accent3);}
	}
</style>