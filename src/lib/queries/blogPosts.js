
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
             
            editor-> {
                fullName,
                handle,
                "slug": slug.current,
                userPortrait,
                profileBanner,
            },
            author-> {
                fullName,
                handle,
                "slug": slug.current,
                userPortrait,
                profileBanner,
            },
            
            desc,
        `,

    blogPreviewQuery =
        constants +
        `
            body[0...4],
        `,

    blogQuery =
        constants +
        `
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