
import client from "$lib/sanityClient.js";

let query =
    `*[_type == 'post'][0..2]{
        _id,
        
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
        'catagory_tags': categories[]->title,
        'catagory_id': categories[]->_id,
    
        'author_handle': author->handle,
        'author_fullName': author->fullName,
        'author_twitter': author->twitterURL,
        'author_portrait': author->userPortrait,
        
        'editor_handle': editor->handle,
        'editor_fullName': editor->fullName,
        'editor_twitter': editor->twitterURL,
        'editor_portrait': editor->userPortrait,
    
        body,
    }`

export const load = async () => {
    const postData = await client.fetch(query);

    if (!postData) {
        return [];
    }

    return [postData];
}