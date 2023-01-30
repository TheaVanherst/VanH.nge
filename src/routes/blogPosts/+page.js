import client from "../../lib/sanityClient.js";
import { error } from '@sveltejs/kit';

let query =
    `*[_type == 'post'][0..9]{
        _id,
        slug,
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
        'titles': body[][style == "h4" || style == "h3" || style == "h2" || style == "h1"]
    }`

export const load = async () => {
    const postData = await client.fetch(query);

    if (postData.length > 0) {
        return [postData];
    } else {
        throw new error(404, "No return searches found.")
    }
}