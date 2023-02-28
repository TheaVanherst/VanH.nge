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
    <div class="titleBar">

        <tab class="active">
            <div>
                <img class="languageIcon" src="{imgUrl}" alt=" ">
            </div>
            <div>
                <p>
                    {fileName}.{language}
                    <x>✕</x>
                </p>
            </div>
        </tab>

        <copyTab
            class:glow={copiedBool} class:clicked={clickedBool} class:hovered={hoverBool}
            on:mouseleave={() => (hoverBool = false)} on:mouseenter={() => (hoverBool = true)}
            on:click={clicked}>
            <p></p>
            <div>
                <img src="{clipboardIcon}" alt="Copy Icon">
            </div>
        </copyTab>

    </div>
    <div class="codeData">
        {@html code}
    </div>
    <p class="colourScheme">Scheme <a href="https://github.com/TheaVanherst/TheaVanherst/blob/master/personaRes/Vansche_me.icls">Vansche.me</a> designed By TheaVanherst</p>
</code>

<style lang="scss">
    // this is all dumb and needs recoding

    code {
        display:        block;
        margin:         0 0 10px 0;

        border-radius:  5px;
        background:     black;
        border:         1px solid var(--backgroundAccent2);
        border-top:     var(--innerRaidus) solid var(--backgroundAccent2);

        color:          white;
        white-space:    pre-wrap;
	    font-size:      0;
    }

    .titleBar {
        color:          var(--backgroundAccent1);
        border-top:     1px solid var(--backgroundAccent1);
        border-bottom:  1px solid var(--backgroundAccent1);

        img {
            filter:     contrast(-0) brightness(100);}

        * {
            display:        inline-flex;}

        p {
            font-weight:    700;
            font-family:    Arial, serif;
            font-size:      11px;

            padding:    0 5px;
            margin:     auto 0;
            display:    inline-flex;
        }

	    &::selection {
		    color: 				var(--background);
		    background-color: 	var(--accent2);}

        & > *:hover {
          background-color: var(--backgroundAccent2);
          color: var(--textColour);}}

    tab {
        vertical-align: top;
        padding:    2px;
        height:     23px;

        &.active {
	        padding-bottom: 0;
	        border-bottom:  2px solid var(--darkAccent1);

	        &::selection {
		        color: 				var(--background);
		        background-color: 	var(--accent1);}}

        p {
	        color: var(--accent1);

	        x {
		        font-size:      7px;
		        text-align:     center;

		        border-radius:  50%;
		        padding:    0 3px;
		        margin:     0 0 0 5px;

		        &:hover {
			        background: var(--backgroundAccent1);}}}

        .languageIcon {
            height:  17px;
            width:   17px;
            padding: 3px;
        }
    }

    copyTab {
        padding:    2px;
        float:      right;
        cursor:     copy;

        div {
            padding:    4px;
            margin:     1px;
            height:     13px;
            width:      13px;

            border-radius:  3px;
            transition:     background-color 0.2s ease;

            img {
                width:      inherit;
                height:     inherit;}}

        p:before {
	        color: var(--backgroundAccent2);
            content:    "Copy to clipboard";}

        .regularBut {
            background: var(--accent2);}
        .hoverBut {
            background: var(--darkAccent2);}

        .glowBut {
            background: var(--accent3);}
        .glowButTxt {
            color:      var(--accent3);}

        .pressedBut {
            background: var(--darkAccent3);}
        .pressButTxt {
            color:      var(--darkAccent3);}

        & {
            div {@extend .regularBut;}}
        &.hovered {
            p:before {@extend .pressButTxt;}
            div {@extend .glowBut;}}
        &.clicked {
            div {@extend .hoverBut;}
	        &:not(.glow).hovered {
		        p:before {@extend .pressButTxt;}
		        div {@extend .pressedBut;}}
            &.glow {
                p:before {@extend .pressButTxt;}
                div {@extend .glowBut;}
                &.hovered {
                    p:before {@extend .glowButTxt;}}}}
        &.glow {
            p:before {@extend .pressButTxt;}
            div {@extend .pressedBut;}
            p:before {
                content:    "Copied to clipboard!";}}}

    .codeData {
        margin:     0 0 0 40px;
         padding:   5px 2px;
        position:   relative;

        border-left:    1px solid var(--backgroundAccent1);
        background:     black;
    }

    .colourScheme {
        color:          var(--backgroundAccent1);
        font-family:    Arial, serif;
        font-size:      11px;
        padding:        5px;
        background:     var(--backgroundAccent2);

        &::selection {
            color: 				var(--background);
            background-color: 	var(--accent2)}

        a {
            color:      var(--accent2);}
        a::selection {
            color: 				var(--background);
            background-color: 	var(--accent2)}}
</style>