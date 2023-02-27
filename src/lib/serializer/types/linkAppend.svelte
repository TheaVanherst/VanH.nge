<script>
    export let portableText = null;
</script>

{#if portableText.value}
    <a href={portableText.value.href} target="_blank">
        <slot />
    </a>
{:else}
    <a href={portableText} target="_blank">
        <slot />
    </a>
{/if}

<style lang="scss">
    a {
        text-decoration: underline 1px;
        font-weight: 600;
        color: var(--accent3);
        position: relative;

        margin: 0 -.25rem;
        padding: 0 .25rem;

        border-radius: var(--innerRaidus);
        box-shadow: inset 0 0 0 0 var(--darkAccent3);
        transition: color .2s ease-in-out,
                    box-shadow .2s ease-in-out;

        &:hover {
            text-decoration: none;
            box-shadow: inset 0 0 100px 0 var(--accent3);
            color: var(--textColourInvert);
        }

	    &::selection {
            color: var(--background);
            background-color: var(--accent3)
        }
    }
</style>