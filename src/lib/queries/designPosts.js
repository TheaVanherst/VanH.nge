
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        
        publishedAt,
        _updatedAt,
        
        categories[]->{
            _ref,
            _type,
            title,
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
        collaborators[]-> {
            _id,
            fullName,
            "handle": select(
                defined(handle) => handle,
                defined(fullName) =>  fullName),
            twitterUrl,
            socialMedia[0],
        },
        
        briefDesc,
        gallery,
    `

export default query;