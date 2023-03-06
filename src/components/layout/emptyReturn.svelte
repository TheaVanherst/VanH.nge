
<script>
    import Container from "$components/globals/containers/container.svelte";

    export let errorType = 404;
    let errorMessage = "";

    switch (errorType) {
        case 400:
            errorMessage = "A major case of the bad request.";
            break;
        case 401:
            errorMessage = "You can't come in here.";
            break;
        case 403:
            errorMessage = "You shouldn't be here!";
            break;
        case 404:
            errorMessage = "Nothing was found, sorry!";
            break;
        case 500:
            errorMessage = "Server error? Yikes.";
            break;
        case 502:
            errorMessage = "A major case of the bad request.";
            break;
        case 503:
            errorMessage = "Seems like a skill issue going on here.";
            break;
        case 504:
            errorMessage = "Request time out! Try again later.";
            break;
        default:
            errorMessage = "idk wtf happened here lol";
            break;
    }
</script>

<Container>
    <div class="col">
        <img src="/error.png"/>
    </div>
    <div class="col content">
        <h1>
            {errorType}
        </h1>
        <p class="defaultMessage">
            {errorMessage}
        </p>

        <p class="customMessage">
            <slot/>
        </p>
    </div>
</Container>

<style lang="scss">
    .col {
        display: table-cell;
        height: 100%;
        vertical-align: top;

        > * {
            display: block;
        }

        &.content {
            padding: var(--containerPadding);
            width: 100%;
        }
    }

    img {
        width: 200px;
        height: 100%;
    }

    h1 {
        font-size:      65px;
        padding-bottom: 20px;
    }

    p {
        width: max-content;
        margin-bottom: var(--containerPadding);

        &.customMessage {
            border-right: 9px solid var(--textColour);
            animation:
                    blink .5s step-end infinite alternate;
        }
    }
</style>