<script>
	import '../styles.scss';

	import Route from 		"$components/layout/navigation/route.svelte"
	import ProfileBar from 	"$components/layout/navigation/profileBar.svelte";
	import Background from 	"$components/layout/background.svelte"

	import Transition from 	"$lib/handlers/transitionWrapper.svelte";

	import { scrollPos } from '$lib/stores/accessibilityController';

	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<div class="layout">
	<div class="nav">
		<div>
			<ProfileBar/>
		</div>
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

		max-width:  1080px; // temporary
		width: 		100%;
		display: 	flex;

		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: 	border-box; /* Firefox, other Gecko */
		box-sizing: 		border-box; /* Opera/IE 8+ */

		gap: 15px;

		> * {
			display: 	block;
			position:	relative;

			-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
			-moz-box-sizing: 	border-box; /* Firefox, other Gecko */
			box-sizing: 		border-box; /* Opera/IE 8+ */

			&.nav {
				max-width: 	25%;
				width: 		25%;
				min-width: 	25%;
			}
			&.page {

				max-width: 	75%;
				width: 		75%;}
		}
	}
</style>
