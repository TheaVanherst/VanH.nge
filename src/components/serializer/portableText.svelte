<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from '$components/serializer/block/customText.svelte';
    import CustomHeading    from '$components/serializer/block/customHeaders.svelte';

    /* TYPES */
    import CodeBlock        from '$components/serializer/types/codeBlock.svelte';
    import Link             from '$components/serializer/types/linkAppend.svelte';
    import ImageBlock       from '$components/serializer/types/imageBlock.svelte';
    import ImageGallery     from '$components/serializer/types/imageGallery.svelte';
    import separator        from "$components/serializer/block/separator.svelte";

    /* LISTS */
    import Wrapper          from '$components/serializer/lists/wrapper.svelte';
    import Bullet           from '$components/serializer/lists/bullet.svelte';
    import Number           from '$components/serializer/lists/number.svelte';
    import Letter           from '$components/serializer/lists/letter.svelte';
    import Numeral          from '$components/serializer/lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from '$components/serializer/marks/codeSnippet.svelte';
    import Highlight        from '$components/serializer/marks/highlight.svelte';

    import Subscript        from '$components/serializer/marks/subScript.svelte';
    import Superscript      from '$components/serializer/marks/superScript.svelte';
    import BlockQuote       from '$components/serializer/block/blockQuote.svelte';

    import FloatCenter      from '$components/serializer/marks/floatCenter.svelte';
    import FloatRight       from '$components/serializer/marks/floatRight.svelte';

    import ReadMore         from '$components/serializer/marks/readMore.svelte';
    import Accents          from '$components/serializer/marks/accentTones.svelte';

    export let postData;
</script>

<div class="postBody">
    <PortableText
        value={postData}
        onMissingComponent={(e) => console.log("Error: ", e)}
        components={{
            types: {
                code:       CodeBlock,
                image:      ImageBlock,
                gallery:    ImageGallery,
                separator:  separator,
                blockquote: BlockQuote,
            },
            block: {
                normal:     CustomText,
                h1:         CustomHeading,
                h2:         CustomHeading,
                h3:         CustomHeading,
                h4:         CustomHeading,
            },
            marks: {
                link:           Link,
                codesnippet:    CodeSnippet,

                subscript:      Subscript,
                superscript:    Superscript,

                floatright:     FloatRight,
                floatcenter:    FloatCenter,

                readmore:       ReadMore,
                accent:         Accents,
                highlight:      Highlight,
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