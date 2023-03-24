<script>
    import { urlChanger, urlStoreArr }  from '$lib/controllers/directoryController.js';
    import navigation                   from "$lib/controllers/navigationDirectories.js";

    export let push = "";
</script>

<a href={push}
    class:curRoot={"/" + $urlStoreArr[1] === push}
    class:embedded={"/" + $urlStoreArr[1] === push && $urlStoreArr.length > 2 && "/"}
    on:click|preventDefault={urlChanger("/" + $urlStoreArr[1] !== push ? push : navigation[0].path)}>
    <div class="powerBar">
        <div class="left">
            <div class="highlight"></div>
        </div>
        <div class="right">
            <div></div>
        </div>
    </div>

    <div class="title neon">
        <p>
            <slot/>
        </p>
    </div>
</a>

<style lang="scss">
    $width: 40%;

    @mixin cgm($colour, $highlight){
        &:before {      color:      $highlight;}
        .powerBar {
            > div {     background: $colour;}
            .highlight {background: $highlight;}}
        .title {        border:     1px solid $highlight;
            p {         color:      $highlight;}}}

    a {
        counter-increment:  section;
        padding-bottom:     10px;
        display:            flex;

        &:before {  //fake button IDS
            position:   absolute;
            margin:    -10px 0 0 -10px;

            font-size:  10px;
            content:    "D5" counter(section);
        }

        > * {
            display:        inline-flex;
            vertical-align: bottom;}

        .powerBar {
            width:          $width;
            margin-left:    10px;
            transition:
                width .05s .5s ease-in-out,
                margin-left .05s ease-in-out;

            > div {
                width:      calc(100% - $width);
                transition: margin-right .05s .5s ease-in-out;

                .highlight {
                    width:      25px;
                    height:     10px;}}}

        .title {
            height:         23px;
            margin-left:    10px;

            background:     var(--background);

            p {
                margin:     auto 0;
                padding:    0 5px;
                transform:  scale(1, 1.2);

                text-transform: uppercase;
                font-weight:    800;}}

        @include cgm(var(--accent1), var(--accent3));

        &:hover {
            margin-left:    -5px;
                @include cgm(var(--accent3), var(--darkAccent3));}

        &.curRoot {     margin-left:    -5px;
                @include cgm(var(--darkAccent4), var(--darkAccent3));
            .powerBar { width:          calc($width + 10px);
                .left { margin-right:   10px;}}
            &:hover {
                @include cgm(var(--darkAccent3), var(--darkAccent4));
                &.embedded {
                    @include cgm(var(--accent4), var(--accent1));}}}
    }
</style>