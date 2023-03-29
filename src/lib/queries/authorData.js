
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
        `;

export { authorPreviewQuery, authorQuery }