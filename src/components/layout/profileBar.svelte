<script>
    import { motion } from '$lib/controllers/accessibilityController.js'
    import navigation from '$lib/controllers/navigationDirectories.js';

    import Button 		from "$components/layout/navButton.svelte";
    import Switch 		from '$components/globals/components/toggleSwitch.svelte';
    import StatusBlock 	from "$components/globals/titles/nervStatusBlock.svelte";

    import RacingComp from "$components/globals/components/racingComp.svelte";
    import { navigationStatus, loadingStatus }   from '$lib/controllers/directoryController.js';
</script>

<div class="profileGraphic">
	<img src="/profileGraphic.png"/>
</div>

<StatusBlock
	title="TEST PLUG 00" substitle="MONITOR"
	external="THEA VANHERST" padding="0 0 10px"/>

<RacingComp
	colours="{['green','red','red']}"
	titles="{['STOP','SLOW','RACING']}"
	bools={[!$loadingStatus && !$navigationStatus, $loadingStatus, $navigationStatus]}/>

<div class="buttonWrapper">
	<div class="wrapperOffset">
		{#each navigation as item}
			<Button push="{item.path}">{item.title}</Button>
		{/each}
	</div>
</div>

<Switch label="Reduced Motion" bind:bool={$motion}/>

<!--<NervButton/>-->

<style lang="scss">
	.profileGraphic {
		height: 500px;
		width:  100%;
		margin: 0 0 var(--containerPadding) 0;

		display:            flex;
		justify-content:    center;

		> img {
			height:     550px;
			margin:     0 auto;

			position:   absolute;
			animation:  float 6s ease-in-out infinite;
		}
	}

	.buttonWrapper {
		margin-left: 	20px;
		margin-top: 	10px;
		border-left: 	2px solid var(--darkAccent3);

		.wrapperOffset {
			margin-left: -20px;
		}
	}

	@keyframes float {
		0% {	transform:  translatey(0px);}
		50% {	transform:  translatey(-20px);}
		100% {	transform:  translatey(0px);}
	}
</style>