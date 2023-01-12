<script>
    export let portableText
</script>

<a href={portableText.value.href} target="_blank">
    <slot />
</a>

<style>
    a {
        text-decoration: none;
        font-weight:    600;
        color:      var(--accent3);
        position:       relative;}
    a:hover {
        text-decoration: underline;}

    p {
        margin:     0;
        padding:    0;
        z-index:    2;

        position:   relative;
        display:    inline;}
    p:hover {
        text-decoration: underline;}
</style>