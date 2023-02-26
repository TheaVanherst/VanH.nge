
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
        publishedAt,
    
        'author_fullName': author->fullName,
        'author_twitter': author->twitterURL,
        'author_portrait': author->userPortrait,
        
        'editor_fullName': editor->fullName,
        'editor_twitter': editor->twitterURL,
        'editor_portrait': editor->userPortrait,
        
        'catagory_tags': categories[]->title,
        
        'description': briefDesc,
        body[0...4],
    `

export default query;