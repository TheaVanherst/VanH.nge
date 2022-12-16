<script>
    export let titleHeader, title;

    import client from '../../libaries/sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}
</script>

<div class="title">
    <div class="overflow">
        <img src="{urlFor(titleHeader).width(500).auto('format')}">
        <t>{title}</t>
    </div>
</div>

<style>
    .title {
        height:     max-content;
        overflow:   hidden;
        width:      100%;
        max-height: 100px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;}

    .overflow {
        overflow:   hidden;
        display:    flex;
        align-items: center;
        position:   relative;
        margin:    -10px;
        height:     100px;}

    t {
        white-space:    nowrap;
        font-family:    Poppins, serif;
        font-size:      2.5em;
        font-weight:    700;

        color:      var(--textColour);
        z-index:    100;
        position:   absolute;

        padding-left:   35px;}

    img {
        filter:     blur(5px);
        display:    block;
        width:      100%;
        opacity:    0.6;}

    @media (max-width: 500px) {
        p {
            padding-left:   25px;
            font-size:      2em;}
        .overflow {
            max-height:     75px;}  }
</style>