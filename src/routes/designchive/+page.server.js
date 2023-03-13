
import client from "$lib/sanityClient.js";
import query from "$lib/queries/artPosts"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "postRequests": 
            *[
                _type == 'designPost'
            ] | 
            order(publishedAt desc)[0..20] {
                ${query}
            }
    }`);

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
