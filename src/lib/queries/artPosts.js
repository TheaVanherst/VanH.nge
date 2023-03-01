
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        
        _createdAt,
        _updatedAt,
        publishedAt,
        
        'catagory_tags': categories[]->title,
    
        coauthors-> {
            _id,
            fullName,
            handle,
            twitterUrl,
            socialMedia[0],
        },
        author-> {
            _id,
            fullName,
            handle,
            twitterUrl,
            socialMedia[0],
        },
        
        briefDesc,
        gallery,
    `

export default query;