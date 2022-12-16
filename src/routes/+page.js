
import client from "../libaries/sanityClient";

let query =
    `*[_type == 'post'][0..2]{
        _id,
        
        title,
        'headerImage': mainImage.asset._ref,
        
        _createdAt,
        _updatedAt,
        'catagory_tags': categories[]->title,
        'catagory_id': categories[]->_id,
    
        'author_handle': author->handle,
        'author_userName': author->username,
        'author_twitter': author->twitterURL,
        'author_image': author->image,
        
        'editor_handle': editor->handle,
        'editor_userName': editor->username,
        'editor_twitter': editor->twitterURL,
        'editor_image': editor->image,
    
        body,
    }`

export const load = async () => {
    const postData = await client.fetch(query);
    if (!postData) {
        return []}
    return [postData]
}