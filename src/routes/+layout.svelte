<script>
	import '../styles.scss';

	import Route from "$components/general/routePreview.svelte"
	import Banner from "$components/general/banner.svelte"
	import Background from "$components/general/background.svelte"

	import Navigation from "$components/general/navigation.svelte"
	import Transition from "$lib/handlers/transitionWrapper.svelte";

	import { scrollPos } from '$stores/accessibilityController';

	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<page>
	<Banner/>
	<main>
		<div class="col1 col">
			<Navigation data={data}/>
		</div>
		<div class="wrapper col">
			<Route/>
			<Transition>
				<slot/>
			</Transition>
		</div>
	</main>
</page>

<style lang="scss">
	/* TODO: column management */

	$padding: 15px;

	page {
		display: 	block;
		padding: 	$padding;
		margin: 	0 auto;

		max-width:  var(--maxWidth);
		width: 		100%;

		box-sizing: border-box;
	}

	main {
		width: 		100%;
		gap: 		var(--containerPadding);
		display: 	flex;

		.col {
			height: 	max-content;
			width:		inherit;
			display:	block;

			&.col1 {
				width: 23%;}

			&.wrapper {
				width: 77%;}
		}
	}

</style>
