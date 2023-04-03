
import client       from "$lib/sanityClient.js";
import { error }    from '@sveltejs/kit';

import { blogPreviewQuery } from "$lib/queries/blogPosts";
import { pinnedId }         from "$lib/queries/internalReferencing.js";

export const load = async () => {
    let allQueries = await client.fetch(`{
        "postRequests": 
            *[ _type == "blogPost" && 
                "${ pinnedId }" in categories[] -> _id
            ] | order(publishedAt desc){
                ${ blogPreviewQuery }
            }
        }`);

    allQueries.contentsList = {
        title:     "Contents",
        contents:   allQueries.postRequests.map(x => x.title),
        preview:    true,
    };

    if (allQueries.postRequests) {
        return allQueries;
    } else {
        throw new error(404, "There was an searching for featured posts.")
    }
}