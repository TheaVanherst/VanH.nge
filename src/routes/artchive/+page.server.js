
import client from "$lib/sanityClient.js";
import { artQuery } from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "postRequests": 
            *[ _type == 'artPost'
            ] | order(publishedAt desc)[0..20] {
                ${artQuery}
            }
    }`);

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
