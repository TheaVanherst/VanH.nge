<script>
	import '../styles.scss';
	import Header from "../components/general/header.svelte"
	import Background from "../components/general/background.svelte"

	import Navigation from "../components/general/navigation.svelte"

	import Transition from "$lib/layout/transitionFly.svelte";
	import message from '$lib/directoryController.js';

	export let data;

	let y;
</script>

<Background/>

<page style="--yPos: -{y}px">
	<Header/>
	<main>
		<div class="col1 col">
			<Navigation data={data} {$message} />
		</div>
		<Transition name={$message}>
			<slot/>
		</Transition>
	</main>
</page>

<svelte:window bind:scrollY={y} />

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
		}
	}

</style>
