<script>
    export let portableText
    import styles from "/src/components/presetStyling/pointerTag.css"

    let text = portableText.value.href,
        textSplit = text.split("/");
</script>

<a href={portableText.value.href} target="_blank">
    <p>
        <slot />
        <de>
            {textSplit[2]}
        </de>
    </p>
</a>

<style>
    a {
        font-weight:    600;
        position:       relative;}

    p {
        margin:     0;
        padding:    0;
        z-index:    2;

        position:   relative;
        display:    inline-block;
        color:      var(--acctColour);}
    p:hover {
        text-decoration: underline;}
</style>