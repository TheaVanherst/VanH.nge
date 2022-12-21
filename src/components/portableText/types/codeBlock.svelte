<script>
    /* language registering */

    import hljs             from 'highlight.js/lib/core';

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
    $: clipboardIcon = new URL("/icons/" + (copiedBool ? "copied" : "copy") + "Clipboard.webp", import.meta.url).href; // TODO: pretty sure this is dumb

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

    import { fade } from 'svelte/transition';

    const animate = (node, args) => fade(node, args);

    let copiedBool = false, hoverBool = false;
    const clicked = () => {
        if (!copiedBool) {
            copiedBool = true;
            navigator.clipboard.writeText(portableText.value.code);

            setTimeout(() => {
                copiedBool = false;
            }, 1337);
        }
    };
</script>

<code class="language-{language}">
    <div class="codeType">
        <img class="languageIcon" src="{imgUrl}" alt=" ">
        <p class="language">{language}</p>
        <div class="copy"
             on:mouseleave={() => (hoverBool = false)}
             on:mouseenter={() => (hoverBool = true)}
             on:click={clicked}>

            <img src="{clipboardIcon}"> <!-- TODO: this needs formatting to be a lot -->

            {#if copiedBool}
                <p><de  in:animate="{{duration: 100}}"
                        out:animate="{{duration: 250}}">🖋️ Copied!
                </de></p>
            {:else if hoverBool}
                <p><de  in:animate="{{duration: 100}}"
                        out:animate="{{duration: 250}}">Copy to clipboard
                </de></p>
            {/if}
        </div>
    </div>
    <div class="codeData">
        {@html code}
    </div>
    <p class="colourScheme">Scheme <a href="https://github.com/TheaVanherst/TheaVanherst/blob/master/personaRes/Vansche_me.icls">Vansche.me</a> designed By TheaVanherst</p>
</code>

<style>
    code {
        display:        block;
        overflow:       hidden;

        margin:         0 10px 10px 10px;
        border-radius:  5px;
        background:     #101010;

        color:          white;
        font-size:      0;
        white-space:    pre-wrap;}

    .colourScheme {
        color:      #33333a;
        background: #16171a;

        padding:    5px;
        font-size:  12px;}
    .colourScheme a {
        color:      #f92672;}

    .copy {
        border-radius: 3px;
        padding:    5px;
        height:     23px;
        width:      23px;
        float:      right;}
    .copy img {
        width:      inherit;
        height:     inherit;}

    .copy p de {
        opacity:    1;
        margin:     0 0 0 23px;
        position:   absolute;
        background: var(--alteColour)}
    .copy p de:before {
        color:      var(--alteColour)}

    .codeData {
        margin:         0 0 0 35px;
        padding:        5px 5px 5px 12px;
        font-size:      13px;
        position:       relative;

        border-left:    1px solid #f92672;
        background:     #090909;}

    .codeType {
        background:     #16171a;
        padding:        8px;}
    .codeType > * {
        vertical-align: middle;}
    .codeType p {
        font-weight:    600;
        display:        inline-flex;
        text-transform: uppercase;
        font-size:      18px;}

    .codeType img {
        filter: contrast(-0)
        brightness(100);}
    .codeType img:not(:last-of-type) {
        padding-right:  10px;}

    .codeType .languageIcon {
        height:         33px;
        width:          33px;}
    .codeType .language {
        padding-left:   var(--containerPadding);}

    :global(.fljs-Line:before) {
        position:   absolute;
        left:      -30px;
        padding:    0 3px;

        color:      #00ff3a;
        content:    counter(section);}
    :global(.fljs-Line) {
        counter-increment:  section;
        font-size:  13px;
        padding:    2px 0;}
</style>