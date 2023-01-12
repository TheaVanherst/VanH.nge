<script>
    import TagComponent from "./tagComponent.svelte";

    import { fade, fly } from 'svelte/transition';
    let hoverBool;

    export let handle, linkUrl;
    export let content;
</script>

<div class="handle"
     on:mouseleave={() => (hoverBool = false)}
     on:mouseenter={() => (hoverBool = true)}>
    {content}
    {#if linkUrl}
        <a href="https://twitter.com/{linkUrl}">
            <b>
                {handle}
                {#if hoverBool}
                    <e in:fade="{{duration: 100}}"
                       out:fade="{{duration: 100}}">
                        <TagComponent tagData={handle}/>
                    </e>
                {/if}
            </b>
        </a>
    {:else}
        <b in:fade="{{duration: 100}}"
           out:fade="{{duration: 100}}">
            {handle}
            {#if hoverBool}
                <e in:fade="{{duration: 100}}"
                   out:fade="{{duration: 100}}">
                    <TagComponent tagData={handle}/>
                </e>
            {/if}
        </b>
    {/if}
</div>

<style>
    a {
        text-decoration: none;}
    a:hover {
        text-decoration: underline;}

    *:not(a) > b {
        line-height: 100%;
        color:          var(--accent3)}
    a > b {
        color: var(--accent2);}

    .handle {
        font-size:      13px;
        line-height:    100%;

        display:    inline-block;
        width:      min-content;
        padding:    0 var(--contentPaddingX);
        margin:     var(--contentPaddingY) 0;
    }
    .handle:not(:first-child){
        border-left:    1px solid var(--textColour);
    }
</style>