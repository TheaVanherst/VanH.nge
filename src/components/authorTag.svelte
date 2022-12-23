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

    p {
        font-family:    "Poppins", serif;
        font-weight:    500;
        margin:         0;
        padding:        0;

        width:          min-content;
        line-height:    100%;}

    *:not(a) > b {
        line-height: 100%;
        color:          var(--acctColour)}
    a > b {
        color: var(--highColour);}

    .handle {
        font-family:    "Poppins", serif;
        font-size:      13px;
        line-height:    100%;

        height:     14px;
        display:    table-cell;
        width:      min-content;
        padding:    calc(var(--contentPadding) - 2px) var(--contentPadding);
    }
    .handle:not(:first-child){
        border-left:    1px solid var(--borderColor)
    }
</style>