
let
    constants =
        `
            _id,
            
            fullName,
            handle,
            'slug': slug.current,
            shortDesc,
            
            userPortrait,
            profileBanner,
           
            categories[]->{
                title,
            },   
        `,

    authorPreviewQuery =
        constants +
        `
            'verified': externalTags->{
                emoji,
                alt,
            },
        `,

    authorQuery =
        constants +
        `
            'verified': externalTags->{
                emoji,
                alt,
                description
            },
        `,

    authorToolTips = `
            userPortrait,
            profileBanner,
            fullName,
            handle,
            'slug': slug.current,
        `;

export { authorPreviewQuery, authorQuery, authorToolTips }