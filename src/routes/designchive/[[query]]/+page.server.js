
import client               from "$lib/sanityClient.js";
import { designQuery }      from "$lib/queries/galleryPosts.js"
import { queryGenerator }   from "$lib/queries/queryParamTypes.js";

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { query } = params
    let queryString = queryGenerator(query);

    let allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'designPost' 
                ${queryString}
            ] | 
            order(publishedAt desc)[0..20] {
                ${ designQuery }
            },
        "specifiedTags":
            *[ _type == 'designCategory' || _type == 'genericCategory'
            ] {
                _type,
                title
            }
    }`);

    // allQueries.queryString = queryString; // Query debugging.

    if (allQueries.postRequests) {
        return allQueries;}
    else {
        throw new error(404, "No return searches found.");}
}
