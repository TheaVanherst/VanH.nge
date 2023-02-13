<script>
    import navigation from '$stores/navigationDirectories.js'
    import Button from '$components/generic/navigationButton.svelte';
    import Switch from '$components/generic/toggleSwitch.svelte'

    import { motion } from '$stores/accessibilityController'

    export let data = null;
    data = data[0][0]
</script>

<div class="profileGraphic">
    <img src="/profileGraphic.png"/>
</div>

<div class="prompt">
    <div class="nameCard">
        <p style="--stringLength: {data.fullName.length}">{data.fullName} 🦌</p>
    </div>
</div>

<div class="buttonWrapper">
    {#each navigation as item}
        <Button push="{item.path}">{item.title}</Button>
    {/each}
    <Switch label="Reduced Motion" bind:bool={$motion}/>
</div>

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

    .buttonWrapper, .prompt {
        z-index:    100;
        position:   relative;
    }

	.prompt {
		display:    flex;
		gap:        10px;
		margin:     0 0 15px 0;

		> * {
			font-size:  0;
			padding:    7px 10px;
			background-color:   var(--background);
			border-radius:      var(--innerRaidus);
            border:     1px solid var(--accent1);
		}

		.nameCard {
			p {
				$stringLength: calc(var(--stringLength) + 3);
				$timerElement: calc(var(--stringLength) / 10 * 1s);

				font:           14px monospace;
				line-height:    100%;
				color:          var(--textColour);
				white-space:    nowrap;

				width: calc($stringLength * 1ch);
				animation:
						typing $timerElement steps($stringLength),
						blink .5s calc($timerElement + 0.2s) step-end infinite alternate;

				border-right:   2px solid var(--textColour);
				overflow:       hidden;

				&::selection {
					color: 				var(--accent1);
					background-color: 	black;}
			}
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
