<script>
    import TagComponent from "../../tagComponent.svelte";
    import { fade, fly } from 'svelte/transition';
    let hoverBool;

    export let portableText

    let text = portableText.value.href,
        textSplit = text.split("/");
</script>

<a href={portableText.value.href} target="_blank"
   on:mouseleave={() => (hoverBool = false)}
   on:mouseenter={() => (hoverBool = true)}>
    <slot />
    {#if hoverBool}
        <p in:fade="{{duration: 100}}"
           out:fade="{{duration: 100}}">
            <TagComponent tagData={textSplit[2]}/>
        </p>
    {/if}
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