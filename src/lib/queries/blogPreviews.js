
let query =
    `
        'slug': slug.current,
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
    
        'author_fullName': author->fullName,
        'editor_fullName': editor->fullName,
        
        'catagory_tags': categories[]->title,
        'catagory_id': categories[]->_id,
        
        'description': briefDesc,
        body[0...4],
    `

export default query;