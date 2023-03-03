
let query =
    `
        _id,
        'slug': slug.current,
        
        title,
        'headerImage': mainImage,
        
        "createdWhen": 
             select(
                defined(publishedAt) => publishedAt,
                defined(_createdAt) =>  _createdAt
             ),
        _updatedAt,
  
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
        
        categories[]->{
            _ref,
            _type,
            title,
        },
    
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