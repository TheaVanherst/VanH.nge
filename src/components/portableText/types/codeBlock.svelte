<script>
    import hljs             from 'highlight.js/lib/core';

    /* language registering */

    import javascript       from 'highlight.js/es/languages/javascript';
    import css              from 'highlight.js/es/languages/CSS';
    import xml              from 'highlight.js/es/languages/XML';
    import json             from 'highlight.js/es/languages/JSON';
    import typescript       from 'highlight.js/es/languages/typescript';

    export let portableText = []
    let language = portableText.value.language;

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('typescript', typescript);

    /* image url generation */

    let clipboardIcon;
    let imgUrl = new URL("/codeTypes/" + language + ".webp",    import.meta.url).href;
    $: clipboardIcon = new URL("/icons/" + (copiedBool ? "copied" : "copy") + "Clipboard.webp", import.meta.url).href;

    /* code baking */

    let code = hljs.highlight(
        portableText.value.code, {
            language: language
        }).value;

    let Arr = code.split(/\n/g), temp = "";
    for (let i = 0; i < Arr.length; i++) {
        temp +=
            "<span class='fljs-Line'>" +
                Arr[i] +
            "</span>" + `\n`;
    }
    code = temp;

    /* animation setting */

    let copiedBool = false, hoverBool = false, clickedBool = false;
    const clicked = () => {
        if (!copiedBool) {
            copiedBool = true;
            clickedBool = true;
            navigator.clipboard.writeText(portableText.value.code);

            setTimeout(() => {
                copiedBool = false;
            }, 1337);
        }
    };
</script>

<code class="language-{language}">
    <div class="titleBar">
        <tab>
            <img class="languageIcon" src="{imgUrl}" alt=" ">
            <p>
                DemoCode.{language}
            </p>
        </tab>
        <copyTab
            class="copy"
            class:glow={copiedBool}
            class:clicked={clickedBool}
            on:mouseleave={() => (hoverBool = false)}
            on:mouseenter={() => (hoverBool = true)}
            on:click={clicked}>
            <p></p>
            <div class="copy">
                <img src="{clipboardIcon}" alt="Copy">
            </div>
        </copyTab>
    </div>
    <div class="codeData">
        {@html code}
    </div>
    <p class="colourScheme">Scheme <a href="https://github.com/TheaVanherst/TheaVanherst/blob/master/personaRes/Vansche_me.icls">Vansche.me</a> designed By TheaVanherst</p>
</code>

<style>
    code {
        display:        block;
        margin:         0 0 10px 0;
        border-radius:  5px;
        background:     black;
        border:         1px solid var(--backgroundAccent2);
        border-top:     var(--innerRaidus) solid var(--backgroundAccent2);
        color:          white;
        white-space:    pre-wrap;}

    .titleBar {
        border-top:     1px solid var(--backgroundAccent1);
        border-bottom:  1px solid var(--backgroundAccent1);}
    .titleBar img {
        filter:     contrast(-0) brightness(100);}

    tab {
        vertical-align:     middle;
        border-bottom:      2px solid var(--accent2);
        position:   relative;
        display:    inline-block;
        padding:    2px;
        height:     100%;}
    .titleBar > * {
        vertical-align: middle;
        display:        inline-flex;}
    .titleBar p {
        font-weight:    700;
        font-family:    Arial;
        color:          var(--backgroundAccent1);
        font-size:      11px;

        padding:    7px 7px 5px 3px;
        display:    inline-flex;}
    .titleBar .languageIcon {
        height:  17px;
        width:   17px;
        padding: 3px;}

    copyTab {
        padding:    2px 2px 2px 7px;
        float:      right;}

    copyTab p:before { /* this is a bit silly */
        opacity:    1;
        content:    "Copy to clipboard"}
    copyTab.glow p:before {
        color:      var(--accent3);
        content:    "Copied to clipboard!"}

    copyTab .copy {
        padding:    3px;
        margin:     2px;
        height:     13px;
        width:      13px;

        border-radius:  3px;
        transition:     background-color 0.2s ease;
        border:         1px solid var(--accent2);
        background:     var(--accent2);}
    copyTab .copy img {
        width:      inherit;
        height:     inherit;}

    copyTab.clicked .copy {
        border:     1px solid var(--accent2);
        background: var(--darkAccent2);}
    copyTab:hover .copy {
        border:     1px solid var(--accent3);
        background: var(--accent3);}
    copyTab.glow .copy {
        border:     1px solid var(--accent3);
        background: var(--darkAccent3);}

    .codeData {
        display:    inline-block;
        margin:     0 0 0 35px;
        padding:    5px 5px 5px 12px;
        position:   relative;

        border-left:    1px solid var(--backgroundAccent1);
        background:     black;}

    .colourScheme {
        color:          var(--backgroundAccent1);
        font-family:    Arial;
        font-size:      11px;
        padding:        6px 5px 4px;
        background:     var(--backgroundAccent2);}
    .colourScheme a {
        color:      var(--accent2);}

</style>