<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from '../../../components/portableText/block/customText.svelte'
    import CustomHeading    from '../../../components/portableText/block/customHeaders.svelte'

    /* TYPES */
    import CodeBlock        from '../../../components/portableText/types/codeBlock.svelte'
    import Link             from '../../../components/portableText/types/linkAppend.svelte'
    import ImageBlock       from '../../../components/portableText/types/imageBlock.svelte'
    import imageGallery     from "../../../components/portableText/types/imageGallery.svelte";

    /* LISTS */
    import Bullet           from '../../../components/portableText/lists/bullet.svelte';
    import Number           from '../../../components/portableText/lists/number.svelte';
    import Letter           from '../../../components/portableText/lists/letter.svelte';
    import Numeral          from '../../../components/portableText/lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from '../../../components/portableText/marks/codeSnippet.svelte';
    import Highlight        from '../../../components/portableText/marks/highlight.svelte';
    import Subscript        from '../../../components/portableText/marks/subScript.svelte';
    import Superscript      from '../../../components/portableText/marks/superScript.svelte';
    import FloatCenter      from '../../../components/portableText/marks/floatCenter.svelte';
    import FloatRight       from '../../../components/portableText/marks/floatRight.svelte';
    import BlockQuote       from '../../../components/portableText/marks/blockQuote.svelte';

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