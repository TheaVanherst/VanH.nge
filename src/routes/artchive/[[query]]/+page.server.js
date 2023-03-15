
import client from "$lib/sanityClient.js";
import { artQuery } from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';
import {queryGenerator} from "$lib/queries/queryParamTypes.js";

export const load = async ({params}) => {
    const { query } = params
    let queryString = queryGenerator(query);

    const allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'artPost'
                ${queryString}
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
