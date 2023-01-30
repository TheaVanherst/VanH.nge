<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from './block/customText.svelte'
    import CustomHeading    from './block/customHeaders.svelte'

    /* TYPES */
    import CodeBlock        from './types/codeBlock.svelte'
    import Link             from './types/linkAppend.svelte'
    import ImageBlock       from './types/imageBlock.svelte'
    import imageGallery     from "./types/imageGallery.svelte";

    /* LISTS */
    import Bullet           from './lists/bullet.svelte';
    import Number           from './lists/number.svelte';
    import Letter           from './lists/letter.svelte';
    import Numeral          from './lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from './marks/codeSnippet.svelte';
    import Highlight        from './marks/highlight.svelte';
    import Subscript        from './marks/subScript.svelte';
    import Superscript      from './marks/superScript.svelte';
    import FloatCenter      from './marks/floatCenter.svelte';
    import FloatRight       from './marks/floatRight.svelte';
    import BlockQuote       from './marks/blockQuote.svelte';

    export let postData
</script>

<div class="postBody">
    <PortableText
            value={postData}
            onMissingComponent={false}
            components={{
            types: {
                code:       CodeBlock,
                image:      ImageBlock,
                gallery:    imageGallery
            },
            marks: {
                link:           Link,
                codesnippet:    CodeSnippet,
                highlight:      Highlight,
                subscript:      Subscript,
                superscript:    Superscript,
                floatright:     FloatRight,
                floatcenter:    FloatCenter,
                blockquote:     BlockQuote
            },
            list: {
                bullet:     Bullet,
                number:     Number,
                letter:     Letter,
                numeral:    Numeral
            },
            block: {
                normal:     CustomText,
                h1:         CustomHeading,
                h2:         CustomHeading,
                h3:         CustomHeading,
                h4:         CustomHeading
            }
          }}
    />
</div>