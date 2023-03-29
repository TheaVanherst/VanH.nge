
import client from "$lib/sanityClient.js";

import { artQuery } from "$lib/queries/galleryPosts.js"
import { queryGenerator } from "$lib/builders/queryBuilder.js";

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { query } = params
    let queryString = queryGenerator(query);

    let allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'artPost'
                ${queryString}
            ] | order(publishedAt desc)[0..20] {
                ${artQuery}
            }
    }`);

    allQueries.returnTest = queryString;

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
