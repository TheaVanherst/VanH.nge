
import client from "$lib/sanityClient.js";
// import query from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';

export const load = async () => {
    // const allQueries = await client.fetch(`{
    //     "postRequests":
    //         *[ _type == 'author'] {
    //             ${query}
    //         }
    // }`);
    //
    // if (allQueries.postRequests) {
    //     return allQueries;
    // } else {
    //     throw new error(404, "No return searches found.")
    // }
}
