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
		<div class="nav col">
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
	page {
		display: 	block;
		padding: 	var(--containerPadding);
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

			&.nav {
				min-width: 		25%;
				max-width: 		25%;}

			&.wrapper {
				z-index: 	2;
				min-width: 	calc(75% - var(--containerPadding));  //TODO: this is dumb
				max-width: 	calc(75% - var(--containerPadding));} //TODO: this is dumb
		}
	}

</style>
