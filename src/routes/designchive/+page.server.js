
import client from "$lib/sanityClient.js";
import { designQuery } from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'designPost'
            ] | 
            order(publishedAt desc)[0..20] {
                ${ designQuery }
            }
    }`);

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
