<script>
    import navigation       from "$lib/stores/navigationDirectories.js";
    import { urlChanger }   from "$lib/stores/directoryController.js";

    export let portableText = null;
    let { value } = portableText;

    let url =       undefined;
    let focus =     '_blank';
    let internal =  false;

    // this is all a bit of a mess, and needs a recode tbh.
    // imo, I would just separate the portable text link appender from the regular ref appender.

    const
        target = (r) => {
            return r ? '_blank' : '_self';},
        reference = () => {
            if (internal || focus === '_self') {
                urlChanger(url);}};

    if (value) {
        // checks if import is the serializer

        if (value._type === "internalLink") {
            // Internal URLS;
            if (value.postSlug){
                focus = target(value.blank);
                url = (navigation.find(e => e.local === value.postFormat)).path + "/" + value.postSlug;
                internal = true;}}

        else if (value._type === "externalLink") {
            // External URLS
            focus = target(value.blank);
            url = value.href;
        }}

    else {
        //manually inserted links
        url =   portableText[0];
        focus = target(portableText[1]);
    }
</script>

{#if url}
    <a class="redirect" on:click={reference} href={url} target={focus}>
        <slot />
    </a>
{:else} <!-- this will appear on post previews -->
    <a class="nonClickable">
        <slot />
    </a>
{/if}

<style lang="scss">
    a {
        position:   relative;

        transition: color .2s ease-in-out,
                    box-shadow .2s ease-in-out;

        text-decoration:    underline 1px;
        font-weight:        600;

        margin:         0 -2px;
        padding:        0 2px 0 1px;
        box-shadow:     inset 0 0 0 0 var(--darkAccent3);
        color:          var(--accent3);

        &:hover {
            text-decoration:    none;
            box-shadow:         inset 0 0 100px 0 var(--accent3);
            color:              var(--textColourInvert);
        }

        &::selection {
            color:      var(--background);
            background: var(--accent3)
        }
    }
</style>