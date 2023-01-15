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
    .handle {
        font-size:      13px;
        line-height:    100%;

        display:    inline-block;
        width:      min-content;
        padding:    0 var(--contentPaddingX);
        margin:     var(--contentPaddingY) 0;}
    .handle:not(:first-child){
        border-left:    1px solid var(--textColour);}


    a {
        text-decoration: underline 1px;
        font-weight:    600;
        color:          var(--accent3);

        margin:     0 -.25rem;
        padding:    .125rem  .25rem;

        border-radius:  var(--innerRaidus);
        box-shadow:     inset 0 0 0 0 var(--darkAccent3);
        transition:     color .2s ease-in-out, box-shadow .2s ease-in-out;}
    a:hover {
        text-decoration: none;
        box-shadow:     inset 0 0 100px 0 var(--accent3);
        color:          var(--textColourInvert);}
    a b::selection {
        color: 				var(--background);
        background-color: 	var(--accent3)}

    .handle > b {
        line-height: 100%;
        color:          var(--accent2);
        margin:     0 -.25rem;
        padding:    .125rem  .25rem;

        transition:     box-shadow .2s ease-in;
        border-radius:  var(--innerRaidus);
        box-shadow:     inset 0 0 0 0 var(--darkAccent2);}
    .handle > b:hover {
        box-shadow:     inset 0 0 0 1px var(--accent2);}

    .handle > b::selection {
        color: 				var(--background);
        background-color: 	var(--accent2)}
</style>