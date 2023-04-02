<script>
	import '../styles.scss';

	import ProfileBar 		from "$components/layout/profileBar.svelte";
	import Background 		from "$components/layout/background.svelte"

	import { scrollPos } 	from '$lib/controllers/accessibilityController';

    import Route 				from "$lib/controllers/routeController.svelte"
    import Transition 			from "$lib/handlers/transitionWrapper.svelte";

    import PageScrollWrapper 	from "$lib/handlers/pageScrollSticker.svelte";
    import Contents 			from '$components/layout/contents/contentList.svelte';

    import MobileQuery from "$lib/handlers/mobileQuery.svelte";

	export let data = null;
    import {page} from "$app/stores";
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
					{#if !!$page.data.contentsList}
						<div class="pageNavigation">
							<PageScrollWrapper>
								<Contents data={$page.data.contentsList}/>
							</PageScrollWrapper>
						</div>
					{/if}
				{/if}
			</MobileQuery>
		</div>
	</div>
</div>

<style lang="scss">
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
		min-width: 		235px;
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

	.pageDataWrapper {	width: 			100%;}
	.pageNavigation {	min-width: 		235px;}
</style>
