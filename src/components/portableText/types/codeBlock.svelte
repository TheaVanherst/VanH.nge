<script>
    import hljs     from 'highlight.js/lib/core';

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

    let code = hljs.highlight(
        portableText.value.code, {language: language}).value;

    // This is jank af, but it does the job.
    let Arr = code.split(/\n/g), temp = "";
    for (let i = 0; i < Arr.length; i++) {
        temp += "<span class='fljs-Line'>" + Arr[i] + "</span>" + `\n`;}
    code = temp;

    const imgUrl = new URL("/codeTypes/" + language + ".webp", import.meta.url).href;
</script>

<code class="language-{language}">
    <div class="codeType">
        <img src="{imgUrl}" alt=" ">
        <p class="language">{language}</p>
    </div>
    <div class="lineData"></div>
    <div class="codeData">
        {@html code}
    </div>
    <p class="colourScheme">Scheme <a href="https://github.com/TheaVanherst/TheaVanherst/blob/master/personaRes/Vansche_me.icls">Vansche.me</a> designed By TheaVanherst</p>
</code>

<style>
    code {
        display:        block;
        overflow:       hidden;

        margin: 0 10px 10px 10px;
        border-radius:  5px;
        background-color: #101010;

        color:          white;
        font-size:      0;
        white-space: pre-wrap;}

    .codeType {
        background-color:   #16171a;
        padding:        8px;}
    .codeType > * {
        vertical-align: middle;}
    .codeType p {
        font-weight:    600;
        display:        inline-flex;
        text-transform: uppercase;
        font-size:      18px;}
    .codeType img {
        padding-right:    10px;
        height:     33px;
        width:      33px;
        filter: contrast(-0) brightness(100);}

    .colourScheme {
        margin: 0;
        color: #33333a;
        background-color:   #16171a;
        padding: 5px;
        font-size:  12px;}
    .colourScheme a {
        color:      #f92672;}

    .codeData {
        border-left:    1px solid #f92672;
        margin:         0 0 0 35px;
        padding:        5px 5px 5px 12px;
        font-size:      13px;
        position:       relative;
        background-color: #090909;}
</style>