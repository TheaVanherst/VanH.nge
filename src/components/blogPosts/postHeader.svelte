<script>
    import MobileQuery from '../../libaries/mobileQuery.svelte'
    import styles from "../presetStyling/pointerTag.css"

    export let createdOn, updatedOn;
    import DateModule from "../dateBuilder.svelte"

    export let tags;

    export let authorhandle, authoruser, authorTwitter, authorImage,
               editorhandle, editoruser, editorTwitter, editorImage;

    import client from '../../libaries/sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}

    const relativeTime = (time) => {
        return (+new Date() - time) / 1000 < 1209600;}
</script>

<header>
    <img src="{urlFor(authorImage).width(250).auto('format')}"/>
    {#if authoruser !== editoruser && editorImage}
        <img class="editor" src="{urlFor(editorImage).width(250).auto('format')}"/>{/if}

    <div class="date offset">
        <MobileQuery query="(min-width: 750px)" let:matches><div>
            {#if matches}
                <DateModule dateFormat="fullDate" createdOn={createdOn} updatedOn={updatedOn} /> {:else}
                <DateModule dateFormat="tinyDate" createdOn={createdOn} updatedOn={updatedOn} /> {/if}
        </div></MobileQuery>
    </div>
    <div class="userData offset">
        {#if authoruser === editoruser}
            <div><p class="handle">Posted & Edited by
                    <a href="https://twitter.com/{authorTwitter}">
                        <b>{authorhandle}
                            <de>{authoruser}</de></b></a>
            </p></div>
        {:else}
            <div><p class="handle">Posted by
                {#if authorTwitter}
                    <a href="https://twitter.com/{authorTwitter}">
                        <b>{authorhandle}
                            <de>{authoruser}</de></b></a>
                {:else}
                        <b>{authorhandle}
                            <de>{authoruser}</de></b>{/if}
            </p></div>
            {#if editorhandle}
                <div><p class="handle">Edited by
                    {#if editorTwitter}
                        <a href="https://twitter.com/{editorTwitter}">
                            <b>{editorhandle}
                                <de>{editoruser}</de></b></a>
                    {:else}
                            <b>{editorhandle}
                                <de>{editoruser}</de></b>{/if}
                </p></div>
            {/if}
        {/if}
    </div>
    <tags class="offset">
        {#if relativeTime(new Date(createdOn))}
            <tag class="new">NEW</tag>
        {/if}
        {#each tags as tag}
            <tag>{tag}</tag>
        {/each}
    </tags>
</header>

<style>
    header > div {
        border-bottom:  1px solid var(--fadedColourAcc);
        white-space:    nowrap;
        width:      auto;
        padding:    0 0 0 118px;}
    div > div {
        padding:    8px 10px;}


    @media (max-width:  500px) {
        tags > tag:first-of-type {
            margin-left: 0}
    }
    tags {
        padding:    0 10px;
        display:    inline-block;}
    tags > tag {
        font-family:    'Poppins', sans-serif;
        font-size:      12px;

        border-radius:  5px;
        background-color:   var(--backgColour);
        transition:     background 0.5s;

        display:        inline-flex;
        padding:        2px 10px;
        margin:         0 10px 10px 0;}
    tag:hover {
        cursor:         pointer;
        color:          var(--linkColour);
        background-color: var(--highColour);}
    tags > tag:first-of-type {
        margin-left:    118px;}



    .new {
        background: linear-gradient(-45deg, var(--acctColour), var(--alteColour), var(--highColour));
        background-size: 800% 800%;
        animation:  gradient 15s ease infinite;
        color:      white;
        font-weight: 800;}
    .new:hover {
        animation:  wiggle 0.5s ease infinite;}



    a {
        text-decoration: none;
        color: var(--highColour);}
    a:hover {
        text-decoration: underline;}

    p {
        font-family:    "Poppins", serif;
        font-weight:    500;
        margin:         0;
        padding:        0;

        width:          min-content;
        line-height:    100%;}

    b > de {      background-color:   var(--acctColour);}
    b > de:before {   color:   var(--acctColour);}
    a > b de {    background-color:   var(--highColour);}
    a > b de:before { color:   var(--highColour);}
    *:not(a) > b:hover {cursor:     help;}

    .date {
        font-weight:    600;
        color:          #fff;
        background:     var(--highColour);}
    .userData {
        margin:         0 0 10px 0;
        width:          auto;}
    .userData > * {
        display:        table-cell;
        width:          min-content;
        line-height:    normal;
        font-size:      80%;
        margin:         0;}
    .userData > *:last-child:not(:first-child) {
        border-left:   1px solid var(--fadedColourAcc);}

    .handle > b {
        color: var(--acctColour);}



    @media (max-width:  500px) {
        img {
            max-width:  62px;}
        .date {     padding: 9px 15px 9px 84px;}
        .userData { padding: 5px 15px 5px 84px;}}

    img {
        max-width:      105px;
        margin:         10px;
        border-radius:  5px;

        overflow:   hidden;
        position:   absolute;
        border:     1px solid var(--borderColor);}
    img.editor {
        width:          70px;
        height:         70px;
        transform:      scale(50%);
        transition:     transform 0.5s;
        border-radius:  50%;
        margin-left:   -15px;
        margin-top:     65px;}
    img.editor:hover {
        transform:      scale(100%);}
</style>