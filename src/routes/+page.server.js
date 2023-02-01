
import client from "../lib/sanityClient.js";
import { error } from '@sveltejs/kit';

let query =
    `*[_type == 'post'][0...3]{
        slug,
        title,
        'headerImage': mainImage,
        
        _createdAt,
        _updatedAt,
    
        'author_fullName': author->fullName,
        'editor_fullName': editor->fullName,
        
        'catagory_tags': categories[]->title,
        'description': briefDesc,
        
        body[0...2],
    }`

export const load = async () => {
    const postData = await client.fetch(query);

    if (postData.length > 0) {
        return [postData];
    } else {
        throw new error(404, "No return searches found.")
    }
}