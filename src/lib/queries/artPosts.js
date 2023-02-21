
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        
        _createdAt,
        _updatedAt,
        publishedAt,
        
        'catagory_tags': categories[]->title,
        'catagory_id': categories[]->_id,
    
        'author_handle': author->handle,
        'author_fullName': author->fullName,
        'author_twitter': author->twitterURL,
        'author_portrait': author->userPortrait,
        
        briefDesc,
        gallery,
    `

export default query;