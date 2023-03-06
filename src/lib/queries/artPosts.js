
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