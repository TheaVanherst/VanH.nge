<script>
    import HorizontalGrid from "$components/globals/todo/nervHorizontalGrid.svelte";
    import { relativeTime } from "$lib/builders/dateBuilder.js";

    export let time = undefined;    // so it doesn't cause errors with time relativity in the calc
    export let tags = [];   // forms array as a fallback to check the length of later

    tags = Array.isArray(tags) ? tags : [tags];

    for (let i in tags){
        if (tags[i]._type === "category"){ //this is dumb, but it "works".
            tags.unshift(tags.splice(i, 1)[0]);}}
    // TODO: rewrite this to prioritize unicode.
    // this took 3 hours and I cannot be fucked to find another solution.

    let vp;
    let x;
</script>

<div class="content">
    <div class="lineDiv orange"></div>

    <HorizontalGrid     offset={x / 0.6}
        tiny={true}     small={true}
        medium={true}   large={true}/>

    <div class="tagWrapper"
         bind:this={vp}
         on:scroll={() => x = vp.scrollLeft}>

        <div class="tagSleeve">
            {#if !!time && relativeTime(new Date(time)) / 86400 < 14}  <!-- two weeks -->
                <div class="tag category new">
                    <span class="hov">
                        🌈 NEW
                    </span>
                </div>
            {/if}

            {#if tags}
                {#each tags as tag, i}
                    <div class:highlight={tag._type === "category"}
                        class="tag category">
                        <span class="hov">
                            {tag.title}
                        </span>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    span {
        font-size: 12px;}

    /* Scrollbar overflow preset */
    .tagWrapper {
        display:    grid;
        overflow-x: scroll;

        .tagSleeve {
            display:        inline-block;
            white-space:    nowrap;
            min-width:      100%;}}

    .content {
        margin:     5px 0 var(--containerPadding) 0;

        .tag {
            counter-increment: section;
            display:        inline-grid;
            position:       relative;

            padding:        5px var(--containerPadding);
            margin:         16px 10px 0 0;

            font-size:      12px;
            line-height:    12px;

            background-color:   var(--backgroundTrans);
            cursor:             pointer;

            @mixin cgm($color) {
                border:     1px solid $color;
                color:      $color;
                ::selection {
                    background: $color!important;}}

            @mixin log($colour, $margin, $content){
                content:        $content;
                margin-top:     $margin;
                border-left:    1px solid $colour;
                color:          $colour;}

            @include cgm(var(--darkAccent3));
            &:hover {
                @include cgm(var(--accent3));}

            &.new {         @include cgm(var(--accent2));}
            &.highlight {   @include cgm(var(--accent1));}

            &:before, &:after {
                font-weight:    400;
                position:       absolute;
                margin-left:   -6px;}
            &:before {
                @include log(var(--darkAccent3), -15px, "+" counter(section));
                padding:        0 0 5px 5px;}
            &:after {
                @include log(var(--darkAccent3), 20px, " ");
                height:         3px;}

            &:last-of-type {
                margin-right: 0;}
        }

        &:last-child {
            margin-bottom: 0;}
    }
</style>