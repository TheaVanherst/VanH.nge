<script>
    export let time, tags;

    const relativeTime = (time) => {
        return ((new Date() - new Date(time)) / (1000 * 3600 * 24) < 8);}
</script>

<tags>
    {#if relativeTime(new Date(time))}
        <tag class="new">NEW</tag>
    {/if}
    {#each tags as tag}
        <tag>{tag}</tag>
    {/each}
</tags>

<style>
    tags {
        width: calc(100% + var(--containerPadding));
        display:    inline-block;
	    font-size: 0;}
    tags > tag {
        font-family: 	'Lucida Console', sans-serif;
        font-size:      12px;

        border-radius:  var(--innerRaidus);
        background:     var(--background);
        transition:     background 0.5s;

        display:    inline-flex;
        padding:    5px var(--containerPadding) 2px var(--containerPadding);
        margin:     0 var(--contentPaddingX) var(--contentPaddingY) 0;
        border:     1px solid var(--accent1);}
    tags > tag:last-of-type {
        margin:    0 var(--contentPaddingX) var(--containerPadding) 0;
    }
    tag:hover {
        cursor:         pointer;
        color:          var(--textColourInvert);
        background-color: var(--accent1);}
    tag:hover::selection {
        color: 				var(--accent1);
        background-color: 	var(--background);}

    .new {
        background: linear-gradient(-45deg, var(--accent3), var(--accent4), var(--accent2));
        background-size: 800% 800%;
	    border:     1px solid var(--accent3);
	    animation:  gradient 15s ease infinite;

        color:      white;
        font-weight: 800;}
    .new:hover {
        animation:  wiggle 0.5s ease infinite;}
</style>