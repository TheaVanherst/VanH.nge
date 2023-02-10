<script>
    import navigation from '$stores/navigationDirectories.js'
    import Container from "$components/generic/container.svelte";

    import Button from '$components/generic/navigationButton.svelte';
    import Switch from '$components/generic/toggleSwitch.svelte'

    import { motion } from '$stores/accessibilityController';

    export let data = null;
    data = data[0][0]
</script>

<Container>
    <img class="profile" src="/profilePicture.jpg">
    <div class="prompt">
        <div class="nameCard">
            <p style="--stringLength: {data.fullName.length}">{data.fullName} 🦌</p>
        </div>
        <a href="https://twitter.com/{data.twitter}" target="_blank">
            <img src="/icons/socialMedia/twitterLogo.png"/>
        </a>
    </div>
    <div class="buttonWrapper">
        {#each navigation as item}
            <Button push="{item.path}">{item.title}</Button>
        {/each}
        <Switch label="Reduced Motion" bind:bool={$motion}/>
    </div>
</Container>

<style lang="scss">
	.profile {
		border-radius:  var(--innerRaidus);
		border:         1px solid var(--accent1);

        object-fit:     cover;
		max-width:      fit-content;
		overflow:       hidden;

		margin-bottom:  15px;
		aspect-ratio:   1/1;
		width:          100%;
	}

	.prompt {
		display:    flex;
		gap:        10px;
		margin:     0 0 15px 0;

		> * {
			font-size:  0;
			padding:    10px;
			background-color:   var(--accent1);
			border-radius:      var(--innerRaidus);
		}

		.nameCard {
			p {
				$stringLength: calc(var(--stringLength) + 3);
				$timerElement: calc(var(--stringLength) / 10 * 1s);

				font: 14px monospace;
				line-height: 100%;
				color: black;

				width: calc($stringLength * 1ch);
				animation:
						typing $timerElement steps($stringLength),
						blink .5s calc($timerElement + 0.2s) step-end infinite alternate;

				white-space: nowrap;
				border-right: 2px solid black;
				overflow: hidden;

				&::selection {
					color: 				var(--accent1);
					background-color: 	black;}
			}
		}

		a {
			margin: 0 0 0 auto;

			img {
				margin: -4px;
				height: 22px;
				width: 22px;
				filter: contrast(0) brightness(0);
			}
		}
	}
</style>
