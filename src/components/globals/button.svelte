<script>
    import { urlChanger } from '$stores/directoryController.js';

    export let push = null;
</script>

<a href={push}
   class:clickable={!!push}
   on:click={urlChanger(push)}>
    <div class="powerBar"><div></div></div>
    <div class="title neon"><p><slot/></p></div>
</a>

<style lang="scss">
    a {
        counter-increment:  section;
        margin-bottom:      10px;
        width:              100%;
        display:            flex;

        &:before {
            position:   absolute;
            font-size:  10px;
            margin:     -10px 0 0 -10px;
            content:    "D5" counter(section);}

        > * {
            display:        inline-flex;
            vertical-align: bottom;}

        .powerBar {
            height:     25px;
            width:      40%;
            margin-left:    10px;

            background: var(--accent1);
            overflow: hidden;

            > div {
                width:      25px;
                height:     10px;
                background: var(--accent3);}
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
            > .powerBar {
                background:         var(--darkAccent4);
                > * {background:    var(--darkAccent3);}}
            > .title {
                border:     1px solid var(--darkAccent3);
                p {color:   var(--darkAccent3);}}
        }
    }
</style>