
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        'headerImage': mainImage,
        
        publishedAt,
        _updatedAt,
    
        editor-> {
            _id,
            fullName,
            "handle": select(
                defined(handle) => handle,
                defined(fullName) =>  fullName),
            twitterUrl,
            socialMedia[0],
        },
        author-> {
            _id,
            fullName,
            "handle": select(
                defined(handle) => handle,
                defined(fullName) =>  fullName),
            twitterUrl,
            socialMedia[0],
        },
        
        categories[]->{
            _ref,
            _type,
            title,
        },
        'description': briefDesc,
        body[0...4],
    `

export default query;