<script>
    import hljs             from 'highlight.js/lib/core';

    import javascript       from 'highlight.js/es/languages/javascript';
    import css              from 'highlight.js/es/languages/CSS';
    import xml              from 'highlight.js/es/languages/XML';
    import json             from 'highlight.js/es/languages/JSON';
    import typescript       from 'highlight.js/es/languages/typescript';

    export let portableText = [];
    let language = portableText.value.language;

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('typescript', typescript);

    let clipboardIcon;
    let imgUrl = new URL("/codeTypes/" + language + ".webp",    import.meta.url).href;
    $: clipboardIcon = new URL("/icons/" + (copiedBool ? "copied" : "copy") + "Clipboard.webp", import.meta.url).href;

    let code = hljs.highlight(
        portableText.value.code, {
            language: language
        }).value;

    let arr = code.split(/\n/g),
        codeString = "";
    let hlArr = portableText.value.highlightedLines;
    let fileName = portableText.value.filename

    if(hlArr){
        for (let i = 0; i < hlArr.length; i++) {
            arr[hlArr[i]] =
                "<span class='highlight'>" +
                    arr[hlArr[i]] +
                "</span>";
        }
    }

    for (let i = 0; i < arr.length; i++) {
        codeString +=
            "<span class='fljs-Line'>" +
                arr[i] +
            "</span>" + `\n`;
    }

    code = codeString;

    let copiedBool = false,
        hoverBool = false,
        clickedBool = false;

    const clicked = () => {
        if (!copiedBool) {
            copiedBool = true;
            clickedBool = true;

            navigator.clipboard.writeText(portableText.value.code);

            setTimeout(() => {
                copiedBool = false;
            }, 1337);}};
</script>

<code class="language-{language}">
    <div class="copyTab"
        class:glow={copiedBool}
        class:clicked={clickedBool}
        class:hovered={hoverBool}
        on:mouseleave={ () => (hoverBool = false)}
        on:mouseenter={() => (hoverBool = true)}
        on:click={clicked}>
        <div>
            <img src="{clipboardIcon}" alt="Copy Icon">
        </div>
    </div>
    <div class="codeData">
        {@html code}
    </div>
</code>

<style lang="scss">
    code { //this saves me fucking about with fonts, lol
        display:        block;
        margin:         0 0 10px 0;
        border:         1px solid var(--backgroundAccent2);

        white-space:    pre-wrap;
	    font-size:      0;
    }

    .copyTab {
        padding:    5px;
        float:      right;
        cursor:     copy;

        position: relative;
        z-index:    100;

        div {
            padding:    4px;
            margin:     1px;
            height:     15px;
            width:      15px;

            img {
                width:      inherit;
                height:     inherit;}}

        .regularBut {   background: var(--accent2);}
        .hoverBut {     background: var(--backgroundAccent2);}
        .glowBut {      background: var(--accent3);}
        .pressedBut {   background: var(--darkAccent3);}

        & {         div {   @extend .regularBut;}}
        &.hovered { div {   @extend .glowBut;}}
        &.clicked { div {   @extend .hoverBut;}
            &.glow {div {   @extend .glowBut;}}}
        &.glow {    div {   @extend .pressedBut;}}}

    .codeData {
        margin:     0 0 0 30px;
        padding:    5px 2px;
        position:   relative;

        border-left:    1px solid var(--backgroundAccent2);
    }
</style>