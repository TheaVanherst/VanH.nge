<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from '../portableText/block/customText.svelte'
    import CustomHeading    from '../portableText/block/customHeaders.svelte'

    /* TYPES */
    import CodeBlock        from '../portableText/types/codeBlock.svelte'
    import Link             from '../portableText/types/linkAppend.svelte'
    import ImageBlock       from '../portableText/types/imageBlock.svelte'
    import imageGallery     from "../portableText/types/imageGallery.svelte";

    /* LISTS */
    import Bullet           from '../portableText/lists/bullet.svelte';
    import Number           from '../portableText/lists/number.svelte';
    import Letter           from '../portableText/lists/letter.svelte';
    import Numeral          from '../portableText/lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from '../portableText/marks/codeSnippet.svelte';
    import Highlight        from '../portableText/marks/highlight.svelte';
    import Subscript        from '../portableText/marks/subScript.svelte';
    import Superscript      from '../portableText/marks/superScript.svelte';
    import FloatCenter      from '../portableText/marks/floatCenter.svelte';
    import FloatRight       from '../portableText/marks/floatRight.svelte';
    import BlockQuote       from '../portableText/marks/blockQuote.svelte';

    export let postData
</script>

<div class="postBody">
    <PortableText
            value={postData}
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
                h1:         CustomHeading,
                h2:         CustomHeading,
                h3:         CustomHeading,
                h4:         CustomHeading
            }
          }}
    />
</div>