
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
            
        `,

    authorQuery =
        constants +
        `
        
        `;

export { authorPreviewQuery, authorQuery }