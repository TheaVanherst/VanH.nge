
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        
        "createdWhen": 
             select(
                defined(publishedAt) => publishedAt,
                defined(_createdAt) =>  _createdAt
             ),
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