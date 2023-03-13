
let
    constants =
        `
            _id,
            'slug': slug.current,
            
            publishedAt,
            _updatedAt,
            
            categories[]->{
                _ref,
                _type,
                title,
            },   
            
            author-> {
                ...,
                "handle": select(
                    defined(handle) =>   handle,
                    defined(fullName) => fullName),
                socialMedia[0],
            },
            collaborators[]-> {
                ...,
                "handle": select(
                    defined(handle) => handle,
                    defined(fullName) =>  fullName),
                socialMedia[0],
            },
            
            briefDesc,
            gallery,
        `,

    artQuery =
        constants +
        `
        
        `,

    designQuery =
        constants +
        `
        
        `;

export { artQuery, designQuery };