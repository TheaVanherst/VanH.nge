<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from './block/customText.svelte';
    import CustomHeading    from './block/customHeaders.svelte';
    import CustomBlockQuote from './block/customBlockQuote.svelte';

    /* TYPES */
    import CodeBlock        from './types/codeBlock.svelte';
    import Link             from './types/linkAppend.svelte';
    import ImageBlock       from './types/imageBlock.svelte';
    import ImageGallery     from './types/imageGallery.svelte';
    import separator        from "./block/separator.svelte";

    /* LISTS */
    import Wrapper          from './lists/wrapper.svelte';
    import Bullet           from './lists/bullet.svelte';
    import Number           from './lists/number.svelte';
    import Letter           from './lists/letter.svelte';
    import Numeral          from './lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from './marks/codeSnippet.svelte';
    import Highlight        from './marks/highlight.svelte';

    import Subscript        from './marks/subScript.svelte';
    import Superscript      from './marks/superScript.svelte';
    import BlockQuote       from './marks/blockQuote.svelte';

    import FloatCenter      from './marks/floatCenter.svelte';
    import FloatRight       from './marks/floatRight.svelte';
    import ReadMore         from './marks/readMore.svelte';

    export let postData;
</script>

<div class="postBody">
    <PortableText
        value={postData}
        onMissingComponent={false}
        components={{
            types: {
                code:       CodeBlock,
                image:      ImageBlock,
                gallery:    ImageGallery,
                separator:  separator,
            },
            block: {
                normal:     CustomText,
                h1:         CustomHeading,
                h2:         CustomHeading,
                h3:         CustomHeading,
                h4:         CustomHeading,
                blockquote: CustomBlockQuote
            },
            marks: {
                link:           Link,
                codesnippet:    CodeSnippet,
                highlight:      Highlight,
                subscript:      Subscript,
                superscript:    Superscript,
                floatright:     FloatRight,
                floatcenter:    FloatCenter,
                blockquote:     BlockQuote,
                readmore:       ReadMore,
            },
            list: {
                bullet:     Wrapper,
                number:     Wrapper,
                letter:     Wrapper,
                numeral:    Wrapper
            },
            listItem: {
                bullet:     Bullet,
                number:     Number,
                letter:     Letter,
                numeral:    Numeral,
                normal:     Bullet
            }
        }}
    />
</div>