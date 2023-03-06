<script>
    import navigation from '$stores/navigationDirectories.js'
    import Button from '$components/navigation/navButton.svelte';
    import Switch from '$components/globals/toggleSwitch.svelte'

    import { motion } from '$stores/accessibilityController.js'

    export let data = null;
</script>

<div class="profileGraphic">
    <img src="/profileGraphic.png"/>
</div>

<div class="buttonWrapper">
    <div class="wrapperOffset">
        {#each navigation as item}
            <Button push="{item.path}">{item.title}</Button>
        {/each}
    </div>
</div>

<Switch label="Reduced Motion" bind:bool={$motion}/>

<style lang="scss">
	.profileGraphic {
        height:         500px;
        margin-bottom:  var(--containerPadding);

        > img {
            height:     550px;
            margin:     -20px 0 0 -105%;

	        position:   absolute;
	        animation:  float 6s ease-in-out infinite;
        }
	}

	@keyframes float {
		0% {    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.6);
			    transform:  translatey(0px);}
		50% {   box-shadow: 0 25px 15px 0 rgba(0,0,0,0.2);
			    transform:  translatey(-20px);}
		100% {  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.6);
			    transform:  translatey(0px);}
	}
</style>
