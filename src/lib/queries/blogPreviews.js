
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
        publishedAt,
    
        editor-> {
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
        
        'catagory_tags': categories[]->title,
        
        'description': briefDesc,
        body[0...4],
    `

export default query;