
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
    
        'coauthors_handle': coauthors->handle,
        'coauthors_fullName': coauthors->fullName,
        'coauthors_twitter': coauthors->twitterURL,
        'coauthors_portrait': coauthors->userPortrait,
    
        'author_handle': author->handle,
        'author_fullName': author->fullName,
        'author_twitter': author->twitterURL,
        'author_portrait': author->userPortrait,
        
        briefDesc,
        gallery,
    `

export default query;