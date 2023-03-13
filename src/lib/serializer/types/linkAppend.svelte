<script>
    import navigation       from "$lib/stores/navigationDirectories.js";
    import { urlChanger }   from "$lib/stores/directoryController.js";

    export let portableText = null;
    let { value } = portableText;

    let url =       undefined;
    let focus =     '_blank';
    let internal =  false;

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
    @mixin cgm($colour, $background){
        box-shadow:     inset 0 0 0 0 $background;
        color:          $colour;}

    a {
        position:   relative;

        transition: color .2s ease-in-out,
                    box-shadow .2s ease-in-out;

        text-decoration:    underline 1px;
        font-weight:        600;

        margin:         0 -2px;
        padding:        0 2px 0 1px;

            @include cgm(var(--accent3), var(--darkAccent3));

        &:hover {
            text-decoration:    none;
            @include cgm(var(--textColourInvert), var(--accent3));}

        &::selection {
            @include cgm(var(--textColourInvert), var(--accent3));}
    }
</style>