<script>
	import '../styles.scss';

	import Route from "$components/layout/route.svelte"
	import Background from "$components/layout/background.svelte"

	import Navigation from "$components/layout/navigation.svelte"
	import Transition from "$lib/handlers/transitionWrapper.svelte";

	import { scrollPos } from '$stores/accessibilityController';
	import {directory} from "$stores/directoryController.js";

	import { page } from '$app/stores';
	$directory = $page.url.pathname

	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<page>
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
			display:	block;
			position: 	relative;

			&.col1 {
				width: 		25%;}

			&.col2 {
				flex-basis: 100%;
				max-width: 	65%;}

			&.wrapper {
				z-index: 	2;
				width: 		75%;}
		}
	}

</style>
