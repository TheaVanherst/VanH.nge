
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
            userPortrait
        },
        author-> {
            _id,
            fullName,
            handle,
            twitterUrl,
            socialMedia[0],
            userPortrait
        },
        
        'catagory_tags': categories[]->title,
    
        body[]{
            ...,
            markDefs[]{
                ...,
                _type == "internalLink" => {
                    ...,
                    "postSlug": @.reference->slug.current,
                    "postFormat": @.reference->_type
                }
            }
        },
        
        'titles': body[][style == "h4" || style == "h3" || style == "h2" || style == "h1"]
    `

export default query;