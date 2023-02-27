
import client from "$lib/sanityClient.js";
import query from "$lib/queries/artPosts"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const postData = await client.fetch(`*[_type == 'artPost'] | order(_createdAt)[0..10] {${query}}`);
    if (postData.length > 0) {
        return [postData];
    } else {
        throw new error(404, "No return searches found.")
    }
}
