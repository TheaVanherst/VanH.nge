
import client from              "$lib/sanityClient.js";
import { blogPreviewQuery } from    "$lib/queries/blogPosts.js"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "postRequests":
            *[ _type == 'blogPost' ] 
            |  order ( publishedAt desc )
            [0..5]{
                ${blogPreviewQuery}
            }
        }`);

    if (allQueries.postRequests) {
        return allQueries;}
    else {
        throw new error(404, "No return searches found.");}
}
