<script>
	import '../styles.scss';

	import ProfileBar 		from "$components/layout/profileBar.svelte";
	import Background 		from "$components/layout/background.svelte"

	import { scrollPos } 	from '$lib/controllers/accessibilityController';
    import Route 			from "$lib/controllers/routeController.svelte"
    import Transition 		from "$lib/handlers/transitionWrapper.svelte";
	export let data = null;
</script>

<svelte:window bind:scrollY={$scrollPos} />
<Background/>

<div class="layout" id="layout">
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
	* {
		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: 	border-box; /* Firefox, other Gecko */
		box-sizing: 		border-box; /* Opera/IE 8+ */
	}

	.layout {
		margin: 	0 auto;
		padding: 	var(--containerPadding);

		max-width:  1080px; // temporary
		width: 		100%;
		display: 	flex;

		gap: 15px;

		> * {
			display: 	block;
			position:	relative;

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
