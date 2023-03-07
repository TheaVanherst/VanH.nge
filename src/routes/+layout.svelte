<script>
	import '../styles.scss';

	import Route from "$components/navigation/route.svelte"
	import Background from "$components/layout/background.svelte"

	import Navigation from "$components/navigation/navigation.svelte"
	import Transition from "$lib/handlers/transitionWrapper.svelte";

	import { scrollPos } from '$stores/accessibilityController';
	import { directory } from "$stores/directoryController.js";

	import { page } from '$app/stores';
	$directory = $page.url.pathname

	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<div class="layout">
	<div class="nav">
		<Navigation data={data}/>
	</div>
	<div class="page">
		<Route/>
		<Transition>
			<slot/>
		</Transition>
	</div>
</div>

<style lang="scss">
	.layout {
		margin: 	0 auto;
		padding: 	var(--containerPadding);
		gap: 		var(--containerPadding);

		max-width:  var(--maxWidth);
		width: 		100%;

		box-sizing: border-box;
		display: 	inline-flex;

		> * {
			display: 	block;
			position:	relative;

			&.nav {
				max-width: 25%;
				min-width: 25%;}

			&.page {	//kinda lazy
				width: calc(75% - var(--containerPadding));}
		}
	}

</style>
