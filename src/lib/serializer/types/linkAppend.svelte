<script>
    import navigation from "$stores/navigationDirectories.js";
    import { urlChanger } from "$stores/directoryController.js";

    export let portableText = null;

    let url =       undefined;
    let focus =     '_blank';
    let internal =  false;

    const
        search = (slug) => {    return (navigation.find(e => e.local === slug)).path;},
        target = () => {        return portableText?.value?.blank ? '_blank' : '_self';},
        reference = () => {     return internal ? urlChanger(url) : null;}

    if (portableText?.markType) {
        if (portableText.value._type === "internalLink"){
            if (portableText.value.postSlug){
                // Internal URLS;
                focus = target();
                url = search(portableText.value?.postFormat) + "/" + portableText.value.postSlug;
                internal = true;}}
        else if (portableText.value._type === "externalLink") {
            // External URLS
            focus = target();
            url = portableText.value.href;}}
    else {
        //manually inserted links
        focus = target();
        url = portableText;
    }
</script>

<a on:click={reference} href={url} target={focus}>
    <slot />
</a>

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