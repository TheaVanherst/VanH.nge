<script>
    export let tagData;
    export let direction = "left";
</script>

<!--todo: Fix the vertical alignment issue. -->

<tag class="{direction}">
    <p>{tagData}</p>
</tag>

<style>
    tag {
        color:          white;
        line-height:    100%;
        font-size:      13px;

        padding:        4px 6px;
        margin:         0 4px -6px 7px;
        border-radius:  5px;

        transition:     margin 0.5s, opacity 0.5s;
        opacity:        1;

        background-color:   var(--accent3);

        vertical-align: middle;
        pointer-events: none;
        position:   absolute;}

    p {
        display:    inline;
        line-height: 100%;
    }

    tag:before, tag:after {
        font-size:      13px;
        position:       absolute;
        color:          var(--accent3);}

    tag.left:before {
        content:        "🢐";
        left:   -3px;}
    tag.right::after {
        content:        "🢒";
        right: -3px;}
</style>