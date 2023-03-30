<script>
    import AuthorToolTip from "$components/generic/authorToolTip.svelte";

    export let portableText = null;
    let { value } = portableText;

    let url =       undefined;
    let focus =     '_blank';
</script>

{#if value._type === "internalLink"}
    {#if value.format === "author"}
        <AuthorToolTip author="{value.data}"/>
    {:else if value.format === "blogPost"}

    {/if}
{:else if value.href}
    <a class="redirect" href={value.href} target={value.blank ? '_blank' : '_self'}>
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