
import client from "../lib/sanityClient.js";
import error from "./components/error.svelte"

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

    if (postData) {
        return [postData];
    } else {
        return {
            status: 500,
            body: error
        };
    }
}