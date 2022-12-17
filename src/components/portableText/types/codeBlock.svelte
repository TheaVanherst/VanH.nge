<script>
    import hljs     from 'highlight.js/lib/core';
    import styling  from '/src/styles/vansche.css';

    import js       from 'highlight.js/es/languages/javascript';
    import css      from 'highlight.js/es/languages/CSS';
    import xml      from 'highlight.js/es/languages/XML';
    import json     from 'highlight.js/es/languages/JSON';
    import ts       from 'highlight.js/es/languages/typescript';

    hljs.registerLanguage('javascript', js);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('typescript', ts);

    export let portableText = []

    const code = hljs.highlight(portableText.value.code, {language: portableText.value.language}).value;
    const imgUrl = new URL("/codeTypes/"+portableText.value.language+".png", import.meta.url).href;
</script>

<code class="language-{portableText.value.language}">
    <div class="codeType">
        <img src="{imgUrl}" alt=" ">
        <p class="language">{portableText.value.language}</p>
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

        margin: 0 10px 10px 10px;
        border-radius:  5px;
        background-color: #101010;

        color:          white;
        font-size:      0;
        white-space: pre-wrap;}

    .codeType {
        background-color:   #16171a;
        padding:        5px;}
    .codeType > * {
        vertical-align: middle;}
    .codeType p {
        font-weight:    600;
        display:        inline-flex;
        text-transform: uppercase;
        font-size:      18px;}
    .codeType img {
        padding-right:    10px;
        height:     25px;
        width:      25px;
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
        margin:         0 0 0 15px;
        padding:        5px 5px 5px 12px;
        font-size:      13px;
        position:       relative;
        background-color: #090909;}
</style>