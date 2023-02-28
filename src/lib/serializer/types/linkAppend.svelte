<script>
    import navigation from "$stores/navigationDirectories.js";
    import { urlChanger } from "$stores/directoryController.js";

    export let portableText = null;
    let { value } = portableText;

    let url =       undefined;
    let focus =     '_blank';
    let internal =  false;

    const
        search = (slug) => {    return (navigation.find(e => e.local === slug)).path;},
        target = () => {        return value?.blank ? '_blank' : '_self';},
        reference = () => {     if (internal && focus === '_self') {urlChanger(url);}};

    if (value) {
        if (value._type === "internalLink"){
            if (value.postSlug){
                // Internal URLS;
                focus = target();
                url = search(value.postFormat) + "/" + value.postSlug;
                internal = true;}}
        else if (value._type === "externalLink") {
            // External URLS
            focus = target();
            url = value.href;}}
    else {
        //manually inserted links
        focus = target();
        url = portableText;
    }
</script>

{#if url}
    <a class="redirect" on:click={reference} href={url} target={focus}>
        <slot />
    </a>
{:else}
    <a class="nonClickable">
        <slot />
    </a>
{/if}

<style lang="scss">
    a {
        text-decoration: underline 1px;
        font-weight: 600;
        position: relative;

        margin: 0 -.25rem;
        padding: 0 .25rem;

        transition: color .2s ease-in-out,
                    box-shadow .2s ease-in-out;

        box-shadow: inset 0 0 0 0 var(--darkAccent3);
        color: var(--accent3);

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