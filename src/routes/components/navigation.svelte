<script>
    import SanityImage  from '../../components/sanityImage.svelte'
    export let data;
    $: data = data[0][0]

    import Button from './navigationButtons.svelte';
</script>

<nav>
    <div class="container">
        <div class="profile">
            <img src="/profilePicture.jpg">
        </div>
        <div class="prompt" style="--stringLength: {data.fullName.length}">
            <p>{data.fullName} 🦌</p><a href="https://twitter.com/{data.twitter}"><ico/></a>
        </div>

    </div>
    <div class="buttonWrapper">
        <div class="title">
            <t>NAVIGATION</t>
        </div>
        <Button push="/">Home</Button>
        <Button push="/about">About</Button>
        <Button push="/artchive">Artchive</Button>
    </div>
</nav>

<style lang="scss">
    nav {
        max-width: 100%;
	    padding: var(--containerPadding);

	    background-color:   var(--backgroundTrans);
	    border-radius:      var(--outerRadius);
	    border:             1px solid var(--accent1);

	    transition:
			    border .1s ease-in-out;

        & > *:not(:first-of-type){
            margin-top: 15px;
        }
    }

    .container {
        width: 100%;

        > * {
	        border-radius: var(--innerRaidus);
        }

	    .profile {
		    border: 1px solid var(--accent1);
		    margin-bottom: 15px;

		    max-width:      fit-content;
            aspect-ratio:   1/1;
            overflow:       hidden;

            img {
                width:  100%;
	            pointer-events: none;
            }
	    }

        .prompt {
            padding: 10px;
            background-color: var(--accent1);

	        p {
                $stringLength: calc(var(--stringLength) + 3);

		        font: 15px monospace;
		        text-wrap: none;
		        line-height: 100%;
		        color: black;

		        width: calc($stringLength * 1ch);
		        animation:
                    typing 1.2s steps($stringLength),
                    blink .5s step-end infinite alternate;

		        white-space: nowrap;
		        overflow: hidden;
		        border-right: 9px solid transparent;

		        &::selection {
			        color: 				var(--accent1);
			        background-color: 	black;}
	        }
        }
    }

    .buttonWrapper {
        .title {
            .t {

            }
        }
    }

    @keyframes typing {
	    from {  width: 0;}}

    @keyframes blink {
	    50% {   border-color: black;}}
</style>
