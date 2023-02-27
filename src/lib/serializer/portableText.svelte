<script>
    import {PortableText} from '@portabletext/svelte'

    /* BLOCKS */
    import CustomText       from '$lib/serializer/block/customText.svelte';
    import CustomHeading    from '$lib/serializer/block/customHeaders.svelte';

    /* TYPES */
    import CodeBlock        from '$lib/serializer/types/codeBlock.svelte';
    import Link             from '$lib/serializer/types/linkAppend.svelte';
    import ImageBlock       from '$lib/serializer/types/imageBlock.svelte';
    import ImageGallery     from '$lib/serializer/types/imageGallery.svelte';
    import separator        from "$lib/serializer/block/separator.svelte";

    /* LISTS */
    import Wrapper          from '$lib/serializer/lists/wrapper.svelte';
    import Bullet           from '$lib/serializer/lists/bullet.svelte';
    import Number           from '$lib/serializer/lists/number.svelte';
    import Letter           from '$lib/serializer/lists/letter.svelte';
    import Numeral          from '$lib/serializer/lists/numeral.svelte';

    /* MARX [AXAXAX] */
    import CodeSnippet      from '$lib/serializer/marks/codeSnippet.svelte';
    import Highlight        from '$lib/serializer/marks/highlight.svelte';

    import Subscript        from '$lib/serializer/marks/subScript.svelte';
    import Superscript      from '$lib/serializer/marks/superScript.svelte';
    import BlockQuote       from '$lib/serializer/block/blockQuote.svelte';

    import FloatCenter      from '$lib/serializer/marks/floatCenter.svelte';
    import FloatRight       from '$lib/serializer/marks/floatRight.svelte';

    import ReadMore         from '$lib/serializer/marks/readMore.svelte';
    import Accents          from '$lib/serializer/marks/accentTones.svelte';

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