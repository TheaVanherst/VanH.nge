<script>
    import navigation       from "$lib/controllers/navigationDirectories.js";

    export let portableText = null;
    let { value } = portableText;

    let url =       undefined;
    let focus =     '_blank';

    const
        target = (r) => {
            return r ? '_blank' : '_self';};

    if (value) {
        // checks if import is the serializer

        if (value._type === "internalLink") {
            // Internal URLS;
            if (value.postSlug){
                focus = target(value.blank);
                url = (navigation.find(e => e.local === value.postFormat)).path + "/" + value.postSlug;}}

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
    <a class="redirect" href={url} target={focus}>
        <slot />
    </a>
{:else} <!-- this will appear on post previews -->
    <a class="nonClickable">
        <slot />
    </a>
{/if}

<style lang="scss">
    @mixin cgm($size, $colour, $background){
        box-shadow:     inset $size $size 0 0 $background;
        color:          $colour;}

    a {
        position:   relative;

        transition: color .2s ease-in-out,
                    box-shadow .2s ease-in-out;

        text-decoration:    underline 1px;
        font-weight:        600;

        margin:         0 -2px;
        padding:        0 2px 0 1px;

            @include cgm(0, var(--accent3), var(--darkAccent3));

        &:hover {
            text-decoration:    none;
            @include cgm(100px, var(--textColourInvert), var(--accent3));}

        &::selection {
            @include cgm(100px, var(--textColourInvert), var(--accent3));}
    }
</style>