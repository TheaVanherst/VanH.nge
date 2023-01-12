<script>
    import MobileQuery  from '../../libaries/mobileQuery.svelte'
    import AuthorTag    from '../authorTag.svelte'

    export let createdOn, updatedOn;
    import DateModule from "../dateBuilder.svelte"

    export let tags;
    import TagModule from "../tagModule.svelte"

    export let authorhandle, authoruser, authorTwitter, authorImage,
               editorhandle, editoruser, editorTwitter, editorImage;

    import client from '../../libaries/sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
    const urlFor = (source) => {return imageUrlBuilder(client).image(source)}
</script>

<header>
    <div class="profile">
        <img src="{urlFor(authorImage).width(250).auto('format')}"/>
        {#if authoruser !== editoruser && editorImage}
            <img class="editor" src="{urlFor(editorImage).width(250).auto('format')}"/>{/if}
    </div>

    <div class="date">
        <MobileQuery query="(min-width: 750px)" let:matches>
            {#if matches}
                <DateModule dateFormat="fullDate" createdOn={createdOn} updatedOn={updatedOn} /> {:else}
                <DateModule dateFormat="tinyDate" createdOn={createdOn} updatedOn={updatedOn} /> {/if}
        </MobileQuery>
    </div>

    <div class="userData">
        {#if authoruser === editoruser}
            <AuthorTag
                content="Posted & Edited by"
                linkUrl="{authorTwitter}"
                handle="{authorhandle}"/>
        {:else}
            <AuthorTag
                content="Posted by"
                linkUrl="{authorTwitter}"
                handle="{authorhandle}"/>
            {#if editorhandle}
                <AuthorTag
                    content="Edited by"
                    linkUrl="{editorTwitter}"
                    handle="{editorhandle}"/>
            {/if}
        {/if}
    </div>
    <TagModule time="{createdOn}" tags="{tags}" />
</header>

<style>
    header > div {
        white-space:    nowrap;
        width:          auto;}

    .date {
        background-color: var(--accent1);
        padding-left: calc(var(--contentPaddingY) + 24px);
        border-bottom-left-radius:  var(--innerRaidus);
        border-bottom-right-radius: var(--innerRaidus);
        overflow: hidden;}

    .userData {
        border-bottom:  var(--border-thickness) solid var(--fadedColourAcc);
        margin:         0 0 var(--contentPaddingY) 0;
        padding-left:   calc(var(--contentPaddingY) + 24px);
        width:          auto;
        font-size:      0;}
    .userData > * {
        display:        table-cell;
        width:          min-content;
        line-height:    normal;
        font-size:      80%;
        margin:         0;}
    .userData > *:last-child:not(:first-child) {
        border-left:   1px solid var(--fadedColourAcc);}

    @media (max-width:  500px) {
        img {
            max-width:  62px;}
        .date {     padding: 9px 15px 9px 84px;}
        .userData { padding: 5px 15px 5px 84px;}}


    .profile {
        margin-left: -35px;}
    .profile > img {
        max-width:      60px;
        margin:         var(--contentPaddingY);
        border-radius:  var(--innerRaidus);

        position:   absolute;
        border:     var(--border-thickness) solid var(--accent1);}
    .profile > img.editor {
        width:          70px;
        transform:      scale(50%);
        transition:     transform 0.5s;
        border-radius:  50%;
        margin-left:   -16px;
        margin-top:     32px;}
    .profile > img.editor:hover {
        transform:      scale(100%);}
</style>