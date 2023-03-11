
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
    `

export default query;