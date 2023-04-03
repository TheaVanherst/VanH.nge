<script>
	// general shit
	import '../styles.scss';

    // global query handlers
    import MobileQuery 		from "$lib/handlers/mobileQuery.svelte";
    import { scrollPos } 	from '$lib/controllers/accessibilityController';

	// navigation bar
	import ProfileBar 	from "$components/layout/profileBar.svelte";
	import Background 	from "$components/layout/background.svelte"

    // page top
    import Route 		from "$lib/controllers/routeController.svelte"
    // import Transition 	from "$lib/handlers/transitionWrapper.svelte";
    import Transition 	from "$lib/handlers/newTransitionWrapper.svelte";

    // sidebar
    import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";
    import Contents 			from '$components/layout/contents/contentList.svelte';
    import SimplifiedGallery 	from "$components/generic/simplifiedGallery.svelte";

    // temp
    import { fade, slide }	from "svelte/transition";

	export let data = null;

    import { page } from "$app/stores";
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<div class="layout table" id="layout">

	<MobileQuery query="(min-width: 900px)" let:matches>
		{#if matches}

			<div class="profileContent">
				<PageScrollWrapper>
					<ProfileBar/>
				</PageScrollWrapper>
			</div>

		{/if}
	</MobileQuery>

	<div class="pageContent">
		<Route/>
		<div class="table">
			<div class="pageDataWrapper">
				<Transition>
					<slot/>
				</Transition>
			</div>

			<MobileQuery query="(min-width: 640px)" let:matches>
				{#if matches}

					{#if !!$page.data.contentsList || !!$page.data.featuredProject}
						<div class="pageNavigation">
							<PageScrollWrapper>
								{#if !!$page.data.contentsList}
									<Contents data={$page.data.contentsList}/>
								{/if}
								{#if !!$page.data.featuredProject}
									<div transition:slide id="test">
										{#key $page.data.featuredProject[0]}
											<div transition:fade>
												{#each $page.data.featuredProject as artElement}
													<SimplifiedGallery post={artElement}/>
												{/each}
											</div>
										{/key}
									</div>
								{/if}
							</PageScrollWrapper>
						</div>
					{/if}

				{/if}
			</MobileQuery>

		</div>
	</div>
</div>

<style lang="scss">
	#test {
		> *:nth-child(0){
			position: relative;
		}
		> *:nth-child(1){
			position: absolute;
		}
	}


	* {
		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: 	border-box; /* Firefox, other Gecko */
		box-sizing: 		border-box; /* Opera/IE 8+ */
	}

	.layout {
		margin: 	0 auto;
		padding: 	var(--containerPadding);

		max-width:  	1280px;
	}

	.profileContent {
		min-width: 		222px;
		max-width: 		25%;}
	.pageContent {
		width: 			100%;}

	.table {
		width: 		100%;
		height: 	100%;

		display: 	flex;
		gap: 		15px;

		> * {
			display: table-cell;
			position: relative;} }

	.pageDataWrapper {	transition: width .3s ease-in-out;
						width: 			100%;}
	.pageNavigation {	min-width: 		235px;}
</style>
