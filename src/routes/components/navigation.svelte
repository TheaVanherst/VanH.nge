<script>
    import Button from './navigationButtons.svelte';
</script>

<nav>
    <div class="container square">
        <img src="/profilePicture.jpg">
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

	    pointer-events: none;

        &:hover a {
	        pointer-events: auto;
        }
	    &:hover {
            border-color: var(--accent3);
        }
    }

	.square {
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }

    .container {
        border-radius: var(--innerRaidus);
        border: 1px solid var(--accent1);
        overflow: hidden;

	    img {
		    max-width: fit-content;
		    max-width: 100%;
	    }
    }
</style>
