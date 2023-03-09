<script>
    import { urlChanger, urlStoreArr, directionY } from '$lib/stores/directoryController.js';
    import navigation from "$lib/stores/navigationDirectories.js";
    export let push = null;

    $: console.log($urlStoreArr);
    $: directionY
</script>

<a href={push}
   class:clickable={!!push}
   class:active={$urlStoreArr[1] === push}
   on:click={urlChanger(push)}>
    <div class="powerBar">
        <div class="left">
            <div class="highlight">

            </div>
        </div>
        <div class="right">
            <div>

            </div>
        </div>
    </div>

    <div class="title neon">
        <p>
            <slot/>
        </p>
    </div>
</a>

<style lang="scss">
    a {
        counter-increment:  section;
        padding-bottom:      10px;
        display:            flex;

        &:before {  //fake button IDS
            position:   absolute;
            margin:    -10px 0 0 -10px;

            font-size:  10px;
            color:      var(--accent3);
            content:    "D5" counter(section);
        }

        > * {
            display:        inline-flex;
            vertical-align: bottom;}

        .powerBar {
            width:          40%;
            margin-left:    10px;
            overflow:       hidden;

            transition: width .05s .5s ease-in-out, margin-left .05s ease-in-out;

            > div {
                background: var(--accent1);
                width:      50%;
                transition: margin-right .05s .5s ease-in-out;

                .highlight {
                    width:      25px;
                    height:     10px;
                    background: var(--accent3);
                }
            }
        }

        .title {
            height:         23px;
            margin-left:    10px;

            background:     var(--background);
            border:         1px solid var(--accent3);

            p {
                margin:     auto 0;
                padding:    0 5px;
                transform:  scale(1, 1.2);

                text-transform: uppercase;
                color:          var(--accent3);
                font-weight:    800;}
        }

        &:hover {
            .powerBar {
                margin-left:    5px;
                > div {     background: var(--darkAccent3);} } }

        &.active {
            .powerBar {
                width:          calc(40% + 10px);
                margin-left:    5px;

                > div {     background:     var(--darkAccent4);}
                .left {     margin-right:   10px;}
                .highlight {background:     var(--darkAccent3);}}
            &::before {     color:          var(--darkAccent3);}
        }
    }
</style>