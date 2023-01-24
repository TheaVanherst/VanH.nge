<script>

</script>

<nav>
    <div class="container square"><img src="/profilePicture.jpg"></div>
    <a href="/about"> about lol </a>
    <a href="/"> home lol </a>
</nav>

<style lang="scss">
    nav {
        max-width: 100%;

        > * {
	        max-width: fit-content;}
    }

	.square {
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }
    img {
	    max-width: 100%;
    }

    .container {
        border-radius: var(--outerRadius);
        border: 1px solid var(--accent1);
        overflow: hidden;
    }
</style>