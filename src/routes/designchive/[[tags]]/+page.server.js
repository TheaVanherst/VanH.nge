
import client from "$lib/sanityClient.js";
import { designQuery } from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const {tags} = params

    let queryArray =    undefined,
        queryType =     undefined;

    let allQueries = {
        "postRequests": undefined,
        "tags":         undefined,
        "queryType":    undefined,
    };

    if (!!tags){
        let query = tags.split('=');
        if (query.length === 2){
            queryType = query[0];
            queryArray = query[1].split(':');

            allQueries.tags = queryArray;
            allQueries.queryType = queryType;
        } else {
            if (query.length > 2){
                throw new error(404, "Query type is too long.")
            }
        }
    }

    allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'designPost'
            ] | 
            order(publishedAt desc)[0..20] {
                ${ designQuery }
            },
        "specifiedTags":
            *[ _type == 'designCategory'
            ] {
                title
            }
    }`);

    allQueries.tags = queryArray;
    allQueries.queryType = queryType;

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
