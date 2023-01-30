<script>
	import '../styles.scss';
	import Header from "./components/header.svelte"
	import Background from "./components/background.svelte"

	import Navigation from "./components/navigation.svelte"

	import Transition from "$lib/transitions/transitionFly.svelte";
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

	$row1: 275px;
	$row2: 520px;
	$row3: 250px;

	$padding: 15px;
	$width: $row1 + $row2 + $row3 + ($padding * 2);

	page {
		display: 	block;
		padding: 	$padding;
		margin: 	0 auto;

		max-width:  $width;
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
				width: $row1;}
		}
	}

</style>
