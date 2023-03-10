<script>
	import '../styles.scss';

	import Route from "$components/navigation/route.svelte"
	import Background from "$components/layout/background.svelte"

	import Navigation from "$components/navigation/navigation.svelte"
	import Transition from "$lib/handlers/transitionWrapper.svelte";

	import { scrollPos } from '$lib/stores/accessibilityController';

	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<div class="layout">
	<div class="nav">
		<Navigation data={data.userData}/>
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

		max-width:  1080px; // temporary
		width: 		100%;

		box-sizing: border-box;
		display: 	flex;

		> * {
			display: 	block;
			position:	relative;

			&.nav {
				max-width: 	300px;
				width: 		25%;
				min-width: 	220px;}

			&.page {	//kinda lazy
				width: 75%;}
		}
	}

</style>
