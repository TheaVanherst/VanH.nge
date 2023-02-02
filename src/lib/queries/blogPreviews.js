
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
        'description': briefDesc,
        
        body[0...2],
    `

export default query;