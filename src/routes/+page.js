
import client from "../lib/sanityClient.js";

let query =
    `*[_type == 'post'][0...9]{
        slug,
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
        
        'catagory_tags': categories[]->title,
    
        'author_handle': author->handle,
        'author_fullName': author->fullName,
        'editor_handle': editor->handle,
        'editor_fullName': editor->fullName,
        
        'description': briefDesc,
        
        body[0...2],
    }`

export const load = async () => {
    const postData = await client.fetch(query);

    if (!postData) {
        return [];
    }
    console.log(postData)
    return [postData];
}