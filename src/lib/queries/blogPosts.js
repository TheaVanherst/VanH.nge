
let
    constants =
        `
            _id,
            'slug': slug.current,
            
            title,
            'headerImage': mainImage,
            
            publishedAt,
            _updatedAt,
            
            categories[]->{
                _ref,
                _type,
                title,
            },   
        `,

    blogPreviewQuery =
        constants +
        `
            editor-> {
                _id,
                fullName,
                "handle": select(
                    defined(handle) => handle,
                    defined(fullName) =>  fullName),
                "slug": slug.current,
            },
            author-> {
                _id,
                fullName,
                "handle": select(
                    defined(handle) => handle,
                    defined(fullName) =>  fullName),
                "slug": slug.current,
            },
            
            'description': briefDesc,
            body[0...4],
        `,

    blogQuery =
        constants +
        `
            editor-> {
                _id,
                fullName,
                "handle": select(
                    defined(handle) => handle,
                    defined(fullName) =>  fullName),
                "slug": slug.current,
                userPortrait
            },
            author-> {
                _id,
                fullName,
                "handle": select(
                    defined(handle) => handle,
                    defined(fullName) =>  fullName),
                "slug": slug.current,
                userPortrait
            },
            
            body[]{
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        ...,
                        "postSlug": @.reference->slug.current,
                        "postFormat": @.reference->_type
                    }
                }
            },
            
            'titles': body[][style == "h4" || style == "h3" || style == "h2" || style == "h1"]
        `

export { blogPreviewQuery, blogQuery };