<script>
    import hljs from 'highlight.js/lib/core';

    import javascript   from 'highlight.js/es/languages/javascript';
    import css          from 'highlight.js/es/languages/CSS';
    import html         from 'highlight.js/es/languages/markdown';
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', html);

    export let portableText = []

    let code = hljs.highlight(portableText.value.code,
        {language: portableText.value.language}).value
</script>

<code class="language-{portableText.value.language}">
    {@html code}
</code>
