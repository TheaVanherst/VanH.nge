<script>
    export let handle, linkUrl;
    export let content;
</script>

<div class="handle">
    {content}
    {#if linkUrl}
        <a href="https://twitter.com/{linkUrl}">
            <b>
                {handle}
            </b>
        </a>
    {:else}
        <b>
            {handle}
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
        color:          var(--accent2)}
    a > b {
        color: var(--accent3);}

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