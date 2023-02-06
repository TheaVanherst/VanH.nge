<script>
    import { page } from "$app/stores";
    import { urlChanger } from '../../stores/directoryController.js';

    export let
        push = null;
</script>

<a href={push} class:active={$page.url.pathname === push} on:click={urlChanger(push)}> <!--* TODO: this is broken -->
    <p>
        <slot/>
    </p>
</a>

<style lang="scss">
    a {
        text-decoration: none;

        display: block;

        padding: 5px;

        background-color: black;
        color: var(--accent1);
        border-radius: var(--innerRaidus);

	    border: 1px solid var(--darkAccent1);
        border-left: 2px solid var(--accent1);
	    border-right: 2px solid var(--accent1);

        transition: all .1s ease-in-out;

        &:not(:first-child){
	        margin-top: 10px;
        }

        &:hover {
            color: var(--accent3);
            border-color: var(--accent3);
        }

        &.active {
	        color: var(--accent3);
	        border-color: var(--accent3);
        }

        p {
	        font: 15px monospace;
            vertical-align: center;
            margin: 0 auto;
            width: min-content;
            text-wrap: none;

	        line-height: 	100%;
        }
    }
</style>